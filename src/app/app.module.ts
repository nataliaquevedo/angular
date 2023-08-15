import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

import { ContactoComponent } from './contacto/contacto.component';
import { TeamComponent } from './team/team.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { IntroComponent } from './intro/intro.component';

import { TestimoniosComponent } from './testimonios/testimonios.component';
import { Clientes2Component } from './clientes2/clientes2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ServiciosComponent,
    PortfolioComponent,
    ContactoComponent,
    TeamComponent,
    SobreNosotrosComponent,
    IntroComponent,
    TestimoniosComponent,
    Clientes2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
