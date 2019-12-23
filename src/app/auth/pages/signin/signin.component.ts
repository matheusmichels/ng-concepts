import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/_shared/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  email: string;
  password: string;

  modalStatus: string;
  errorMessage: string;

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  async signin() {
    let error = '';

    if (!this.email || !this.password) {
      error = 'Please, fill in email and password fields';
    }

    if (!error) {
      try {
        await this.authService.signin(this.email, this.password);
      } catch (err) {
        error = err.message;
      }
    }

    this.errorMessage = error;
    this.showErrorModal(!!this.errorMessage);
  }

  showErrorModal(show: boolean) {
    this.modalStatus = show ? 'show' : '';
  }
}
