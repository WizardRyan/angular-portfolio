import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  group,
  animateChild
} from '@angular/animations';

const slideDown = [
    style({ position: 'relative', height: '100%'}),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      })
    ]),
    query(':enter', [
      style({ transform: 'translateY(-100%)'})
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('300ms', style({ transform: 'translateY(100%)'}))
      ]),
      query(':enter', [
        animate('300ms', style({ transform: 'translateY(0%)'}))
      ])
    ]),
    query(':enter', animateChild()),
  ];

const slideUp = [
style({ position: 'relative', height: '100%'}),
query(':enter, :leave', [
    style({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
    })
]),
query(':enter', [
    style({ transform: 'translateY(100%)'})
]),
query(':leave', animateChild()),
group([
    query(':leave', [
    animate('300ms', style({ transform: 'translateY(-100%)'}))
    ]),
    query(':enter', [
    animate('300ms', style({ transform: 'translateY(0%)'}))
    ])
]),
query(':enter', animateChild()),
];

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('ResumePage => AboutPage', slideDown),
    transition('ProjectsPage => ResumePage', slideDown),
    transition('ProjectsPage => AboutPage', slideDown),
    transition('ContactPage => ProjectsPage', slideDown),
    transition('ContactPage => ResumePage', slideDown),
    transition('ContactPage => AboutPage', slideDown),

    transition('AboutPage => ResumePage', slideUp),
    transition('AboutPage => ProjectsPage', slideUp),
    transition('AboutPage => ContactPage', slideUp),
    transition('ResumePage => ProjectsPage', slideUp),
    transition('ResumePage => ContactPage', slideUp),
    transition('ProjectsPage => ContactPage', slideUp),



    transition('* <=> FilterPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('200ms ease-out', style({ left: '100%'}))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);
