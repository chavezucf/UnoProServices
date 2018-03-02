import { Component, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, style, transition, animate, animation } from '@angular/animations';
import { fade } from '../../animations';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  animations : [
    fade
    /*
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [
        //style({ opacity: 0 }),
        animate(2000)//style({backgroundColor: 'white', opacity: 1 }))
      ])
      
      /*transition('void => *, * => void', [
        //style({ opacity: 0 }),
        animate(2000)//style({backgroundColor: 'white', opacity: 1 }))
      ]),*/
      /*
      transition('void => *', [
        //style({ opacity: 0 }),
        animate(2000)//style({backgroundColor: 'white', opacity: 1 }))
      ]),

      transition('* => void', [
        animate(2000)//, style({ opacity: 0 }))
      ])

    ])*/
  ]
})
export class ServicesComponent implements OnInit {
  items: any[] = [
    'Wash',
    'Clean',
    'Apply'
  ]

  addItem(input: HTMLInputElement) {
    this.items.splice(0,0,input.value);
  }

  removeItem(index) {
    this.items.splice(index,1);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
