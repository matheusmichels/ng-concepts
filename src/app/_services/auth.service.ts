import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { User } from '../_shared/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router, private http: HttpClient) {}

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  async signin(email: string, password: string): Promise<void | Error> {
    const user = await this.http
      .get<User[]>(
        `${environment.apiUrl}/users?email=${email}&password=${password}`
      )
      .pipe(map(users => users[0]))
      .toPromise();

    if (!user) {
      throw new Error('Incorrect email or password');
    }

    localStorage.setItem('token', email);
    this.router.navigate(['app']);
  }

  signout() {
    localStorage.setItem('token', null);
    this.router.navigate(['']);
  }
}
