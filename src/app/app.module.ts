import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteunoComponent } from './public/home/componenteuno/componenteuno.component';
import { NavbarComponent } from './public/page/navbar/navbar.component';
import { SideMenuComponent } from './public/page/side-menu/side-menu.component';
import { HeroComponent } from './public/page/hero/hero.component';
import { FooterComponent } from './public/page/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteunoComponent,
    NavbarComponent,
    SideMenuComponent,
    HeroComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
