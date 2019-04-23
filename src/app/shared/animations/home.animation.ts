import { trigger, transition, style, animate } from '@angular/animations'

export let homeAnimation = trigger('homeAnimation', [
    transition('void => *', [
      style({ opacity: 0 }),
      animate(2000)
    ])
])