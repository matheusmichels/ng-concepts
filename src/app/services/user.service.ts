import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { User } from '../shared/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  getByEmail(email: string): Promise<User> {
    return this.http
      .get<User>(`${environment.apiUrl}/users?email=${email}`)
      .pipe(map(users => users[0]))
      .toPromise();
  }

  getByEmailAndPassword(email: string, password: string): Promise<User> {
    return this.http
      .get<User[]>(
        `${environment.apiUrl}/users?email=${email}&password=${password}`
      )
      .pipe(map(users => users[0]))
      .toPromise();
  }

  store(user: User): Promise<any> {
    return this.http.post<any>(`${environment.apiUrl}/users`, user).toPromise();
  }
}
