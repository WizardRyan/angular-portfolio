import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
   const s = document.createElement('script');
   s.type = 'text/javascript';
   s.src = 'scripts.js'; // external script
   document.getElementById('typewriter').appendChild(s);
  }
}

