import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavController, ModalController, ToastController, LoadingController} from '@ionic/angular'

// Services
import { UserAuthenticationService } from '../services/user-authentication.service';
import { MemoryDataService } from '../services/memory-data.service';

// Router
import { ActivatedRoute } from '@angular/router';

// Model
import { Memory } from '../models/memory';

// Modal Page
import { ShareMemoryModalPage } from '../components/share-memory-modal/share-memory-modal.page';

// Used for Google Maps
declare var google;

@Component({
  selector: 'app-memory-diary-detail',
  templateUrl: './memory-diary-detail.page.html',
  styleUrls: ['./memory-diary-detail.page.scss'],
})

export class MemoryDiaryDetailPage implements OnInit {
    
    // Google Maps
    @ViewChild('map') mapElement: ElementRef;
    private map: any;
    private loading_spinner: any;
    public current_user: string;
    public memory: Memory;

    constructor(
        public userAuthService: UserAuthenticationService,
        public memoryDataService: MemoryDataService, 
        public navCtrl: NavController, 
        private route: ActivatedRoute, 
        public modalCtrl: ModalController, 
        public toastCtrl: ToastController, 
        public loadingController: LoadingController) { 
        
    }

    // When the screen is loaded
	ionViewWillEnter(){

		// Check if a user is currently signed in
		let user = this.userAuthService.getCurrentUser();

		if(!user){
			
			// Navigate back to the login screen
		    this.navCtrl.navigateBack('/login-screen');
        } else {
            this.current_user = user.email;
        }
	}

    // When the view has loaded
    ngOnInit(){
  
        // Create a reference to 'this' early, as Firebase overides it
        let self = this;

        // Present the loading spinner
        this.presentLoading().then((data) => {
      
            // Get the memory ID from the uRL
            this.route.params.subscribe(async params => {

                let memory_id = params['id'];
                
                // Get the memory from Firebase by its ID
                let memoriesRef = await this.memoryDataService.getMemoryById(memory_id);

                // Actually get the memory
                memoriesRef.once('value').then(async(snapshot) => {
                    
                    // Get the memory data
                    let memory_data = snapshot.val();
                    let photo_url = null;

                    // Check if the memory has a photo
                    if(memory_data.photo_url){
                        
                        try {
                            
                            // The memory has a photo, so let's try and get it from Firebase Storage
                            photo_url = await self.memoryDataService.getImage(memory_data.photo_url);
                    
                        } catch(error){

                            console.log(error)

                            // An error has occured when trying to get the memory's image
                            switch (error.code) {

                                // Workout what error has occured and show it
                                case 'storage/object-not-found':
                                    self.presentErrorToast("Unable to download image. Please try again later.");
                                    break;
                                
                                case 'storage/unauthorized':
                                    self.presentErrorToast("Please sign in to download images.");
                                    break;
                                
                                case 'storage/canceled':
                                    self.presentErrorToast("Image download cancelled. Please try again later.");
                                    break;
                                
                                case 'storage/unknown':
                                    self.presentErrorToast("Unable to download image. Please try again later.");
                                    break;
                            }
                        }
                    } 
                    
                    // Create a new memory object
                    self.memory = new Memory(memory_id, memory_data.memory_title, photo_url, memory_data.memory_date, memory_data.memory_description, memory_data.memory_location, memory_data.memory_friends, memory_data.memory_lat, memory_data.memory_long, memory_data.username);
                    
                    // Check if we can make a map using the memory's location
                    if(this.memory.lat && this.memory.long){

                        // Create a lat/long object using the memory's location
                        let latLng = new google.maps.LatLng(this.memory.lat, this.memory.long);
            
                        // Create the map options
                        let mapOptions = {
                            center: latLng,
                            zoom: 15,
                            mapTypeId: google.maps.MapTypeId.ROADMAP,
                            disableDefaultUI: true
                        }
                        
                        // Actually intiailsie the map
                        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
                        
                        // Create a marker on the map where the memory took place
                        let marker = new google.maps.Marker({
                            map: this.map,
                            animation: google.maps.Animation.DROP,
                            position:latLng
                        });
                    }

                    // Dismiss the loading spinner
                    this.loading_spinner.dismiss();
                });      
            });
        });
    }

    public format_date(date:string){
        
        // Create the data timestamp
        let date_object = new Date(date);
    
        // Get the month strings
        let monthNames: string[] = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];
        
        // Decompose the date down into its objects
        let day = date_object.getDate();
        let monthIndex = date_object.getMonth();
        
        // Return the formatted date
        return (day < 10 ? '0' + day : day) + ' ' + monthNames[monthIndex] + ' ' + date_object.getFullYear();
  
    }

    async shareMemory(){
       
        // Create the modal and pass it the memory's ID
        const modal = await this.modalCtrl.create({
            component: ShareMemoryModalPage,
            componentProps: {
                memory: this.memory
            }
        });
    
        // Present the modal
        return await modal.present();
    }

    async presentErrorToast(errorMsg: string) {

        // Create a toast messagewith the error
        const toast = await this.toastCtrl.create({
            message: errorMsg,
            duration: 2000,
            position:'top',
            color:'warning'
        });
    
        // Present the toast message
        toast.present();
    }

    async presentLoading() {

        // Create a new loading spinner
        this.loading_spinner = await this.loadingController.create({
            message: 'Loading Memory...'
        });
        
        // Present the loading spinner
        await this.loading_spinner.present();
    }
}
