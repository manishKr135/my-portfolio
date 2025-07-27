import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectsComponent } from './components/library/projects/projects.component';
import { SkillsComponent } from './components/library/skills/skills.component';
import { CertificatesComponent } from './components/library/certificates/certificates.component';
import { ExperienceComponent } from './components/library/experience/experience.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgxPageScrollCoreModule,
        NgxPageScrollModule,
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        ProjectsComponent,
        SkillsComponent,
        CertificatesComponent,
        ExperienceComponent,
        FooterComponent,
      ],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'portfolio'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('portfolio');
  });

  
});
