import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController, ToastController } from '@ionic/angular';

// Ionic Native Plugins
import { Contacts } from '@ionic-native/contacts/ngx';

@Component({
  selector: 'app-add-friend-modal',
  templateUrl: './add-friend-modal.page.html',
  styleUrls: ['./add-friend-modal.page.scss'],
  providers: [Contacts]
})

export class AddFriendModalPage implements OnInit {

	public contactlist: any[];

	public return_friends: any[] = [];
	public friends: any[] = [];
	public loading_spinner: any;
	public manualFriendName: string;

	ngOnInit() {}

	constructor(
		public modalCtrl: ModalController,
		private loadingCtrl: LoadingController,
		private toastCtrl: ToastController,
		private contacts: Contacts) { 

		// Present the loading spinner
		this.presentLoading().then(data => {

			// Find contacts in the contact list
			this.contacts.find(['displayName', 'name'], {filter: "", multiple: true})
			.then(data => {

				// Check if we have found any contacts
				if(data.length > 0){

					// Go through all the contacts
					data.forEach(item => {

						// Get the contact's name
						let friend_name = item.name.formatted;
						
						// Workout if this friend is already in our added friends list
						let added = this.return_friends && this.return_friends.length > 0 && this.return_friends.some(friend => friend.name === friend_name) ? true : false;

						// Create our new friend object
						let friend = {name: friend_name, added: added};
					   
						// Push this friend to the array
						this.friends.push(friend);
					});
				} else {
					this.presentErrorToast("It doesn't look like you've got any contacts.")
				}
			}).catch(err => {
				console.log(err);
				this.presentErrorToast("Sorry, but we're unable to get your contacts. Please try again later.")
            });
			
			// Dismiss the loading spinner
			this.loading_spinner.dismiss();
		})
	}

   	public addFriend(friend: any){
	
		// Toggle the friend's added state
		friend.added = true;

		// Push the friend to the array to return 
		this.return_friends.push(friend);
       }
       
   	public removeFriend(friend: any){

        // Toggle the friend's added state
        friend.added = false;

        // Find where in the array the friend is
        let array_position = this.return_friends.indexOf(friend);

        // If it's present, then remove it
        if (array_position > -1) {
            this.return_friends.splice(array_position, 1);
        }

   	}

   	public addFriendManual(){

		// Create an object of the friend's details
		let friend_manual = {name: this.manualFriendName, added: true};

		// Push the friend to the array to return
		this.return_friends.push(friend_manual);

		// Clear the input field
		this.manualFriendName = "";

		// Inform the user that a friend has been added
		this.presentSuccessToast();
   	}

   	public saveFriends(){

		// Close the modal and pass back the list of friends to return
	   	this.modalCtrl.dismiss(this.return_friends);
   	}

  	public cancelModal(){

		// Dismiss the modal and return nothing
		this.modalCtrl.dismiss();
  	}

  	async presentLoading() {
	  
		// Create a new loading spinner
		this.loading_spinner = await this.loadingCtrl.create({
			message: 'Loading Contacts...'
	   	});
	   
		// Present the loading spinner
	   	await this.loading_spinner.present();
   	}

	async presentSuccessToast() {
	
		// Create a toast message
		const toast = await this.toastCtrl.create({
			message: "Friend added",
			duration: 2000,
			position:'top',
			color:'success'
		});

		// Present the toast message
		toast.present();

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
