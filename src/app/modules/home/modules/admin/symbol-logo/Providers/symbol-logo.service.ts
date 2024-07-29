import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { CRYPTO_URL } from 'src/app/helpers/constants';

@Injectable({
  providedIn: 'root'
})
export class SymbolLogoService {

  constructor(private http: HttpClient) { }

  upload(data:any,token:any){
    console.log(data);
    const url = `${CRYPTO_URL.LIVE_URL}/algo-strategy/symbol-url`
    const obj = {
      symbol: data.symbol,
      url: data.image
    }
    console.log(obj);

    return this.http.post(url, obj).pipe(
      map((res: any) => {
        console.log(res);
        return res;
      })
    );
    

    }

    getAllLogos(token:any){
      const url = `${CRYPTO_URL.LIVE_URL}/algo-strategy/list-symbol-url`;
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      }
      )
      console.log(headers);
      
      return this.http.get(url, {headers}).pipe(
        map((res:any) =>{
          return res;
        })
      )
    }
  }
