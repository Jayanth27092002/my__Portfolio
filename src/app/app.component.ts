import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SkillCardComponent } from './components/skill-card/skill-card.component';

import { ProjectCardComponent } from './components/project-card/project-card.component';

import { SkillsData } from './data/Skills';
import { ProjectsData } from './data/Projects';

import { CertificatesData } from './data/Certifications';

import { MainimageComponent } from './components/mainimage/mainimage.component';
import { ContentbarComponent } from './components/contentbar/contentbar.component';
import { CertificateCardComponent } from './components/certificate-card/certificate-card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent,MainimageComponent,ContentbarComponent,SkillCardComponent,ProjectCardComponent,CertificateCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  skillsData=SkillsData;
  projectsData=ProjectsData;
  certificatesData=CertificatesData;

  projectCardComponent=ProjectCardComponent;
  certificateCardComponent=CertificateCardComponent

  skillCardComponent = SkillCardComponent;
  title = 'netflix-portfolio';
}
