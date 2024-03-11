import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WithdrawalService {

  constructor(
    private http: HttpClient
  ) { }


  // GET ALL WITHDRAWAL REQUESTS
  getWithdrawalRequests(data: any) {

    const url = 'https://api.cryptozack.com/wallet/get-withdrawal-request';

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${data.token}`
    });

    const params = new HttpParams()
      .set('page', data.page)
      .set('limit', data.limit);

    return this.http.get(url, { headers, params })
      .pipe(map((res: any) => {
        return res.data
      }),
      );
  }

  

}
