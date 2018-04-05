import { HeartIcon } from './components/heart-icon';
import { ToggleIcon } from './components/toggle-icon';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PopOverService } from '../services/popover-service';
import { DatePopoverPage } from '../pages/date-popover/date-popover';
import { CalendarModule } from 'ionic3-calendar-en';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DatePopoverPage,
    ToggleIcon,
    HeartIcon,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CalendarModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DatePopoverPage,
    ToggleIcon,
    HeartIcon
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PopOverService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
