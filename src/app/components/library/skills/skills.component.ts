import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  @ViewChild('mySkills') mySkillsElement: ElementRef = {} as ElementRef;
  displayFlag: boolean = true;
  buttonText: string = 'Ahh! Show All';
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

showAllSkills(): void{
  if(this.displayFlag){
    this.displayFlag = false;
    this.buttonText = "Okay, Hide All"
    this.mySkillsElement.nativeElement.classList.add('blur-rm');
  }
  else{
    this.displayFlag = true;
    this.buttonText = "Ahh! Show All"
    this.mySkillsElement.nativeElement.classList.remove('blur-rm');
  }
}
}
