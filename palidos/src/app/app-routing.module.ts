import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ConcertsComponent } from './pages/concerts/concerts.component';
import { LineUpCardComponent } from './pages/concerts/line-up-card/line-up-card.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { MusicDetailsComponent } from './pages/music/music-details/music-details.component';
import { MusicDetails2Component } from './pages/music/music-details2/music-details2.component';
import { MusicComponent } from './pages/music/music.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'music', component: MusicComponent},
  { path: 'music/epa-lindo', component: MusicDetailsComponent},
  { path: 'music/no-mar-de-marte', component: MusicDetails2Component},
  { path: 'gallery', component: GalleryComponent},
  { path: 'concerts', component: ConcertsComponent},
  { path: 'about', component: AboutComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
