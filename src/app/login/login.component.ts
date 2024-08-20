import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  logOutdisabled = false;

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  }
  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();

  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit(): void {
    if (this.authService.getAuthStatus() == false) {
      this.logOutdisabled = true;
    }
  }

  onLogin() {
    this.username = this.form.get("username")?.value;
    this.password = this.form.get("password")?.value;
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/employees']);
    } else {
      alert('Invalid credentials');
    }
  }

  onLogOut() {
    this.authService.logout();
  }
}
