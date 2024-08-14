import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';  // Import 'map' from 'rxjs/operators'
import { Observable } from 'rxjs';  // Import Observable from 'rxjs'
import { CRYPTO_URL } from 'src/app/helpers/constants';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(private http: HttpClient) { }

  getbanner(): Observable<any> {  
    const url = `${CRYPTO_URL.LIVE_URL}/user-account/banner`;
    return this.http.get(url).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  upload(formdata:any){
    const obj ={
      imageLink: formdata.image,
      text: formdata.text,
      link: formdata.link
    }
    const url = `${CRYPTO_URL.LIVE_URL}/user-account/banner`
    return this.http.post(url,obj);
  }

  delete(bannerId: string){
    const obj ={
    id: bannerId
    }
    const url = `${CRYPTO_URL.LIVE_URL}/user-account/banner-delete`;
    return this.http.post(url,obj)
  }

  update(formdata:any,bannerId:string, type:any){        
    const url = `${CRYPTO_URL.LIVE_URL}/user-account/banner`
    const obj= {
      id: bannerId,
      imageLink: formdata.image,
      text: formdata.text,
      link: formdata.link,
      type: type
    }
    return this.http.put(url, obj)
  }

}
