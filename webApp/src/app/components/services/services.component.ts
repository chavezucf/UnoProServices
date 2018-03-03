import { Component, OnInit } from '@angular/core';
import { expandCollapse } from '../../animations';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  animations: [
    expandCollapse
  ]
})
export class ServicesComponent implements OnInit {
  openCloseHome: string;
  openCloseRepair: string;
  openCloseInstallation: string;
  openCloseMaintenance: string;


  constructor() {
    this.openCloseHome = 'close';
    this.openCloseRepair = 'close';
    this.openCloseInstallation = 'close';
    this.openCloseMaintenance = 'close';
  }
  openCloseWidgetl(index): void {
    switch (index) {
      case 0:
        this.openCloseHome = (this.openCloseHome == 'open') ? 'close' : 'open';
        break;
      case 1:
        this.openCloseRepair = (this.openCloseRepair == 'open') ? 'close' : 'open';
        break;
      case 2:
        this.openCloseInstallation = (this.openCloseInstallation == 'open') ? 'close' : 'open';
        break;
      case 3:
        this.openCloseMaintenance = (this.openCloseMaintenance == 'open') ? 'close' : 'open';
        break;
    }
  }

    ngOnInit() {
    }

  }
