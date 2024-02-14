import { trigger, state, style, animate, transition } from '@angular/animations';

export const fadeInAnimation = trigger('fadeInAnimation', [
  state('void', style({ opacity: 0 })),
  transition(':enter, :leave', [
    animate('0.5s', style({ opacity: 1 })),
  ]),
]);
