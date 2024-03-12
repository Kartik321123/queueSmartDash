import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class StrategyService {

  constructor(
    private http: HttpClient
  ) { }

// ALL BOTS LIST
  allBots(data: any) {
    const userUrl = 'https://api.cryptozack.com/algo-strategy/runtime-bots'
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${data.token}`
    });
    let params = new HttpParams()
      .set('userId', data.userId)
      .set('page', data.pageCount.page)
      .set('limit', data.pageCount.limit)

    if (data.botStatus) {
      params = params.set('botStatus', data.botStatus);
    }

    return this.http.get(userUrl, { headers, params })
      .pipe(map((res: any) => {
        return res.data
      }),
      );
  }

  // ACTIVE BOTS LIST
  activeBots(data: any) {
    const userUrl = 'https://api.cryptozack.com/algo-strategy/runtime-bots'
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${data.token}`
    });
    let params = new HttpParams()
      .set('userId', data.userId)
      .set('page', data.pageCount.page)
      .set('limit', data.pageCount.limit)

    if (data.botStatus) {
      params = params.set('botStatus', data.botStatus);
    }

    return this.http.get(userUrl, { headers, params })
      .pipe(map((res: any) => {
        return res.data
      }),
      );
  }


    // STRATEGY TRANSACTION LIST
    strategyTransaction(data: any) {
      const userUrl = 'https://api.cryptozack.com/wallet/get-strategy-trade'
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${data.token}`
      });
      let params = new HttpParams()
        .set('userId', data.userId)
  
      return this.http.get(userUrl, { headers, params })
        .pipe(map((res: any) => {
          return res
        }),
        );
    }



}
