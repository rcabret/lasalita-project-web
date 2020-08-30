import {trigger, animate, transition, style, query, stagger} from '@angular/animations';

export const listAnimation = trigger('listAnimation', [
  transition('* => *', [ // each time the binding value changes
    query(':leave', [
      stagger(100, [
        animate('0.5s', style({opacity: 0}))
      ])
    ]),
    query(':enter', [
      style({opacity: 0}),
      stagger(100, [
        animate('0.5s', style({opacity: 1}))
      ])
    ])
  ])
]);
