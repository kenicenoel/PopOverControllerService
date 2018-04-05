import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
    selector: 'page-datepopup',
    templateUrl: 'date-popover.html'
    
})
export class DatePopoverPage
{
    selectedItem: string;
    constructor(public viewCtrl: ViewController)
    {
        this.items = 
        [
            "Vacation Manager",
            "Superfund RedGreen",
            "Superfund Test",
            "Superfund Central"
        ]
    }

    items:any;


    close(item) 
    {
      this.viewCtrl.dismiss(item);
    }

}

