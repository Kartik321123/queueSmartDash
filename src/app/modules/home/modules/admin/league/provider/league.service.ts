import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  constructor(private http: HttpClient) { }

  getAllLeagues(data:any){
    const url = `http://192.168.31.32:3000/fantasy-zack/list`
    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${data.token}`
    })
    let params = new HttpParams()
    .set('page', data.pageCount.page)
    .set('limit', data.pageCount.limit)
    return this.http.get(url, {headers,params})
    .pipe(map((res:any) =>{
      return res;
    }))
  }

  createLeague(data:any):any{
    // function toISODateString(dateString:Date) {
    //   const date = new Date(dateString);
    //   return date.toISOString();
    // }

    // console.log('name',data.name)
    // console.log('prizing',data.prizing);
    // console.log('startDate', data.startDate);
    // console.log('endDate', data.endDate);
    // console.log('investemnetAmotu', data.investmentAmount);
    
    // const formattedPrizing = data.prizing.map((item:any, index:any) => ({
    //   rank: index + 1,
    //   prize: parseInt(item.price, 10)
    // }));

 

    // const obj ={
    //   name: data.name,
    //   prizing: formattedPrizing,
    //   startDate: toISODateString(data.startDate),
    //   endDate: toISODateString(data.endDate),
    //   investmentAmount: data.investmentAmount
    // }
    // console.log(obj);
    
    // console.log(formattedPrizing);
    console.log(data);
    
    
    const url = `http://192.168.31.32:3000/fantasy-zack/create`
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMTk0YjE3Yy1iMTQyLTRhMDgtYThjOS05YWFlNGEzY2VkOTEiLCJyb2xlIjoiQ09NUEFOWV9BRE1JTiIsImlhdCI6MTcyMDY3Mzc3NiwiaXNzIjoiY3J5cHRvY2FzZS5hcHAifQ.OKu0pUUcP7iIjBF--BQIlPRqpoDURjEuIQTF2J19P4o'
    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${token}`
    })

    return this.http.post(url, data , {headers})
    .pipe(map((res:any) =>{
      console.log(res);
      return res;
    }))
  }

  
    // update league
    updateLeague(data:any){
      const url = 'http://192.168.31.32:3000/fantasy-zack/update-league'
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMTk0YjE3Yy1iMTQyLTRhMDgtYThjOS05YWFlNGEzY2VkOTEiLCJyb2xlIjoiQ09NUEFOWV9BRE1JTiIsImlhdCI6MTcyMDY3Mzc3NiwiaXNzIjoiY3J5cHRvY2FzZS5hcHAifQ.OKu0pUUcP7iIjBF--BQIlPRqpoDURjEuIQTF2J19P4o'
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })

      return this.http.put(url,data, {headers})
      .pipe(map((res:any) =>{
       console.log(res);
       return res
       
      }))
    }
}
