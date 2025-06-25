import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SkillCardComponent } from './components/skill-card/skill-card.component';

import { ProjectCardComponent } from './components/project-card/project-card.component';

import { SkillsData } from './data/Skills';
import { ProjectsData } from './data/Projects';

import { MainimageComponent } from './components/mainimage/mainimage.component';
import { ContentbarComponent } from './components/contentbar/contentbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent,MainimageComponent,ContentbarComponent,SkillCardComponent,ProjectCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  skillsData=SkillsData;
  projectsData=ProjectsData;

  projectCardComponent=ProjectCardComponent;

  skillCardComponent = SkillCardComponent;
  title = 'netflix-portfolio';
}
