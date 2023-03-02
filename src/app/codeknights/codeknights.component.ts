import { Component, ElementRef, Directive } from '@angular/core';

@Component({
  selector: 'app-codeknights',
  templateUrl: './codeknights.component.html',
  styleUrls: ['./codeknights.component.css']
})
export class CodeknightsComponent {
  constructor ({nativeElement}: ElementRef<HTMLImageElement>){
    const supports = 'loading' in HTMLImageElement.prototype;


  if (supports){
    nativeElement.setAttribute('loading', 'lazy');
  }

}
}
