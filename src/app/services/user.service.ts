import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { User } from '../shared/user.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private route: Router) {}

  signin(email: string, password: string): void {
    this.http.get<User[]>(`${environment.apiUrl}/users`).subscribe(users => {
      const user = users
        .filter(u => u.email === email && u.password === password)
        .shift();

      if (user) {
        this.route.navigate(['app']);
      } else {
        alert('Incorrect email or password!');
      }
    });
  }

  signup(user: User): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/users`, user);
  }

  signout() {}
}
