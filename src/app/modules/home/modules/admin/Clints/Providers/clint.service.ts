import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { clintRequestData, clintRes, responceGetCoupons } from '../interface/clint.interface';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClintService {


  constructor(
    private http: HttpClient
  ) { }


  getUsers(data: any) {
    const userUrl = 'https://api.cryptozack.com/user-account/get-all-user'
    // console.log(":service values", data)

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${data.token}`
    });
    const params = new HttpParams()
      .set('page', data.pageCount.page)
      .set('limit', data.pageCount.limit)
      .set('fromDate', data.dateRange.from)
      .set('toDate', data.dateRange.to)
      .set('text', data.filter.text)

    return this.http.get(userUrl, { headers, params })
      .pipe(map(res => {
        return res
      }),
      );
  }


  // GET USERS FOR WALLET
  getWalletUsers(accessToken: string) {
    const userUrl = 'https://api.cryptozack.com/user-account/get-all-user?page=1&limit=10000'
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${accessToken}`
    });

    return this.http.get(userUrl, { headers })
      .pipe(map(res => {
        return res
      }),
      );
  }


  walletDetails(token: string, userId: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const params = new HttpParams().set('userId', userId);
    const walletUrl = 'https://api.cryptozack.com/wallet';

    return this.http.get(walletUrl, { headers, params })
      .pipe(map((res: any) => {
        return res.data
      }),
      );
  }


  userTransactionHistory(data: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${data.token}`
    });
    const params = new HttpParams()
      .set('userId', data.userId).set('page', data.page).set('limit', data.limit).set('transactionType', data.transactionType);
    const url = 'https://api.cryptozack.com/wallet/get-transaction';

    return this.http.get(url, { headers, params })
      .pipe(map((res: any) => {
        return res.data
      }),
      );
  }

  allTransactionHistory(data: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${data.token}`
    });
    const params = new HttpParams()
      .set('userId', data.userId).set('page', data.page).set('limit', data.limit)
    const url = 'https://api.cryptozack.com/wallet/get-transaction';

    return this.http.get(url, { headers, params })
      .pipe(map((res: any) => {
        return res.data
      }),
      );
  }



  activeBots(data: any) {
    const userUrl = 'https://api.cryptozack.com/algo-strategy/runtime-bots'
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${data.token}`
    });

    const params = new HttpParams()
      .set('userId', data.userId)
      .set('page', data.pageCount.page)
      .set('limit', data.pageCount.limit)

    return this.http.get(userUrl, { headers, params })
      .pipe(map(res => {
        return res
      }),
      );
  }


}
