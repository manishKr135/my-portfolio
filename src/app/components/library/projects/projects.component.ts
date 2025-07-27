import { Component } from '@angular/core';
import { PROFILE_IMAGE } from 'src/app/shared/constants/constants';
import { NAME } from 'src/app/shared/constants/constants';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  profileImage: string = PROFILE_IMAGE;
  name: string = NAME;
  //Projects
  projects = [
    {
      year: 'Year-2020',
      tag: 'Game',
      heading: '15 Puzzle',
      appUrl: 'https://one5-puzzleversion2.onrender.com',
      description: `The 15 Puzzle Game, also known as the "Sliding Puzzle" or "Fifteen Puzzle," is a classic mathematical puzzle game that has been entertaining people for over a century.`,
      image: this.profileImage,
      devTitle: 'Developer',
      devName: this.name,
    },
    {
      year: 'In Development',
      tag: 'Web App',
      heading: 'Click-o-Eat',
      appUrl: 'https://click-o-eat.onrender.com',
      description: `A food ordering website mockup which uses json-server for data handeling.`,
      image: this.profileImage,
      devTitle: 'Developer',
      devName: this.name,
    },
  ];
}
