import { trigger, state, style, animate, transition } from '@angular/animations';
export const slideInAnimation = trigger('sladeInAnimation', [
  state('void', style({ opacity: 0, transform: 'scale(0.8)', })),
  transition(':enter, :leave', [
    animate('0.3s', style({ opacity: 1, transform: 'scale(1)', })),
  ]),
]);
