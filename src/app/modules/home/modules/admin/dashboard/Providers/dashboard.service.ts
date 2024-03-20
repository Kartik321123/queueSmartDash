import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
    const url = 'https://api.cryptozack.com/wallet/company-transaction';

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
    const url = 'https://api.cryptozack.com/wallet/company-transaction';

    return this.http.get(url, { headers, params })
      .pipe(map((res: any) => {
        return res.data
      }),
      );
  }


  companyWallet() {
    const data = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjU3MzU1LCJlbnYiOiJsaXZlIiwiaWF0IjoxNjA0MzEyODM0fQ.AzwDh768OtDJqcXb58YcZUoOJOUlQmk1LEFSr5wYQ2u"
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${data}`
    });

    const url = 'https://api.cryptozack.com/wallet/company-wallet';

    return this.http.get(url, { headers })
      .pipe(map((res: any) => {
        return res.data
      }),
      );
  }


}
