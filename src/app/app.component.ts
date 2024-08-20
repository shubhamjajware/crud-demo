import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'crud-demo';
  hideNav = false;
  navigations: {path: string, url: string}[] = [
    {
      path: 'Home',
      url: '/home'
    },
    {
      path: 'Employees',
      url: '/employees'
    },
    {
      path: 'Login',
      url: '/login'
    }
  ];

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    if(this.authService.getAuthStatus() == true) {
      this.hideNav = true;
      console.log('hideNav: ', this.hideNav);
      this.navigations.pop();
    }
  }

}
