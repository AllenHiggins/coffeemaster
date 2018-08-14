import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { CardComponent } from './menu/card/card.component';
import { CardService } from './Services/card.service';
import { ImagesComponent } from './images/images.component';
import { RatingsComponent } from './ratings/ratings.component';
import { ReviewComponent } from './ratings/review/review.component';
import { ReviewService } from './Services/review.service';
import { NumberCounterComponent } from './number-counter/number-counter.component';
import { StarsComponent } from './stars/stars.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    AboutComponent,
    MenuComponent,
    CardComponent,
    ImagesComponent,
    RatingsComponent,
    ReviewComponent,
    NumberCounterComponent,
    StarsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CardService, ReviewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
