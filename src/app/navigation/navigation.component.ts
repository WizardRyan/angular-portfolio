import { Component, ViewChild, AfterViewInit, ElementRef} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router, RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Navigation } from 'selenium-webdriver';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  animations: [
    slideInAnimation
  ]
})
export class NavigationComponent implements AfterViewInit {

  @ViewChild('content', {static: false, read: ElementRef}) content: ElementRef;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {}

  prepareRoute(outlet: RouterOutlet) {
    // tslint:disable-next-line: no-string-literal
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  ngAfterViewInit() {
    this.content.nativeElement.scrollTo(0, 0);
  }

  onActivateRouter(): void {

  }

  scrollUp() {
    const top = document.getElementById('sideContent');
    top.scrollTo(0, 0);
  }
}
