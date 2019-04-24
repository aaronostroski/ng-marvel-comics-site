import { trigger, transition, style, animate } from '@angular/animations'

export let mainAnimation = trigger('mainAnimation', [
  transition('void => *', [
    style({ opacity: 0 }),
    animate(1000)
  ])
])

export let footerAnimation = trigger('footerAnimation', [
  transition('void => *', [
    style({ display: "none" }),
    animate(2000, style({ display: "block" }))
  ])
])