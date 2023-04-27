import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router} from '@angular/router';

import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm = this.fb.group( {
    username: '',
    password: '',
  });

  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
    ) {}

ngOnInit(): void {

}

login() : void {
  const username = this.loginForm.value.username;
  const password = this.loginForm.value.password;


  if(username && password && this.authService.login(username, password)) {
    console.log(this.authService.isLoggedIn);
  this.authService.isLoggedIn = true;
  this.router.navigate(['/dashboard']);
  }else {
    alert("Invalid username or password");
  }
}

}
