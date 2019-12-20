import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

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

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {}

  async signin() {
    let error = '';

    if (!this.email || !this.password) {
      error = 'Please, fill in email and password fields!';
    }

    if (!error) {
      const user = await this.userService.getByEmailAndPassword(
        this.email,
        this.password
      );

      if (user) {
        this.router.navigate(['app']);
      } else {
        error = 'Incorrect email or password';
      }
    }

    this.errorMessage = error;
    this.showErrorModal(!!this.errorMessage);
  }

  showErrorModal(show: boolean) {
    this.modalStatus = show ? 'show' : '';
  }
}
