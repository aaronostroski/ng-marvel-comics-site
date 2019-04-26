// Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components imports
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/home/header/header.component';
import { MainComponent } from './pages/home/main/main.component';
import { MainCharacterComponent } from './pages/home/main/main-character/main-character.component';
import { MainComicsComponent } from './pages/home/main/main-comics/main-comics.component';
import { MainEventsComponent } from './pages/home/main/main-events/main-events.component';
import { FooterComponent } from './pages/home/footer/footer.component';

// Services imports
import { CharactersServices } from './shared/services/api/characters.service';
import { ComicsServices } from './shared/services/api/comics.service';
import { EventsServices } from './shared/services/api/events.service'
import { MainServices } from './shared/services/components/main.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    MainCharacterComponent,
    MainComicsComponent,
    MainEventsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    CharactersServices,
    ComicsServices,
    EventsServices,
    MainServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
