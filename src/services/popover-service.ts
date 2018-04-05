import { DatePopoverPage } from './../pages/date-popover/date-popover';
import { Injectable } from '@angular/core';
import { PopoverController, Events } from 'ionic-angular';

    @Injectable()
   export class PopOverService 
   {
      constructor(public popoverCtrl: PopoverController, public events:Events) {}
        selectedData:string;
      presentPopover(myEvent) 
      {
        let popover = this.popoverCtrl.create(DatePopoverPage);
        popover.present({
          ev: myEvent
        });

        popover.onDidDismiss(data => 
            {
                console.log(data);
                if(data!=null)
                {
                    this.selectedData = data
                }
            })

            this.events.publish('selectedData',this.selectedData);
      }

      
    }