import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular'

// Services
import { UserAuthenticationService } from '../services/user-authentication.service';
import { SearchResultsService } from '../services/search-results.service';

// Model
import { Memory } from '../models/memory';

// Router
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.page.html',
  styleUrls: ['./search-results.page.scss'],
})

export class SearchResultsPage implements OnInit {
    
    public memories: Memory[] = [];
    
    constructor(
        public userAuthService: UserAuthenticationService,
        public navCtrl: NavController, 
        private route: ActivatedRoute, 
        private searchResultsService: SearchResultsService) { 
        
        // Get the search results from our service we set earlier 
        this.memories = this.searchResultsService.getSearchResults();
        console.log(this.searchResultsService.getSearchResults());
    }

    // When the screen is loaded
	ionViewWillEnter(){

		// Check if a user is currently signed in
		let user = this.userAuthService.getCurrentUser();

		if(!user){
			
			// Navigate back to the login screen
		    this.navCtrl.navigateBack('/login-screen');
		}
	}

  ngOnInit(){}
}
