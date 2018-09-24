import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {GoogleMapsComponent} from '../components/google-maps/google-maps';



export const firebaseConfig = {
  apiKey: "AIzaSyDVtKxKTR0VzdTdVNzxdnTee7Gqd23GNnY",
  authDomain: "pokemapabsb.firebaseapp.com",
  databaseURL: "https://pokemapabsb.firebaseio.com",
  projectId: "pokemapabsb",
  storageBucket: "pokemapabsb.appspot.com",
  messagingSenderId: "402792109475"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    GoogleMapsComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, 'pokeMap'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFirestore,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
