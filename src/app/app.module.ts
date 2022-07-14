import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBKgEs60v2Yi-EZzGGq8Bu0j8AuUr2J3gc",
  authDomain: "apollo-muse.firebaseapp.com",
  projectId: "apollo-muse",
  storageBucket: "apollo-muse.appspot.com",
  messagingSenderId: "636179285491",
  appId: "1:636179285491:web:ad37dfdf0bd619f1d5fe86",
  measurementId: "G-YE5CT9JRLH"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
