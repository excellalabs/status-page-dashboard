import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  key = 'excella-status-page'

  constructor() {
  }

  login( username: string, password: string) {
    if (username === 'admin' && password === 'password' ) {
      localStorage.setItem(this.key, 'words')
      console.log('worked yo')
    }
  }

  logout() {
    localStorage.removeItem(this.key)
  }
}
