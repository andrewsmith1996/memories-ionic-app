import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

// Service
import { UserAuthenticationService } from '../services/user-authentication.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.page.html',
  styleUrls: ['./login-screen.page.scss'],
})
export class LoginScreenPage implements OnInit {

	private signInUserDetails:any = {};
	private signUpUserDetails:any = {};

	ngOnInit(){}

	constructor(
		public navCtrl: NavController,
		public userAuthService: UserAuthenticationService,
		private toastCtrl: ToastController) { }

	public signIn(){

		// Check if we have all the necessary details
		if(this.signInUserDetails.userEmail != null && this.signInUserDetails.userPassword != null){
		
			// Use Firebase to sign in the user in
			this.userAuthService.signInUser(this.signInUserDetails.userEmail, this.signInUserDetails.userPassword)
			.then(res => {

				// User has successfully signed in so naviagte to the home screen
				this.navCtrl.navigateForward('/home');

				// Present a success message
				this.presentSuccessToast("Welcome");

			}).catch(error => {
				
				// An error has occured, show it to the user
				if(error.message){
					console.log(error);
					
					// Present the error via a toast message
					this.presentErrorToast(error.message);
				}
			});        
		} else {

			// User hasn't filled in all the necessary details
			this.presentErrorToast("Please enter all details.");
		}
  	}

  	public signUp(){
	
		// Check if the user has inputted in all the correct details
		if(this.signUpUserDetails.userEmail != null && this.signUpUserDetails.userPassword != null && this.signUpUserDetails.userPasswordConfirm != null){
		
			// Check if the password and confirm passwords match
			if(this.signUpUserDetails.userPassword === this.signUpUserDetails.userPasswordConfirm){
				
				// Use Firebase to sign the user up
				this.userAuthService.signUpUser(this.signUpUserDetails.userEmail, this.signUpUserDetails.userPassword)
				.then(res => {
					
					// Navigate to the home page
					this.navCtrl.navigateForward('/home');

					// Inform the user that they've successfully signed in
					this.presentSuccessToast("Welcome");
				}).catch(error => {
					
					console.log(error);
					
					// Check if we've got an error
					if(error.message){

						// Present the error to the user through a Toast message
						this.presentErrorToast(error.message);
					}
				});        
			} else {

				// Inform the user their passwords don't match
				this.presentErrorToast("Passwords don't match.");
			}
		} else {
			
			// User hasn't filled in all the information
			this.presentErrorToast("Please enter all details.");
		}
    }
    
    public forgottenPassword(){

        // Check if we have an email
        if(this.signInUserDetails.userEmail != null){

            // Get the email address
            let emailAddress = this.signInUserDetails.userEmail;
    
            // Call our user auth service to send a password reset email
            this.userAuthService.forgottenPassword(emailAddress).then(data => {

                // Successfully sent
                this.presentSuccessToast("You've been sent a password reset email.");
            }).catch(function(err) {
                
                // There's been an error, present a toast
                console.log(err)
                this.presentErrorToast("There's been an error resetting your password, please try again later.");
            });
        } else {
            this.presentErrorToast("Please enter your email address into the sign in box.");
        }
    }

  	async presentErrorToast(errorMessage: string) {
		
		// Create a new toast message 
		const toast = await this.toastCtrl.create({
	  		message: errorMessage,
	  		duration: 2000,
	  		position:'top',
	  		color:'danger'
		});

		// Present the toast message
		toast.present();
  	}

	async presentSuccessToast(message: string) {

		// User has succesfully signed in - create a new toast message
		const toast = await this.toastCtrl.create({
			message: message,
			duration: 2000,
			position:'top',
			color:'primary',
		});

		// Present the toast message
		toast.present();
	}
}
