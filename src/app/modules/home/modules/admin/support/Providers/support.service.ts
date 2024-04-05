import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SupportService {

  constructor(
    private http: HttpClient
  ) { }


  // GET LIST 
  getsupportData(data:any){
    const url = 'https://api.cryptozack.com/user-account/list-support';
    const headers = new HttpHeaders({
     'Authorization': `Bearer ${data.token}`
    });
    const params = new HttpParams()
    .set('page', data.page)
    .set('limit',data.limit)
    return this.http.get(url, {headers,params})
    .pipe(map((res:any) =>{
      return res;
    }),
    );

  }
    // POST MESSAGE
  postSupportTicket(data: any)  {
    const url = 'https://api.cryptozack.com/user-account/support-reply';
    return this.http.post(url, data);
  }
}
