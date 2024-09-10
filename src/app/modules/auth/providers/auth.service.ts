// import { UserInfo } from './../../../helpers/app.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInfo } from 'src/app/helpers/app.interface';

import { Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { O_DSYNC } from 'constants';
import { CRYPTO_URL } from 'src/app/helpers/constants';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginUrl = `${CRYPTO_URL.LIVE_URL}/queuesmart/login`;

  constructor(
    private http: HttpClient,
  ) { }


  signIn(email: string, password: string): Observable<UserInfo> {
    const userDetails: any = { email, password }
    return this.http.get<any>(this.loginUrl, { params: { phoneNo: userDetails.email.toString(), password: userDetails.password.toString() }, responseType: 'text' as 'json', })
      .pipe(map((res: any) => {
        return res
      }),
      );
  }


}
