import { Component, OnInit } from '@angular/core';
import { ModalController , LoadingController} from '@ionic/angular'

// Router
import { Router, ActivatedRoute } from '@angular/router';

// Model
import { Memory } from '../../models/memory';

// Services
import { MemoryDataService } from '../../services/memory-data.service';
import { SearchResultsService } from '../../services/search-results.service';
import { UserAuthenticationService } from '../../services/user-authentication.service';
import { SearchAddFriendModalPage } from '../search-add-friend-modal/search-add-friend-modal.page';

@Component({
  selector: 'app-search-memories-modal',
  templateUrl: './search-memories-modal.page.html',
  styleUrls: ['./search-memories-modal.page.scss'],
})

export class SearchMemoriesModalPage implements OnInit {

	public memories:Memory[] = [];
	public searchResults:Memory[] = [];
	public loading_spinner:any;

    // Search criteria
	public searchTitle: string = "";
	public searchLocation: string = "";
	public searchDateStart: any = new Date();
	public searchDateEnd: any = new Date().toISOString();
	public searchFriends: string[] = [];

	ngOnInit() {}
	
	constructor(
		public modalCtrl: ModalController, 
		public memoryDataService: MemoryDataService, 
		public loadingCtrl:LoadingController, 
		private router: Router, 
		private searchResultsService: SearchResultsService, 
		private userAuthService: UserAuthenticationService){
    
            // Initialise the start date by taking away 3 months from today's date
			this.searchDateStart = new Date(new Date(this.searchDateStart).setDate(new Date(this.searchDateEnd).getDate() - 90)).toISOString();
	}

	public closeModal(){
		
		// Close the modal
		this.modalCtrl.dismiss();
	}

	public searchMemories(){
		
		// Get the current signed in user
        let user = this.userAuthService.getCurrentUser();
        
        if(user){

            // Present a loading spinner
            this.presentLoading().then(async (data) => {
                
                // Get all memories
                let memoriesRef = this.memoryDataService.getMemories(user.uid);
                
                // Create a reference to 'this'
                let self = this;
                
                // Go through all memories
                memoriesRef.on('child_added', async function(data) {

                    // Get the memory ID
                    let memory_id = data.key;

                    // Get the memory data
                    let memory_data = data.val();
                
                    let photo_url = null;
    
                    // Check if this photo has a memory
                    if(memory_data.photo_url){

                        // Try to download the memory's photo from Firebase
                        photo_url = await self.memoryDataService.getImage(memory_data.photo_url);
                       
                    } 

                    // Create a new memory object from it
                    let memory = new Memory(memory_id, memory_data.memory_title, photo_url, memory_data.memory_date, memory_data.memory_description, memory_data.memory_location, memory_data.memory_friends, memory_data.lat, memory_data.long, memory_data.username);
                    

                    let discard = false;

                    // Check the title
                    if(self.searchTitle != ""){
                        if(memory.title && !memory.title.toUpperCase().includes(self.searchTitle.toUpperCase())){
                            discard = true;
                        }
                    }
                    
                    // Check the location
                    if(self.searchLocation != ""){
                        if(memory.location && !memory.location.toUpperCase().includes(self.searchLocation.toUpperCase())){
                            discard = true;
                        }
                    }
                    
                    // Construct our dates
                    let memoryDate = new Date(memory.date);
                    let startDate = new Date(self.searchDateStart)
                    let endDate = new Date(self.searchDateEnd)

                    // Check the date
                    if(!(memoryDate >= startDate && memoryDate <= endDate)){
                        discard = true;
                    }
                    
                    // Check the friends
                    if(self.searchFriends.length > 0){
                        if(memory.friends && memory.friends.length > 0){
                            self.searchFriends.forEach(friendName => {
                                if(!memory.friends.some(friend => friend['name'] === friendName['name'])){
                                    discard = true;
                                }
                            })
                        } else {
                            discard = true;
                        }
                    }
                    
                    // If the memory fulfills all search criteria then add it to the search results
                    if(!discard){
                        self.memories.push(memory);
                        
                        // Sort the memories by date order
                        self.memories.sort(function compare(a, b) {
                            var dateA = new Date(a.date).getTime();
                            var dateB = new Date(b.date).getTime();
                            return dateB - dateA;
                        });
                    }
                });
                
                // Dismiss the loading spinner
                this.loading_spinner.dismiss();
                
                // Close the modal
                this.closeModal();
        
                // Use our service to initialise the search results variable
                this.searchResultsService.setSearchResults(this.memories);
                
                // Navigate back to the search results page
                this.router.navigate(['/search-results']);
            });
        }
    }
    
    public async addFriends(){
        
        // Load the 'choose friend' modal up
		const modal = await this.modalCtrl.create({
			component: SearchAddFriendModalPage,
			componentProps:{
				return_friends:this.searchFriends
			}
		});

		// Callback for when the modal has been dismissed
		modal.onDidDismiss().then((data) => {
            
            console.log(data.data)
			// Initialise the memory's friends variable
			this.searchFriends = data.data;
		});

		// Actually present the modal
		return await modal.present();
    }

  	async presentLoading() {

		// Create our loading spinner
		this.loading_spinner = await this.loadingCtrl.create({
	  		message: 'Searching Memories...'
		});
	
		// Present the loading spinner
		await this.loading_spinner.present();
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
}
