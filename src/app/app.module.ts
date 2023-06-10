import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DescriptionComponent } from './components/my-description/mydescription.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { MyProjectsComponent } from './components/my-projects/my-projects.component';
import { NavbarSectionComponent } from './components/navbar-section/navbar-section.component';
import { BackgroundGradientComponent } from './components/background-gradient/background-gradient.component';
import { TitleSectionComponent } from './components/title-section/title-section.component';
import { MySkillsComponent } from './components/my-skills/my-skills.component';
import { MyContactComponent } from './components/my-contact/my-contact.component';
import { MyFooterComponent } from './components/my-footer/my-footer.component';
import { ImgFondoComponent } from './components/img-fondo/img-fondo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DescriptionComponent,
    IniciarSesionComponent,
    PortfolioComponent,
    MyProjectsComponent,
    NavbarSectionComponent,
    BackgroundGradientComponent,
    TitleSectionComponent,
    MySkillsComponent,
    MyContactComponent,
    MyFooterComponent,
    ImgFondoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
