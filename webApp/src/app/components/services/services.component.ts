import { Component, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, style, transition, animate, animation } from '@angular/animations';
import { fade, newFadeTransition, expandCollapse } from '../../animations';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  animations : [
    fade,
    newFadeTransition, 
    expandCollapse 
  ]
})
export class ServicesComponent implements OnInit {
  items: any[] = [
    'Wash',
    'Clean',
    'Apply'
  ]
  name:string;
  openCloseHome:string;
  openCloseAnim:string;

  addItem(input: HTMLInputElement) {
    this.items.splice(0,0,input.value);
  }

  removeItem(index) {
    this.items.splice(index,1);
  }
  
  constructor() {
    this.name = 'Angular!'
    this.openCloseHome = 'close';
    this.openCloseAnim = 'close';
  }
  openCloseHomePanel(): void {
        this.openCloseHome = (this.openCloseHome == 'open') ? 'close' : 'open';
    }

    openReportsFilter(): void {
      this.openCloseAnim = (this.openCloseAnim == 'open') ? 'close' : 'open';
  }

  ngOnInit() {
  }

}
