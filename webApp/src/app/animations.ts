import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, style, transition, animate, animation } from '@angular/animations';

export let fade = trigger('fade', [
    state('void', style({ opacity: 0 })),
    transition(':enter, :leave', [
        //style({ opacity: 0 }),
        animate(2000)//style({backgroundColor: 'white', opacity: 1 }))
    ])
]);

//transform: 'translateX(20px)'