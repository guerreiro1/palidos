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
    MerchandiseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
