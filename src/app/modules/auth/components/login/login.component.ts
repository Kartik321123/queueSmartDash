import { StorageHelper } from './../../../../helpers/storage';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignInRequest } from 'src/app/helpers/app.interface';
import { REG_EX } from 'src/app/helpers/constants';
import { AuthService } from '../../providers/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('', Validators.required),
  });
  showLoader = false;
  controls: any;
  showPassword: boolean = false;
  passwordType: any = "password";

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {
    this.controls = this.loginForm.controls;
  }

  ngOnInit(): void {
  }


  signIn() {
    this.showLoader = true;
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email
      const password = this.loginForm.value.password
      this.authService.signIn(email, password).subscribe((result) => {
        console.log("comming values",result)
        // StorageHelper.userInfo = result;
        if(result){
          this.router.navigate(['/admin/dashboard']);
        }
        // this.router.navigate(['/admin/dashboard']);
      })
    }
  }

  // loginUser() {
  //   if (this.loginForm.valid) {
  //     const phoneNo = this.loginForm.value.doctorid!;
  //     const password = this.loginForm.value.password!;
  //     this.http
  //       .get('http://localhost:8080/queuesmart/login', {
  //         params: { phoneNo: phoneNo.toString(), password: password.toString() },
  //         responseType: 'text' as 'json', 
  //       })
  //       .subscribe(
  //         (response) => {
  //           if (response === 'true') {
  //             this.router.navigate(['/dashboard']);
  //           } else {
  //             console.log('Login failed');
  //             alert('Login failed');
  //           }
  //         },
  //         (error) => {
  //           console.error('Error during login:', error);
  //         }
  //       );
  //   }
  // }

}




