import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {User} from '../models/user.model';

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) {
        this.getUserByEmail('qwerty@mail.ru');
  }
    getUserByEmail(email: string): Observable<User> {
    return this.http.get(`http://localhost:3000/users?email=${email}`)
      .pipe(map((response: Response) => response.json()))
      .pipe(map((user: User) => console.log(user)));
    }
}
