import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LikedComponent } from './liked/liked.component';
import { MainComponent } from './main/main.component';
import { FilteredVideosComponent } from './search/filtered-videos/filtered-videos.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: 'home',
    component: MainComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'liked',
    component: LikedComponent
  },
  { path: 'search/:query', component: FilteredVideosComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
