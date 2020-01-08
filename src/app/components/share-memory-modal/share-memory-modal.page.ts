import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams, ToastController } from '@ionic/angular'

// Model
import { Memory } from '../../models/memory';

// Services
import { UserAuthenticationService } from '../../services/user-authentication.service';

// Ionic Native Plugin
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

// Page
import { MemoryDiaryDetailPage } from 'src/app/memory-diary-detail/memory-diary-detail.page';
import { app } from 'firebase';

@Component({
  selector: 'app-share-memory-modal',
  templateUrl: './share-memory-modal.page.html',
  styleUrls: ['./share-memory-modal.page.scss'],
})

export class ShareMemoryModalPage implements OnInit {
    
    // Initialises the memory from the parameters passed to this modal
	@Input() memory: Memory;
	public memory_description: string;
	public elementType : 'url' | 'canvas' | 'img' = 'url';
	public qr_code_value : string;
    public current_user: string;

	constructor(
        public modalCtrl: ModalController, 
        public navParams: NavParams, 
        public socialSharing: SocialSharing, 
        public toastCtrl: ToastController,
        public userAuthService: UserAuthenticationService, ) { 

        // Get the currently signed in user
        let user = this.userAuthService.getCurrentUser();

        // Do we have a user?
        if(user){

            // Get the current usersigned in user's email
            this.current_user = user.email;
        }
        
        // Get the memory
        this.memory = this.navParams.get("memory");
        let memory = this.memory;
        
        // Get the memory's ID and intiailise the QR code with it
        this.qr_code_value = memory.id;
        
        // Construct the memory description for social media
        this.memory_description = memory.title + " on " + this.format_date(memory.date) + ".";

		if(memory.description) this.memory_description += (" " + memory.description + ".");
		if(memory.location) this.memory_description += (" At " + memory.location + ".");

	}

	ngOnInit() {
	}

	public cancelModal(){
        
        // Close the modal
		this.modalCtrl.dismiss();
	}

	public shareCompleted(app_name: string){

        // Share has been successful so inform the user
        this.presentSuccessToast(app_name);
        
        // Dimiss the modal
		this.modalCtrl.dismiss();
	}

	public shareViaFacebook(){

        // Callback for sharing via Facebook
		this.socialSharing.shareViaFacebook(this.memory_description, this.memory.photo_url, null).then(() => {
			this.shareCompleted("Facebook");
		}).catch((err) => {
			console.log(err)
			this.presentErrorToast("Facebook");
		});
	}
	
	public shareViaTwitter() {

        // Callback for sharing via Twitter
		this.socialSharing.shareViaTwitter(this.memory_description, this.memory.photo_url, null).then(() => {
			this.shareCompleted("Twitter");
		}).catch((err) => {
			console.log(err);
			this.presentErrorToast("Twitter");
		});
	}

	public shareViaInstagram() {

        // Callback for sharing via Instagram
		this.socialSharing.shareViaInstagram(this.memory_description, this.memory.photo_url).then(() => {
			this.shareCompleted("Instagram");
		}).catch((err) => {
			console.log(err);
			this.presentErrorToast("Instagram");
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

	public async presentErrorToast(app_name: string) {
        
        // Create a toast message
		const toast = await this.toastCtrl.create({
			message: `Sorry, but we're unable to share your memory this time. Please ensure that ${ app_name } is installed or try again later.`,
			duration: 2000,
			position:'top',
			color:'danger'
		});

        // Present the toast message
		toast.present();
	}

	public async presentSuccessToast(app_name: string) {

        // Instagram doesn't share, it can only copy to clipboard
        let message;
        
        if(app_name != "Instagram"){
           message = `Memory successfully shared to ${ app_name }!`
        } else {
            message = "Memory has been saved to clipboard";
        }
        
        // Create a toast message
		const toast = await this.toastCtrl.create({
			message: message,
			duration: 2000,
			position:'top',
			color:'success'
		});

        // Present the toast
		toast.present();
	}
}
