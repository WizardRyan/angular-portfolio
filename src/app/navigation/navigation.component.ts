import { Component, ViewChild, AfterViewInit, ElementRef, HostListener} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router, RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Navigation } from 'selenium-webdriver';
import {ScrollService} from '../scroll.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  animations: [
    slideInAnimation
  ]
})
export class NavigationComponent implements AfterViewInit {

  public scrolled = false;
  private _scrollHandler = this.scrollHandler.bind(this);

  @ViewChild('sideContent', {static: false, read: ElementRef}) viewSideContent: ElementRef;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, public router: Router, public scroll: ScrollService) {}

  prepareRoute(outlet: RouterOutlet) {
    // tslint:disable-next-line: no-string-literal
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  ngAfterViewInit() {
    this.scroll.currentMessage.subscribe(val => this.scrolled = val);
    document.getElementById('sideContent').addEventListener('wheel', this._scrollHandler);
  }

  scrollUp() {
    const top = document.getElementById('sideContent');
    if(this.router.url !== "/about"){
      top.scrollTo(0, 0);
    }
  }

  scrollHandler(event){
    console.log('scrolled');
    if(!this.scrolled){
      console.log('not scrolled');
      this.scroll.changeScrolled(true);
      document.getElementById('sideContent').removeEventListener('wheel', this._scrollHandler);
    }
  }
  navigate(url){
    console.log(url);
    this.router.navigateByUrl(url);
  }

  about(){
    this.router.navigateByUrl("/about");
  }

  resume(){
    this.router.navigateByUrl("/resume");
  }

  contact(){
    this.router.navigateByUrl("/contact");
  }

  projects(){
    this.router.navigateByUrl("/projects");
  }
}
