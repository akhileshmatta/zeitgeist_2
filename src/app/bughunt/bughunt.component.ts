import { Component, Directive, ElementRef } from '@angular/core';

@Component({
  selector: 'app-bughunt',
  templateUrl: './bughunt.component.html',
  styleUrls: ['./bughunt.component.css']
})
export class BughuntComponent {
  constructor ({nativeElement}: ElementRef<HTMLImageElement>){
    const supports = 'loading' in HTMLImageElement.prototype;


  if (supports){
    nativeElement.setAttribute('loading', 'lazy');
  }
}
}
