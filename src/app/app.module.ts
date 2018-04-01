import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { MyApp } from './app.component';

import { CatsPage } from '../pages/cats/cats';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PicturesProvider } from '../providers/pictures/pictures';
import { CatsProvider } from '../providers/cats/cats';

@NgModule({
  declarations: [
    MyApp,
    CatsPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CatsPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PicturesProvider,
    HttpModule,
    HttpClientModule,
    CatsProvider
  ]
})
export class AppModule {}
