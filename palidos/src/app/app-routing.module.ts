import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ConcertsComponent } from './pages/concerts/concerts.component';
import { LineUpCardComponent } from './pages/concerts/line-up-card/line-up-card.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { MusicDetailsComponent } from './pages/music/music-details/music-details.component';
import { MusicDetails2Component } from './pages/music/music-details2/music-details2.component';
import { MusicDetails3Component } from './pages/music/music-details3/music-details3.component';
import { MusicComponent } from './pages/music/music.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MerchandiseComponent } from './pages/merchandise/merchandise.component';
import { MerchandiseDetailsComponent } from './pages/merchandise/merchandise-details/merchandise-details.component';
import { TrendingComponent } from './pages/trending/trending.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'music', component: MusicComponent},
  { path: 'music/epa-lindo', component: MusicDetailsComponent},
  { path: 'music/no-mar-de-marte', component: MusicDetails2Component},
  { path: 'music/fim-do-nada', component: MusicDetails3Component},
  { path: 'merchandise', component: MerchandiseComponent},
  { path: 'merchandise/tee1', component: MerchandiseDetailsComponent},
  { path: 'gallery', component: GalleryComponent},
  { path: 'concerts', component: ConcertsComponent},
  { path: 'contacts', component: ContactsComponent},
  { path: 'about', component: AboutComponent},
  { path: 'news', component: TrendingComponent},
  { path: '**', component: PageNotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
