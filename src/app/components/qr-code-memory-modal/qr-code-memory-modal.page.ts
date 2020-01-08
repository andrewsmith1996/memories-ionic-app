import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavController, ModalController, ToastController, LoadingController} from '@ionic/angular'

// Services
import { UserAuthenticationService } from '../../services/user-authentication.service';
import { MemoryDataService } from '../../services/memory-data.service';

// Router
import { ActivatedRoute } from '@angular/router';

// Model
import { Memory } from '../../models/memory';

declare var google;

@Component({
  selector: 'app-qr-code-memory-modal',
  templateUrl: './qr-code-memory-modal.page.html',
  styleUrls: ['./qr-code-memory-modal.page.scss'],
})
export class QrCodeMemoryModalPage implements OnInit {
   
    @ViewChild('map') mapElement: ElementRef;
    public map: any;
    public memory: Memory;
    public loading_spinner: any;
    public memory_id: any;

    constructor(
        public userAuthService: UserAuthenticationService, 
        public memoryDataService: MemoryDataService, 
        public navCtrl: NavController, 
        private route: ActivatedRoute, 
        public modalCtrl: ModalController, 
        public toastCtrl: ToastController, 
        public loadingController: LoadingController) { }

    ngOnInit() {
        
        // Create a reference to 'this' as Firebase overrides this 
        let self = this;

        // Present the loading spinner async function - woohoo!
        this.presentLoading("Loading...").then(async (data) => {
      
            // Get the memory from Firebase by its ID
            let memoriesRef = await this.memoryDataService.getMemoryById(this.memory_id);

            // Get it once 
            memoriesRef.once('value').then(async(snapshot) => {
                
                // Get the data from the Firebase snapshot
                let memory_data = snapshot.val();
                let photo_url = null;

                // Check if we have an image
                if(memory_data.photo_url){
                    
                    try {

                        // Get the image from Firebase Storage
                        photo_url = await self.memoryDataService.getImage(self.memory_id);
                
                    } catch(error){

                        // Error getting the image, find out why
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

                // Create a new memory object
                self.memory = new Memory(self.memory_id, memory_data.memory_title, photo_url, memory_data.memory_date, memory_data.memory_description, memory_data.memory_location, memory_data.memory_friends, memory_data.memory_lat, memory_data.memory_long, memory_data.username);

                // Dismiss the loading spinner
                this.loading_spinner.dismiss();
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

    public cancelModal(){

        // Dismiss the modal
		this.modalCtrl.dismiss();
    }
    
    public saveMemory(){
        
        // Present the loading spinner
        this.presentLoading("Saving...").then((data) => {

            let photo_id = null;

            // Check if we have a photo
            if(this.memory.photo_url){
                photo_id = this.memory.id;
            }

            // Create our memory object
            let memory = {
                title:this.memory.title,
                photo_url: photo_id,
                date: new Date(this.memory.date),
                description: this.memory.description,
                friends: this.memory.friends ? this.memory.friends : null,
                location: this.memory.location ? this.memory.location : null,
                lat: this.memory.lat ? this.memory.lat : null,
                long: this.memory.long ? this.memory.long : null,
                username:this.memory.user_name
            };
            
            // Get the user
            let user = this.userAuthService.getCurrentUser();
            
            // Check if we have a user
            if(user){

                // Add the memory to Firebase for this user
                this.memoryDataService.addMemory(user.uid, memory).then(added_memory => {
                    this.finish();
                }).catch(err => {
                    console.log(err);
                    this.presentErrorToast("Sorry, but we're unable to copy this memory. Please try again later.")
                });
            }
        });
    }

    public finish(){

        // Dismiss the loading spinner
        this.loading_spinner.dismiss();

        // Inform the user that the memory has been copied
        this.presentSuccessToast();

        // Dismiss the modal
        this.modalCtrl.dismiss();
    }
    
    async presentErrorToast(errorMsg: string) {

        // Create our toast message
        const toast = await this.toastCtrl.create({
            message: errorMsg,
            duration: 2000,
            position:'top',
            color:'warning'
        });
    
        // Display our toast message
        toast.present();
    }

    async presentLoading(message: string) {

        // Create our loading spinner
        this.loading_spinner = await this.loadingController.create({
            message: message
        });
        
        // Present our loading spinner
        await this.loading_spinner.present();
    }

    async presentSuccessToast() {

        // Create the toast message
        const toast = await this.toastCtrl.create({
            message: "Memory Successfully Copied",
            duration: 2000,
            position:'top',
            color:'success'
        });
    
        // Display our toast message
        toast.present();
    }
}
