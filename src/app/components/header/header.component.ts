import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {PROFILE_IMAGE} from '../../shared/constants/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit{
@ViewChild('slideMenu') slideMenu: ElementRef = {} as ElementRef;
profileImage: string = PROFILE_IMAGE;
ngAfterViewInit(): void{

}


closeSlideMenu(){
  this.slideMenu.nativeElement.classList.add('hideSlideMenu');
  this.slideMenu.nativeElement.classList.remove('showSlideMenu');
}

showeSlideMenu(){
  this.slideMenu.nativeElement.classList.remove('hideSlideMenu');
  this.slideMenu.nativeElement.classList.add('showSlideMenu');
}

scrollToElement($element: any): void {
  console.log($element);
  $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}
}
