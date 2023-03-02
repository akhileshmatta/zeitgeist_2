import { Component, ElementRef, Directive } from '@angular/core';

@Component({
  selector: 'app-presentit',
  templateUrl: './presentit.component.html',
  styleUrls: ['./presentit.component.css']
})
export class PresentitComponent {
  constructor ({nativeElement}: ElementRef<HTMLImageElement>){
    const supports = 'loading' in HTMLImageElement.prototype;


  if (supports){
    nativeElement.setAttribute('loading', 'lazy');
  }

}

}
