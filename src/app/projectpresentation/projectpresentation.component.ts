import { Component, ElementRef, Directive } from '@angular/core';

@Component({
  selector: 'app-projectpresentation',
  templateUrl: './projectpresentation.component.html',
  styleUrls: ['./projectpresentation.component.css']
})
export class ProjectpresentationComponent {
  constructor ({nativeElement}: ElementRef<HTMLImageElement>){
    const supports = 'loading' in HTMLImageElement.prototype;


  if (supports){
    nativeElement.setAttribute('loading', 'lazy');
  }

}

}
