import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup

  constructor( private formBuilder: FormBuilder, private loginService: LoginService) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      username: '',
      password: ''
    })
  }

  submit() {
    this.loginService.login(this.formGroup.get('username').value, this.formGroup.get('password').value)
  }
}
