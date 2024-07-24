import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CRYPTO_URL } from 'src/app/helpers/constants';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private http: HttpClient

  ) { }

  companyTotalProfit(data: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${data.token}`
    });
    const params = new HttpParams()
      .set('page', data.pageCount.page).set('limit', data.pageCount.limit).set('transactionType', data.transactionType);
    const url = `${CRYPTO_URL.LIVE_URL}/wallet/company-transaction`;

    return this.http.get(url, { headers, params })
      .pipe(map((res: any) => {
        return res.data
      }),
      );
  }

  companyProfit(data: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${data.token}`
    });
    const params = new HttpParams()
      .set('page', data.pageCount.page).set('limit', data.pageCount.limit).set('transactionType', data.transactionType).set('fromDate', data.dateRange.from)
      .set('toDate', data.dateRange.to)
    const url = `${CRYPTO_URL.LIVE_URL}/wallet/company-transaction`;

    return this.http.get(url, { headers, params })
      .pipe(map((res: any) => {
        return res.data
      }),
      );
  }

  companyWallet(token: any){
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      const url = `${CRYPTO_URL.LIVE_URL}/wallet/company-wallet`;
      return this.http.get(url, {headers})
      .pipe(map((res:any) => {
        return res.data
      }),
      );
  }


  // companyWallet() {
  //   const data = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjU3MzU1LCJlbnYiOiJsaXZlIiwiaWF0IjoxNjA0MzEyODM0fQ.AzwDh768OtDJqcXb58YcZUoOJOUlQmk1LEFSr5wYQ2u"
  //   const headers = new HttpHeaders({
  //     'Authorization': `Bearer ${data}`
  //   });

  //   const url = 'https://api.cryptozack.com/wallet/company-wallet';

  //   return this.http.get(url, { headers })
  //     .pipe(map((res: any) => {
  //       return res.data
  //     }),
  //     );
  // }


  withrawal(data:any){
    const url = `${CRYPTO_URL.LIVE_URL}/wallet/company-transaction`;
    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${data.token}`
    })
    const params = new HttpParams()
    .set('page',data.pageCount.page)
    .set('limit', data.pageCount.limit)
    .set('transactionType',data.transactionType)
  return this.http.get(url, {headers,params})
  .pipe(map((res:any) =>{
    return res.data
  }));

}

// get trc balance

getTrcBalance(data:any){
  const url = `${CRYPTO_URL.LIVE_URL}/wallet/get-trc20`;
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${data.token}`
  })
  const params = new HttpParams()
  .set('address', data.address)
  return this.http.get(url, {headers, params})
  .pipe(map((res:any) =>{
    return res.data;
  }))
}

// get trx balance

getTrxBalance(data:any){
  const url = `${CRYPTO_URL.LIVE_URL}/wallet/get-trx`
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${data.token}`
  })
  const params = new HttpParams()
  .set('address', data.address)
  return this.http.get(url, {headers, params})
  .pipe(map((res:any) =>{
    return res.data;
  }))
}


}
