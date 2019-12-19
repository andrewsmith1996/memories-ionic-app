import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController, LoadingController, ToastController } from '@ionic/angular';

// Ionic Native
import { Geolocation } from '@ionic-native/geolocation/ngx';

// Services
import { MemoryDataService } from '../../services/memory-data.service';

// Used for Google Maps
declare var google;

@Component({
  selector: 'app-nearby-location-modal',
  templateUrl: './nearby-location-modal.page.html',
  styleUrls: ['./nearby-location-modal.page.scss'],
})

export class NearbyLocationModalPage implements OnInit {

    public lat: number;
    public long: number;
    public places: any[] = [];
    public loading_spinner: any;

    // Google Masp variables
    @ViewChild('map') mapElement: ElementRef;
    public map: any;

    ngOnInit() {}

    constructor(
        public modalCtrl: ModalController, 
        private loadingCtrl: LoadingController, 
        private geolocation: Geolocation, 
        public memoryData: MemoryDataService, 
        public toastCtrl: ToastController) { 

        // Create a reference, as Firebase overides 'this' - ughhhh
        let self = this;

        // Present the loading spinner
        this.presentLoading().then((data) => {
            
            // Use Geolocation to get the current position
            this.geolocation.getCurrentPosition({timeout: 10000}).then(resp => {
                
                // Initialise our lat/long variables
                this.lat = resp.coords.latitude;
                this.long = resp.coords.longitude;
                
                // Create a lat/long objects
                var memory_location = new google.maps.LatLng(this.lat,this.long);
                
                // Initialise our map
                var map = new google.maps.Map(document.getElementById('map'), {
                    center: memory_location,
                    zoom: 15
                });
                
                // Create a request to Google Nearby places API
                var request = {
                    location: memory_location,
                    radius:'300'
                };
                
                // Create our service and find the nearby places
                var service = new google.maps.places.PlacesService(map);
                service.nearbySearch(request, callback);
                
                // Function called once we've found nearby places
                function callback(results, status) {

                    // If the request worked 
                    if (status == google.maps.places.PlacesServiceStatus.OK) {
                        
                        // Go through all places returned and parse the JSON
                        for (var i = 0; i < results.length; i++) {

                            // Get the place
                            var place = results[i];
                            
                            let photo;

                            // Check if we have a photo for the place
                            if(place.photos && place.photos.length > 0){
                                photo = place.photos[0].getUrl();
                            } else {
                                photo = place.icon;
                            }
                            
                            // Push the place to the display array
                            self.places.push({
                                name:place.name,
                                address:place.vicinity,
                                rating:place.user_ratings_total,
                                photo_url: photo,
                                lat:place.geometry.location.lat(),
                                long:place.geometry.location.lng(),
                            });
                        }

                        // Dismiss the loading spinner
                        self.loading_spinner.dismiss();

                    } else {
                        this.presentErrorToast("Sorry, but we're unable to find any nearby locations. Please try again later.")
                    }
                }
                
            }).catch((err) => {
                console.log(err);
                self.loading_spinner.dismiss();
                this.modalCtrl.dismiss();
                this.presentErrorToast("Sorry, but we're unable to get your current location. Please try again later.")
            });
        })
    }

    public checkIn(place: any){

        // Dismiss the modal and pass back the place the user selected
        this.modalCtrl.dismiss({place:place, lat:place.lat, long:place.long});
    }

    public cancelModal(){

        // Dismiss the modal and just pass back the current lat long
        this.modalCtrl.dismiss({place:null, lat:this.lat, long:this.long});
    }

    async presentLoading() {

        // Create a loading spinner
        this.loading_spinner = await this.loadingCtrl.create({
          message: 'Searching nearby...'
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
