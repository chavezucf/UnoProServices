import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, style, transition, animate, animation } from '@angular/animations';

export let fade = trigger('fade', [
    state('void', style({ opacity: 0 })),
    transition(':enter, :leave', [
        //style({ opacity: 0 }),
        animate(2000)//style({backgroundColor: 'white', opacity: 1 }))
    ])
]);

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

export let newFadeTransition = trigger('newFadeTransition', [
    state('void', style({ opacity: 0 })),
    transition('void => *', [
        style({backgroundColor: 'blue', opacity: 0, transform: 'translateY(-20px)' }),
        animate(2000, 
        style({
            backgroundColor: 'red', 
            opacity: 1,
            transform: 'translateY(0px)'
        }))
    ]),
]);