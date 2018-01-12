import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-login-component',
  templateUrl: './register-login-component.component.html',
  styleUrls: ['./register-login-component.component.css']
})
export class RegisterLoginComponentComponent implements OnInit {

  registerUsername: string | null;
  registerPassword: string | null;
  loginUsername: string | null;
  loginPassword: string | null;
  registerError: string | null;
  loginError: string | null;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
  }

  registerClicked() {
    this.apiService.sendRegister({Username: this.registerUsername, Password: this.registerPassword})
      .subscribe(response => {
        if (response.error) {
          this.registerError = response.error;
          return;
        }
        this.apiService.securityToken = response.token;
        this.apiService.user = this.registerUsername;
        this.router.navigate(['todo']);
      });

  }

  loginClicked() {
    this.apiService.sendLogin({Username: this.loginUsername, Password: this.loginPassword})
      .subscribe(response => {
        if (response.error) {
          this.loginError = response.error;
          return;
        }
        this.apiService.securityToken = response.token;
        this.apiService.user = this.loginUsername;
        this.router.navigate(['todo']);
      });

  }
}
