import { Component, OnInit } from '@angular/core';
import { expandCollapse } from '../../animations';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  animations: [
    expandCollapse
  ]
})
export class FaqComponent implements OnInit {
  openCloseAll: any;


  constructor() {
    this.openCloseAll = ['close', 'close', 'close', 'close', 'close'];
  }
  openCloseWidget(index): void {
    var length = this.openCloseAll.length;
    switch (index) {
      case 0:
        this.openCloseAll[0] = (this.openCloseAll[0] == 'open') ? 'close' : 'open';
        for(var i =0;i<length;i++){
          if(i == 0) continue;
          this.openCloseAll[i] = 'close';
        }
        break;
      case 1:
        this.openCloseAll[1] = (this.openCloseAll[1] == 'open') ? 'close' : 'open';
        for(var i =0;i<length;i++){
          if(i == 1) continue;
          this.openCloseAll[i] = 'close';
        }
        break;
      case 2:
        this.openCloseAll[2] = (this.openCloseAll[2] == 'open') ? 'close' : 'open';
        for(var i =0;i<length;i++){
          if(i == 2) continue;
          this.openCloseAll[i] = 'close';
        }
        break;
      case 3:
        this.openCloseAll[3] = (this.openCloseAll[3] == 'open') ? 'close' : 'open';
        for(var i =0;i<length;i++){
          if(i == 3) continue;
          this.openCloseAll[i] = 'close';
        }
        break;
      case 4:
        this.openCloseAll[4] = (this.openCloseAll[4] == 'open') ? 'close' : 'open';
        for(var i =0;i<length;i++){
          if(i == 4) continue;
          this.openCloseAll[i] = 'close';
        }
        break;
    }
  }

  ngOnInit() {
  }

}
