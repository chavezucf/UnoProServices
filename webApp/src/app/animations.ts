import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, style, transition, animate, animation } from '@angular/animations';

export let expandCollapse = trigger('expandCollapse', [
    state('open', style({
        'height': '*',
        opacity: 1,
        transform: 'translateY(0px)',
        display: 'block'
    })),
    state('close', style({
        'height': '0px',
        opacity: 0,
        transform: 'translateY(-10px)',
        display: 'none'
    })),
    transition('open <=> close', animate(150))
]);