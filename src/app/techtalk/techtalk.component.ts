import { Component, Directive, ElementRef } from '@angular/core';

@Component({
  selector: 'app-techtalk',
  templateUrl: './techtalk.component.html',
  styleUrls: ['./techtalk.component.css']
})
export class TechtalkComponent {
  constructor ({nativeElement}: ElementRef<HTMLImageElement>){
    const supports = 'loading' in HTMLImageElement.prototype;


  if (supports){
    nativeElement.setAttribute('loading', 'lazy');
  }

}

}
