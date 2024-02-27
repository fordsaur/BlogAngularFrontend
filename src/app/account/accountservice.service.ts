import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { provideHttpClient } from "@angular/common/http";
import { Accountinfo } from './accountinfo';
import { Userloginfo } from './userloginfo';


@Injectable({
  providedIn: 'root',
})
export class AccountService {
  url = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}



  createaccount(accinfo: Accountinfo): any{
    return this.http.post(this.url+"api/register",accinfo);
    console.log("service",accinfo)
  }

  userlogin(logininfo:Userloginfo):Observable<Userloginfo>{
   return this.http.post<Userloginfo>(this.url+'api/login',logininfo)
  }
}
