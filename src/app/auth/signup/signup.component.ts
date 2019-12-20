import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;

  modalStatus: string;
  errorMessage: string;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {}

  async signup(): Promise<void> {
    const { name, age, email, password, confirmPassword } = this;

    let error = '';

    if (!name || !age || !email || !password || !confirmPassword) {
      error = 'Please, fill in all fields';
    } else if (password !== confirmPassword) {
      error = 'The passwords does not match';
    }

    if (!error) {
      const userExists = await this.userService.getByEmail(email);

      if (userExists) {
        error = 'Email already in use';
      } else {
        await this.userService.store({ name, age, email, password });

        alert('Account successfully created!');
        this.router;
      }
    }

    this.errorMessage = error;
    this.showErrorModal(!!this.errorMessage);
  }

  showErrorModal(show: boolean) {
    this.modalStatus = show ? 'show' : '';
  }
}
