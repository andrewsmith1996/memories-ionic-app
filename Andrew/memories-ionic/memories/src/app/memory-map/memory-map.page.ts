import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular'

// Services
import { UserAuthenticationService } from '../services/user-authentication.service';
import { MemoryDataService } from '../services/memory-data.service';

// Model
import { Memory } from '../models/memory';

// Ionic Native Plugins
import { Geolocation } from '@ionic-native/geolocation/ngx';

// Used for Google Maps
declare var google;

@Component({
  selector: 'app-memory-map',
  templateUrl: './memory-map.page.html',
  styleUrls: ['./memory-map.page.scss'],
})

export class MemoryMapPage implements OnInit {

    // Google Maps
    @ViewChild('map') mapElement: ElementRef;
    public map: any;

    public memories: any[] = [];
    private loading_spinner: any;
    private map_setup: boolean = false;
    private markers: any[] = [];

    constructor(
        public userAuthService: UserAuthenticationService, 
        public navCtrl: NavController, 
        private geolocation: Geolocation, 
        public memoryDataService: MemoryDataService, 
        public loadingCtrl: LoadingController,
        public toastCtrl: ToastController) { }

    // When the screen is loaded
	ionViewWillEnter(){

		// Check if a user is currently signed in
		let user = this.userAuthService.getCurrentUser();

		if(!user){
			
			// Navigate back to the login screen
		    this.navCtrl.navigateBack('/login-screen');
		}
	}

    ngOnInit(){

        // Reset the memories
        this.memories = [];
        
        // Clear all markers on the map
        this.clearMarkers();
       
        // Get the current signed in user
        let user = this.userAuthService.getCurrentUser();

        // Do we have a user?
        if(user){

            // Present the loading spinner
            this.presentLoading().then(async data => {
    
                // If the map hasn't already been set up
                if(!this.map_setup){

                    try{

                        // Get the current position
                        let current_location = await this.geolocation.getCurrentPosition({timeout:20000});
            
                        // Get current location, if not then set to default - London
                        let lat = (current_location ? current_location.coords.latitude: 51.5003646652);
                        let long = (current_location ? current_location.coords.longitude: -0.1214328476);
        
                        // Create the map options
                        let mapOptions = {
                            center: {lat:lat, lng: long},
                            zoom: 15,
                            mapTypeId: google.maps.MapTypeId.ROADMAP,
                            disableDefaultUI: true
                        }
            
                        // Initialise the map
                        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        
                        // Create the marker on the map of the current position
                        var marker = new google.maps.Marker({
                            position:{lat:lat, lng: long},
                            map: this.map,
                            icon: {                             
                                url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"                           
                            }
                        });
        
                        // Push this to the markers array
                        this.markers.push(marker);
                        
                        // Set the map as being setup
                        this.map_setup = true;
                    } catch(err){
                        console.log(err);
                        this.presentErrorToast("Unable to load memory map. Please try again.")
                        this.navCtrl.navigateRoot('/home');
                    }
                        
                }
                
                // Create a reference to this
                let self = this;
                
                // Get all memories for this current user
                let memoriesRef = this.memoryDataService.getMemories(user.uid);
        
                // Loop through all mmeories
                memoriesRef.on('child_added', async function(data) {
                    
                    // Get the memory's ID
                    let memory_id = data.key;
        
                    // Get the memory data
                    let memory_data = data.val();
                    
                    // Create a new memory object
                    let memory = new Memory(memory_id, memory_data.memory_title, memory_data.photo_url, memory_data.memory_date, memory_data.memory_description, memory_data.memory_location, memory_data.memory_friends, memory_data.memory_lat, memory_data.memory_long, memory_data.username);
                    
                    // If we have a map to initialise too
                    if(self.map){
                        
                        if(memory.lat && memory.long){
                            
                            let photo_url = null;
                            let marker_image = null;
    
                            // Check if we have a photo with this memory
                            if(memory_data.photo_url){
    
                                // Get the photo from Firebase Storage
                                photo_url = await self.memoryDataService.getImage(memory_data.photo_url);
                            } 
                        
                            // If we have a photo for the memory then add a marker with it on to the map
                            if(photo_url){
                                marker_image = {
                                    url:photo_url,
                                    scaledSize: new google.maps.Size(60, 50), 
                                    origin: new google.maps.Point(0, 0),
                                    anchor: new google.maps.Point(0, 32)
                                }
                            }
                            
                            // Create the marker image
                            let marker = new google.maps.Marker({
                                map: self.map,
                                animation: google.maps.Animation.DROP,
                                position:{lat:memory.lat, lng: memory.long},
                                icon: marker_image
                            });
                            
                            // Push this marker to the list
                            self.markers.push(marker);
    
                            // Add an event listener for when the user clicks on the memory via the map
                            google.maps.event.addListener(marker, 'click', () => {
    
                                // Navigate the user to the memory
                                self.navCtrl.navigateForward('/memory-diary-detail/' + memory_id);
                            });
                        }
                    }
                });
    
                // Dismiss the loading spinner
                this.loading_spinner.dismiss();
            })
        }
    }

    async presentLoading() {
        
        // Create the loading spinner
        this.loading_spinner = await this.loadingCtrl.create({
          message: 'Loading Memory Map...'
        });
        
        // Present the loading spinner
        await this.loading_spinner.present();
    }

    public clearMarkers(){
        
        // Go through all markers on the map and clear them
        for (var i = 0; i < this.markers.length; i++) {
              this.markers[i].setMap(this.map);
        }
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
}
