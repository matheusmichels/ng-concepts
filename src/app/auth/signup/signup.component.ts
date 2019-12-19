import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

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

  constructor(private userService: UserService) {}

  ngOnInit() {}

  signup() {
    const { name, age, email, password } = this;

    if (!name || !age || !email || !password) {
      alert('Please, fill in all fields!');
      return;
    }

    this.userService
      .signup({
        name,
        age,
        email,
        password
      })
      .subscribe(() => {
        alert('Account successfully created!');
      });
  }
}
