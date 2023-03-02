import { Component, ElementRef, Directive } from '@angular/core';

@Component({
  selector: 'app-geekout',
  templateUrl: './geekout.component.html',
  styleUrls: ['./geekout.component.css']
})
export class GeekoutComponent {
  constructor ({nativeElement}: ElementRef<HTMLImageElement>){
    const supports = 'loading' in HTMLImageElement.prototype;


  if (supports){
    nativeElement.setAttribute('loading', 'lazy');
  }

}
}
