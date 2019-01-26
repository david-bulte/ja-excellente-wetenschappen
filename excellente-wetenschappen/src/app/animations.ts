import { trigger, state, style, transition,
  animate, group, query, stagger, keyframes
} from '@angular/animations';

export const SlideInOutAnimation = [
  trigger('myInsertRemoveTrigger', [
    transition(':enter', [
      style({ opacity: 1, transform: 'scale(0)' }),
      animate('0.3s', style({ opacity: 1, transform: 'scale(1)' })),
    ]),
    transition(':leave', [
      animate('0.3s', style({ opacity: 0, transform: 'scale(0)' })),
    ])
  ])
]
