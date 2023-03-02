import { Component, ElementRef, Directive } from '@angular/core';

@Component({
  selector: 'app-ethicalhacking',
  templateUrl: './ethicalhacking.component.html',
  styleUrls: ['./ethicalhacking.component.css']
})
export class EthicalhackingComponent {
  constructor ({nativeElement}: ElementRef<HTMLImageElement>){
    const supports = 'loading' in HTMLImageElement.prototype;


  if (supports){
    nativeElement.setAttribute('loading', 'lazy');
  }

}

}
