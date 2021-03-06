import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  key = 'excella-status-page'

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string) {
    this.http
      .get('api', {
        headers: new HttpHeaders({ u: username, p: password })
      })
      .subscribe(data => console.log(data), err => console.log(err))

    if (username === 'admin' && password === 'password') {
      localStorage.setItem(this.key, 'words')
      this.router.navigateByUrl('/dashboard')
    }
  }

  logout() {
    localStorage.removeItem(this.key)
    this.router.navigateByUrl('/login')
  }

  isLoggedIn() {
    if (localStorage.getItem(this.key)) {
      return true
    }
    return false
  }

  getToken() {
    return localStorage.getItem(this.key)
  }
}
