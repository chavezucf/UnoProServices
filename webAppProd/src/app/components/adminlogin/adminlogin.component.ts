import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {
  

  constructor( 
    private auth: AuthService
  ) { }
  
  ngOnInit() {
  }

  login(email: string, password: string, order: string): void {
    this.auth.emailLogin(email, password)
  }
  
  logout() {
    this.auth.signOut();
  }

}
