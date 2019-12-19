import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

// Modal page
import { SearchMemoriesModalPage } from '../search-memories-modal/search-memories-modal.page';

@Component({
  selector: 'nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  	constructor(
		  public modalController: ModalController,
		  public navCtrl: NavController) { }

  	ngOnInit() {}

  	public async openSearchMemoryModal(){
		
		// Create the modal
		const modal = await this.modalController.create({
			component: SearchMemoriesModalPage
	  	});

		// Present the modal
	  	return await modal.present();
  	}
}
