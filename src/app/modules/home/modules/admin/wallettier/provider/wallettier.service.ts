import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WallettierService {

  constructor(
    private http: HttpClient
  ) { }

  // GET WALLET TIER LIST
  getWalletTier(accessToken: string) {
    const userUrl = 'https://api.cryptozack.com/wallet/get-wallet-tier'
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${accessToken}`
    });
    return this.http.get(userUrl, { headers })
      .pipe(map((res: any) => {
        return res.data
      }),
      );
  }

  // CREATE WALLET TIER 
  createWalletTier(data: any) {
    const userUrl = 'https://api.cryptozack.com/wallet/create-wallet-tier'
    return this.http.post(userUrl, data)
      .pipe(map((res: any) => {
        return res.data
      }),
      );
  }

  // UPDATE WALLET TIER
  updateWalletTier(data: any) {
    const userUrl = 'https://api.cryptozack.com/wallet/update-tier'
    return this.http.post(userUrl, data)
      .pipe(map((res: any) => {
        return res.data
      }),
      );
  }





}
