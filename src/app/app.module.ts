// Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components imports
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/home/header/header.component';
import { CardComponent } from './pages/home/main/card/card.component';

// Services imports
import { CharacterServices } from './shared/services/characters.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [CharacterServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
