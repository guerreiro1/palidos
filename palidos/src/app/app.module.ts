import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MusicDetailsComponent } from './pages/music/music-details/music-details.component';
import { MusicDetails2Component } from './pages/music/music-details2/music-details2.component';
import { MusicDetails3Component } from './pages/music/music-details3/music-details3.component';
import { MusicComponent } from './pages/music/music.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { LineUpCardComponent } from './pages/concerts/line-up-card/line-up-card.component';
import { ConcertsComponent } from './pages/concerts/concerts.component';
import { AboutComponent } from './pages/about/about.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MerchandiseComponent } from './pages/merchandise/merchandise.component';
import { TrendingComponent } from './pages/trending/trending.component';
import { TrendingDetailsComponent } from './pages/trending/trending-details/trending-details.component';
import { TrendingDetails2Component } from './pages/trending/trending-details2/trending-details2.component';
import { TrendingDetails3Component } from './pages/trending/trending-details3/trending-details3.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    HomeComponent,
    MusicComponent,
    MusicDetailsComponent,
    MusicDetails2Component,
    MusicDetails3Component,
    GalleryComponent,
    LineUpCardComponent,
    ConcertsComponent,
    AboutComponent,
    PageNotFoundComponent,
    MerchandiseComponent,
    TrendingComponent,
    TrendingDetailsComponent,
    TrendingDetails2Component,
    TrendingDetails3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
