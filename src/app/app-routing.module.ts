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
import { TrendingDetailsComponent } from './pages/trending/trending-details/trending-details.component';
import { TrendingDetails2Component } from './pages/trending/trending-details2/trending-details2.component';
import { TrendingDetails3Component } from './pages/trending/trending-details3/trending-details3.component';
import { TrendingDetails4Component } from './pages/trending/trending-details4/trending-details4.component';
import { TrendingDetails5Component } from './pages/trending/trending-details5/trending-details5.component';
import { TrendingDetails6Component } from './pages/trending/trending-details6/trending-details6.component';
import { TrendingDetails7Component } from './pages/trending/trending-details7/trending-details7.component';
import { TrendingDetails8Component } from './pages/trending/trending-details8/trending-details8.component';

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
  { path: 'news/fim-do-nada-album-de-estreia-dos-palidos', component: TrendingDetailsComponent},
  { path: 'news/palidos-na-sic-noticias', component: TrendingDetails2Component},
  { path: 'news/website-festival-da-nocao-avalia-fim-do-nada', component: TrendingDetails3Component},
  { path: 'news/fim-do-nada-e-uma-sugestao-do-website-norte-americano-girl-underground-music', component: TrendingDetails4Component},
  { path: 'news/artigo-sobre-album-de-estreia-na-glam-magazine', component: TrendingDetails5Component},
  { path: 'news/entrevista-palidos', component: TrendingDetails6Component},
  { path: 'news/fim-do-nada-tour-verao', component: TrendingDetails7Component},
  { path: 'news/fim-do-nada-tour', component: TrendingDetails8Component},
  { path: '**', component: PageNotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
