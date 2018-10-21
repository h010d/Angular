import {reject} from 'q';

export class AuthService {
  public isLoggedIn: boolean;

  public isAuth() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.isLoggedIn);
      }, 1000);
    });
  }

  public logIn() {
    this.isLoggedIn = true;
  }

  public logOut() {
    this.isLoggedIn = false;
  }

}
