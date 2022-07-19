import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { LikedComponent } from './liked/liked.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilteredVideosComponent } from './search/filtered-videos/filtered-videos.component';
import { LoaderComponent } from './loader/loader.component';
import { VideoDetailsComponent } from './search/filtered-videos/video-player/video-details.component';

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
    AppComponent,
    MainComponent,
    NavbarComponent,
    SearchComponent,
    LikedComponent,
    FilteredVideosComponent,
    LoaderComponent,
    VideoDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
