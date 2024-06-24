import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  //Projects
  projects = [
    {
      year: 'Year-2020',
      tag: 'Game',
      heading: '15 Puzzle',
      appUrl: 'https://one5-puzzleversion2.onrender.com',
      description: `The 15 Puzzle Game, also known as the "Sliding Puzzle" or "Fifteen Puzzle," is a classic mathematical puzzle game that has been entertaining people for over a century.`,
      image: `https://media.licdn.com/dms/image/D4E03AQHUiGtuI9_7BQ/profile-displayphoto-shrink_800_800/0/1697716267135?e=1724889600&v=beta&t=cz9kML8OtMgRXutekR98I3T1LGA900U4BzcZs_NapqQ`,
      devTitle: 'Developer',
      devName: 'Manish Kumar'
    },
    {
      year: 'In Development',
      tag: 'Web App',
      heading: 'Click-o-Eat',
      appUrl: 'https://click-o-eat.onrender.com',
      description: `A food ordering website mockup which uses json-server for data handeling.`,
      image: `https://media.licdn.com/dms/image/D4E03AQHUiGtuI9_7BQ/profile-displayphoto-shrink_800_800/0/1697716267135?e=1724889600&v=beta&t=cz9kML8OtMgRXutekR98I3T1LGA900U4BzcZs_NapqQ`,
      devTitle: 'Developer',
      devName: 'Manish Kumar'
    },
  ];

}
