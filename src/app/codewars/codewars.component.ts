import { Component, ElementRef, Directive } from '@angular/core';

@Component({
  selector: 'app-codewars',
  templateUrl: './codewars.component.html',
  styleUrls: ['./codewars.component.css']
})
export class CodewarsComponent {
  constructor ({nativeElement}: ElementRef<HTMLImageElement>){
    const supports = 'loading' in HTMLImageElement.prototype;


  if (supports){
    nativeElement.setAttribute('loading', 'lazy');
  }

}
}
