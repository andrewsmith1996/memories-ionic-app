import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { LoadingController, NavController, ModalController, ToastController } from '@ionic/angular';

// Ionic Native Plugins
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

// Services
import { MemoryDataService } from '../services/memory-data.service';
import { UserAuthenticationService } from '../services/user-authentication.service';

// Modals
import { NearbyLocationModalPage } from '../components/nearby-location-modal/nearby-location-modal.page';
import { AddFriendModalPage } from '../components/add-friend-modal/add-friend-modal.page';

// Used for Google Maps
declare var google;

@Component({
  selector: 'app-add-memory',
  templateUrl: './add-memory.page.html',
  styleUrls: ['./add-memory.page.scss'],
})

export class AddMemoryPage implements OnInit {

	public title:string = "";
	public date:any  = new Date().toISOString();
	public location: string = "";
	public description: string = "";
	public friends: string[] = [];
	public base64_image:string = null;
	public lat: number = null;
	public long: number = null;
	public loading_spinner:any;

	// Google Maps
	@ViewChild('map') mapElement: ElementRef;
	public map: any;

	ngOnInit(){}

	constructor(
		private camera: Camera, 
		public loadingController: LoadingController, 
		public memoryData: MemoryDataService, 
		public userAuthService: UserAuthenticationService, 
		public navCtrl: NavController, 
		public modalCtrl: ModalController, 
		public toastCtrl: ToastController) {}   

	// When the screen is loaded
	ionViewWillEnter(){

		// Check if a user is currently signed in
		let user = this.userAuthService.getCurrentUser();

		if(!user){
			
			// Navigate back to the login screen
		    this.navCtrl.navigateBack('/login-screen');
		}
	}

	public reloadMap(){
	   
		// If a latitude and longitude is set for this memory
		if(this.lat && this.long){

			// Create a new LatLng object
			let latLng = new google.maps.LatLng(this.lat, this.long);

			// Create the map options
			let mapOptions = {
				center: latLng,
				zoom: 15,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				disableDefaultUI: true
			}
			
			// Create the actual map
			this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
			
			// Put a marker on the map for the current position
			let marker = new google.maps.Marker({
				map: this.map,
				animation: google.maps.Animation.DROP,
				position:latLng
			});
		}
	}

	public onAddPhotoPress(){

		// Create our camera options
		const options: CameraOptions = {
			quality: 80,
			destinationType: this.camera.DestinationType.DATA_URL,
			encodingType: this.camera.EncodingType.JPEG,
			mediaType: this.camera.MediaType.PICTURE
		}
	  
		// Take the picture
		this.camera.getPicture(options).then((imageData) => {
			this.base64_image = 'data:image/jpeg;base64,' + imageData;
		}, (err) => {
			console.log(err);
			this.presentErrorToast("Sorry, but we're unable to load the camera. Please try again later.")
		});
	}

	public async onAddFriendPress(){
	   
		// Load the 'choose friend' modal up
		const modal = await this.modalCtrl.create({
			component: AddFriendModalPage,
			componentProps:{
				return_friends:this.friends
			}
		});

		// Callback for when the modal has been dismissed
		modal.onDidDismiss().then((data) => {
            
			// Initialise the memory's friends variable
			this.friends = data.data;
		});

		// Actually present the modal
		return await modal.present();
	}

	public async onGetLocationPress(){
	   
		// Load the 'nearby location' modal up
		const modal = await this.modalCtrl.create({
			component: NearbyLocationModalPage,
		});
	
		// Callback for when the modal is dismissed
		modal.onDidDismiss().then((data) => {

            if(data){

                // Initiliaise the memory's location variables
                if(data.data.place){
                    this.location = data.data.place.name;
                }
    
                if(data.data.lat){
                    this.lat = data.data.lat;
                }
    
                if(data.data.long){
                    this.long = data.data.long;
                }
    
                // Reload the map
                this.reloadMap();
            }

			
		});

		// Actually present the modal
		return await modal.present();
    }
    
    public deletePhoto(){
        this.base64_image = null;
    }

	public saveMemory(){

        if(this.title && this.description){
            
            // Present the loading spinner
            this.presentLoading().then((data) => {
                
                // Get the current signed in user
                let user = this.userAuthService.getCurrentUser();
                    
                // Check if we have a user
                if(user){
                
                    // Construct an object containing all the memory data
                    let memory = {
                        title:this.title,
                        photo_url: null,
                        date: new Date(this.date),
                        description: this.description,
                        friends: this.friends,
                        location: this.location,
                        lat: this.lat,
                        long: this.long,
                        username: user.email
                    };
    
                    // Add the memory to Firebase using our service
                    this.memoryData.addMemory(user.uid, memory).then(added_memory => {
                        
                        // Check if we have an image to add
                        if(this.base64_image){
    
                            // We do have an image, so let's upload it to Firebase
                            this.memoryData.uploadImage(this.base64_image, added_memory.key).then(res => {
                                
                                // Get the ID of the added memory and update the memory's photo url field
                                this.memoryData.updatePhotoUrl(added_memory.key).then(res => {
                                    
                                    // Call our finishing function
                                    this.finish();
                                })
                            }).catch(err => {
                                console.log(err);
                                this.presentErrorToast("Sorry, but we're unable to add this photo to the memory. Please try again later.")
                            });
                        } 
                        else {
                            // We don't have an image, so let's just finish up
                            this.finish();
                        }
                    }).catch(err => {
                        console.log(err);
                        this.presentErrorToast("Sorry, but we're unable to save this memory. Please try again later.")
                    });
                }
            });
        } else {
            this.presentErrorToast("Please add information to your memory.");
        }
	}

	public finish(){

		// Dismiss the loading spinner
		this.loading_spinner.dismiss();

		// Inform the user that the memory has been added
		this.presentSuccessToast();

		// Navigate back to the home screen
		this.navCtrl.navigateBack('/home');
	}

	async presentSuccessToast() {

		// Create a Toast displaying a success message
		const toast = await this.toastCtrl.create({
			message: "Memory Successfully Added",
			duration: 2000,
			position:'top',
			color:'success'
		});
	
		// Present the toast message
		toast.present();
	
	}

	public async presentErrorToast(errorMessage: string) {

		// Create a Toast displaying a success message
		const toast = await this.toastCtrl.create({
			message: errorMessage,
			duration: 2000,
			position:'top',
			color:'danger'
		});
	
		// Present the toast message
		toast.present();
	
	}

	public async presentLoading() {

		// Create our loading spinner
		this.loading_spinner = await this.loadingController.create({
		  message: 'Saving Memory...'
		});
		
		// Present our loading spinner
		await this.loading_spinner.present();
	}
}
