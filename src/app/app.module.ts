import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectsComponent } from './components/library/projects/projects.component';
import { SkillsComponent } from './components/library/skills/skills.component';
import { CertificatesComponent } from './components/library/certificates/certificates.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExperienceComponent } from './components/library/experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ProjectsComponent,
    SkillsComponent,
    CertificatesComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
