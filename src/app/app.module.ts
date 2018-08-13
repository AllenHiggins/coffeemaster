import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { CardComponent } from './menu/card/card.component';
import { CardService } from './Services/card.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    AboutComponent,
    MenuComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
