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


  activeBots(data: any) {
    const userUrl = 'https://api.cryptozack.com/algo-strategy/bots'
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${data.token}`
    });
    console.log("comming data",data)

    const params = new HttpParams()
      .set('userId', data.userId)
      .set('page', data.pageCount.page)
      .set('limit', data.pageCount.limit)

    return this.http.get(userUrl, { headers, params })
      .pipe(map((res:any) => {
        return res.data
      }),
      );
  }


}
