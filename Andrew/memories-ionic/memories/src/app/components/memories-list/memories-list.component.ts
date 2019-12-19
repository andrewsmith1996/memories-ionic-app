import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';

// Model
import { Memory } from '../../models/memory';

// Services
import { MemoryDataService } from '../../services/memory-data.service';
import { UserAuthenticationService } from '../../services/user-authentication.service';

@Component({
  selector: 'memories-list',
  templateUrl: './memories-list.component.html',
  styleUrls: ['./memories-list.component.scss']
})

export class MemoriesListComponent implements OnInit {
    
    // Construct the memories list from what's been passed to the components
    @Input() memories: Memory[] = [];
    public current_user: string;

    ngOnInit() {}
    
    constructor(
        
        public navCtrl: NavController, 
        public memoryDataService: MemoryDataService,
        public userAuthService: UserAuthenticationService) { 
       
        // Get the currently signed in user
        let user = this.userAuthService.getCurrentUser();

        // Do we have a user?
        if(user){

            // Get the current usersigned in user's email
            this.current_user = user.email;
        }
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
