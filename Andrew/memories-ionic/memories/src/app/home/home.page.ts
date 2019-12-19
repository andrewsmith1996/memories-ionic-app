import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Memory } from '../models/memory';
import { NavController, LoadingController, ToastController, ModalController, Platform } from '@ionic/angular';

// Services
import { UserAuthenticationService } from '../services/user-authentication.service';
import { MemoryDataService } from '../services/memory-data.service';

// Ionic Native Plugins
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

// Router
import { Router } from '@angular/router';

// Modal Page
import { QrCodeMemoryModalPage } from '../components/qr-code-memory-modal/qr-code-memory-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage {

    public memories:Memory[] = [];
    private loading_spinner:any;
   
    public current_lat: number;
    public current_long: number;

    // When the screen is loaded
	ionViewWillEnter(){

		// Check if a user is currently signed in
		let user = this.userAuthService.getCurrentUser();

		if(!user){
			
			// Navigate back to the login screen
		    this.navCtrl.navigateBack('/login-screen');
		}
	}

    constructor(
        public userAuthService: UserAuthenticationService, 
        public navCtrl: NavController, 
        public memoryDataService: MemoryDataService, 
        public loadingCtrl: LoadingController, 
        public toastCtrl: ToastController, 
        private barcodeScanner: BarcodeScanner, 
        public modalCtrl: ModalController, 
        private localNotifications: LocalNotifications, 
        private geolocation: Geolocation, 
        private platform: Platform, 
        private router: Router){ 

        // Check if a user is currently signed in
		let user = this.userAuthService.getCurrentUser();

		if(!user){
			
			// Navigate back to the login screen
		    this.navCtrl.navigateBack('/login-screen');
        }

        // Geofencing - first time round, get the current position
        this.geolocation.getCurrentPosition().then((resp) => {

            // Initialise the lat/long variables
            this.current_lat = resp.coords.latitude;
            this.current_long = resp.coords.longitude;

            // Start up our Geofencing
            this.initialise_geofence();

        })
               
        // Subscribe to the user's position
        let position_susbcriber = this.geolocation.watchPosition();

        // Callback for when the user's location changes
        position_susbcriber.subscribe((resp) => {

            // Update the lat/long variables
            this.current_lat = resp.coords.latitude;
            this.current_long = resp.coords.longitude;

            // Start up our Geofencing
            this.initialise_geofence();
        });

        // Present our loading spinner
        this.presentLoading().then((data) => {

            // Empty the array
            this.memories = [];

            // Get the current signed in user
            let user = this.userAuthService.getCurrentUser();
        
            // Do we have a user?
            if(user){

                let memoriesRef = this.memoryDataService.getMemories(user.uid);
    
                let user_memories_ref = this.memories;
    
                // Create a reference to this - Firebase overides it!
                let self = this;
    
                // Go through all the memories
                memoriesRef.on('child_added', async function(data) {
                    
                    // Get the memory ID
                    let memory_id = data.key;
    
                    // Get the memory data
                    let memory_data = data.val();
    
                    let photo_url = null;
    
                    // Check if this photo has a memory
                    if(memory_data.photo_url){
    
                        try {
                            // Try to download the memory's photo from Firebase
                            photo_url = await self.memoryDataService.getImage(memory_data.photo_url);
                            
                        } catch(error){
    
                            // Check what error has occured
                            switch (error.code) {
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
    
                    // Construct a new Memory object 
                    let memory = new Memory(memory_id, memory_data.memory_title, photo_url, memory_data.memory_date, memory_data.memory_description, memory_data.memory_location, memory_data.memory_friends, memory_data.memory_lat, memory_data.memory_long, memory_data.username);
                  
                    // Push this memory to our list
                    user_memories_ref.push(memory);
                  
                    // Sort the memories by date order
                    self.memories.sort(function compare(a, b) {
                        var dateA = new Date(a.date).getTime();
                        var dateB = new Date(b.date).getTime();
                        return dateB - dateA;
                    });
                });
                
                // Dismiss the loading spinner
                this.loading_spinner.dismiss();
            }
        });
    }

    public initialise_geofence(){

        // Get the current signed in user
        let current_user = this.userAuthService.getCurrentUser();

        // If we have a user
        if(current_user){

            // Get a Firebase reference to this user's memories
            let memoriesRef = this.memoryDataService.getMemories(current_user.uid);
    
            // Create a reference to 'this' - as Firebase overides this
            let self = this;
    
            // Go through all of the memories for this user
            memoriesRef.on('child_added', function(data) {
                
                // Get the memory data
                let memory_data = data.val();
    
                // Check if we have all the Geolocation variables needed
                if(self.current_lat && self.current_long && memory_data.memory_lat && memory_data.memory_long){
                    
                    // Calculate the distance between the memory and the current location
                    let distance_from_memory = self.getDistance(self.current_lat, self.current_long, memory_data.memory_lat, memory_data.memory_long);
                    
                    // Check if the distance is less than 1000 metres away
                    let near_location = distance_from_memory <= 1 ? true : false;
                    
                    // If we are, then show a notification
                    if(near_location){
                        
                        // Schedule a notification to the user's device
                        self.localNotifications.schedule({
                            id: 1,
                            text: `Your memory "${ memory_data.memory_title }" was near here! Click to view.`,
                            sound: self.platform.is('android') ? 'file://sound.mp3': 'file://beep.caf', // Select correct notification sound for the OS 
                            data: { memory_id: memory_data.id } // Pass the memory ID so we can access it when the user clicks it
                        });
                
                        // Create an onclick event for when the user clicks the notification
                        self.localNotifications.on('click').subscribe(notification => {
                            
                            // Get the memory ID of the memory notification clicked on
                            let memory_id = notification.data.memory_id;
    
                            // Navigate the user to that memory's detail page
                            self.router.navigate(['memory-diary-detail/' + memory_id]);
                        });
                    }
                }      
            });
        }
    }

    public getDistance(current_latitude: any, current_longitude:any, memory_lat: any, memory_long:any){  
       
        // Calculate the distance
        let earth_radius = 6371;

        let lat_degrees = this.convert_degrees_to_radians(memory_lat - current_latitude);  
        let long_degrees = this.convert_degrees_to_radians(memory_long -current_longitude);  

        let a = Math.sin(lat_degrees/2) * Math.sin(lat_degrees/2) + Math.cos(this.convert_degrees_to_radians(current_latitude)) * Math.cos(this.convert_degrees_to_radians(memory_lat)) * Math.sin(long_degrees/2) * Math.sin(long_degrees/2);  
        let c = 2 * Math.asin(Math.sqrt(a));  
        let distance = earth_radius * c;  

        return distance;  
    }

    public convert_degrees_to_radians(degrees: number){

        // Convert the degrees to radians
        return degrees * Math.PI/180;
    }

    public signOut(){
        
        // Sign the user out of Firebase
        this.userAuthService.signOutUser().then(res => {

            // Navigate back to the login screen
            this.navCtrl.navigateBack('/login-screen');
        })
    }

    public async scanMemory(){

        // Callback for when a QR code is scanned
        this.barcodeScanner.scan().then(async barcodeData => {
            
            // Check if we have any text in the QR code
            if(barcodeData.text){
                
                // Create the modal to show the memory's detail, using our pre-built component
                const scanned_memory_modal = await this.modalCtrl.create({
                    component: QrCodeMemoryModalPage,
                    componentProps: {
                        memory_id: barcodeData.text
                    }
                });
            
                // Present the modal
                return await scanned_memory_modal.present();
            }
        }).catch(err => {
            console.log(err);
            this.presentErrorToast("Unable to load QR code scanner. Please try again later.");
        });
    }

    async presentLoading() {

        // Create a loading spinner
        this.loading_spinner = await this.loadingCtrl.create({
          message: 'Loading Memories...'
        });
        
        // Present the loading spinner
        await this.loading_spinner.present();
    }

    async presentErrorToast(errorMsg: string) {
        
        // Create the toast message
        const toast = await this.toastCtrl.create({
            message: errorMsg,
            duration: 2000,
            position:'top',
            color:'danger'
        });
    
        // Present the toast message
        toast.present();
    }
}
