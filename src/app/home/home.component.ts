//import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Component, AfterViewInit, ElementRef, ViewChild, Directive, asNativeElements } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  name: string = ""
  constructor(private router: Router, {nativeElement}: ElementRef<HTMLImageElement>){
    const supports = 'loading' in HTMLImageElement.prototype;


  if (supports){
    nativeElement.setAttribute('loading', 'lazy');
  }
}
  ngOnInit(){
   this.name =  localStorage.getItem('name') || ""
  }
  home = () => this.router.navigateByUrl('/home');
  about = () => this.router.navigateByUrl('/about');
  contact = () => this.router.navigateByUrl('/contact');

  technical_events = () => this.router.navigateByUrl('/technical_events');
  //non_technical_events = () => this.router.navigateByUrl('/non-technical_events');
  onlineevents = () => this.router.navigateByUrl('/onlineevents');
  workshops = () => this.router.navigateByUrl('/workshops');
  gallery = () => this.router.navigateByUrl('/gallery');
  sponsors = () => this.router.navigateByUrl('/sponsors');
  accomdation = () => this.router.navigateByUrl('/accomdation');
  login = () => this.router.navigateByUrl('/login');
  logout = () => {
    localStorage.clear()
    this.router.navigateByUrl('/login')
}
contests = () => this.router.navigateByUrl('/contests');


  date: any;
  now: any;
  targetDate: any = new Date(2023, 2, 25);
  targetTime: any = this.targetDate.getTime();
  difference: number = 0;
  months: Array<string> = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  currentTime: any = `${
    this.months[this.targetDate.getMonth()]
  } ${this.targetDate.getDate()}, ${this.targetDate.getFullYear()}`;

  @ViewChild('days', { static: true }) days: ElementRef;
  @ViewChild('hours', { static: true }) hours: ElementRef;
  @ViewChild('minutes', { static: true }) minutes: ElementRef;
  @ViewChild('seconds', { static: true }) seconds: ElementRef;

  ngAfterViewInit() {
    setInterval(() => {
      this.tickTock();
      this.difference = this.targetTime - this.now;
      this.difference = this.difference / (1000 * 60 * 60 * 24);

      !isNaN(this.days.nativeElement.innerText)
        ? (this.days.nativeElement.innerText = Math.floor(this.difference))
        : (this.days.nativeElement.innerHTML = `<img src="https://i.gifer.com/VAyR.gif" />`);
    }, 1000);
  }

  tickTock() {
    this.date = new Date();
    this.now = this.date.getTime();
    this.days.nativeElement.innerText = Math.floor(this.difference);
    this.hours.nativeElement.innerText = 23 - this.date.getHours();
    this.minutes.nativeElement.innerText = 60 - this.date.getMinutes();
    this.seconds.nativeElement.innerText = 60 - this.date.getSeconds();
  }


}
