import { environment } from "src/environments/environment";

export const LOCAL_STORAGE_KEYS = {
 
    UserInfo: 'userinfo',
    Company: 'company',
    Column: 'column',
    LocationId: 'locationId',
  }
  
  export const REG_EX = {
    name: '^[a-zA-Z0-9]*$',
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  }
  export const SERVER_URL = environment.serverUrl;

  export const CRYPTO_URL  = {
      LIVE_URL:
      // 'https://api.cryptozack.com'
      // '//34.131.153.247:3000'
      'http://192.168.1.4:8080'
  }