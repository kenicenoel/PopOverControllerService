import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { PopOverService } from '../../services/popover-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage 
{
  selectedItem: string;
  currentEvents:any;
  constructor(public navCtrl: NavController, private popOverService:PopOverService, public event:Events) 
  {
    event.subscribe('selectedData', selectedData => 
    {
      this.selectedItem = selectedData;
      
    });

    this.currentEvents = [
      {
        year: 2017,
        month: 11,
        date: 25
      },
      {
        year: 2017,
        month: 11,
        date: 26
      }
    ];
  }

  showPopOver(event)
  {
    this.popOverService.presentPopover(event);
    //this.selectedItem = this.popOverService.selectedData
  }

 
}
