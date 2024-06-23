import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
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


  //Skills
  skills = [
    {
      skillName: 'Angular',
      color: 'red',
    },
    {
      skillName: 'Typescript',
      color: 'green'
    },
    {
      skillName: 'JavaScript',
      color: 'blue'
    },
    {
      skillName: 'HTML5',
      color: 'yellow'
    },
    {
      skillName: 'Python',
      color: 'indigo'
    },
    {
      skillName: 'AWS',
      color: 'purple'
    },
    {
      skillName: 'Azure DevOps Services',
      color: 'pink'
    },
    {
      skillName: 'CSS',
      color: 'red'
    },
    {
      skillName: 'Bootstrap',
      color: 'green'
    },
    {
      skillName: 'Git',
      color: 'blue'
    },
    {
      skillName: 'Contentful',
      color: 'yellow'
    },
    {
      skillName: 'Node.js',
      color: 'indigo'
    },
    {
      skillName: 'NgRx',
      color: 'purple'
    },
    {
      skillName: 'Rxjs',
      color: 'pink'
    },
    {
      skillName: 'VS Code',
      color: 'red'
    },
    {
      skillName: 'Postman',
      color: 'green'
    },
    {
      skillName: 'MySQL',
      color: 'blue'
    },
    {
      skillName: 'MVC',
      color: 'yellow'
    },
    {
      skillName: 'React.js',
      color: 'indigo'
    },
    {
      skillName: 'DSA',
      color: 'purple'
    },
    
   
  ];

  certificationDetials = [
    {
      certificateName: 'Certified Angular Developer',
      certificateDescription: `By completing this course, I have demonstrated my proficiency in Angular development and have earned the Edureka Angular Developer certification. This certification is recognized industry-wide and can be added to your resume, LinkedIn profile, and other professional platforms.`,
      certificateImage: 'https://www.edureka.co/certificate/9e01527d939c9bb017f6243d4330f630.jpeg?ver=6678686946076',
      certificateType: 'Certificate of Completion'
    },
    {
      certificateName: 'Ultimate AWS Certified Solutions Architect Associate SAA-C03',
      certificateDescription: `This comprehensive course is designed to help you prepare for the AWS Certified Solutions Architect - Associate (SAA-C03) exam. You'll learn how to design and deploy scalable, secure, and efficient cloud architectures on AWS, and how to migrate existing applications to the cloud.`,
      certificateImage: 'https://udemy-certificate.s3.amazonaws.com/image/UC-4a3dd5b5-931e-4b72-86d9-270ea869b656.jpg?v=1718428604000',
      certificateType: 'Certificate of Completion'
    },
  ];
}
