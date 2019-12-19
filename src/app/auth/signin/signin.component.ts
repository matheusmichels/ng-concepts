import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  email: string;
  password: string;

  constructor(private userService: UserService) {}

  ngOnInit() {}

  signin() {
    if (!this.email || !this.password) {
      alert('Please, fill in email and password fields!');
      return;
    }

    this.userService.signin(this.email, this.password);
  }
}
