import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginDetails } from '../../models/loginDetails.model';
import { AppConfig } from '../config/app.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
   login(data:any) : Observable<LoginDetails>{

    return this.http.post<LoginDetails>(`${AppConfig.LOGIN_URL}`,data);

    // if(data.email === 'technicalLead@company.in' && data.password === 'technicalLead123'){
    //   localStorage.setItem('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlY2huaWNhbExlYWRAY29tcGFueS5pbiIsInBhc3N3b3JkIjoidGVjaG5pY2FsTGVhZDEyMyJ9.1vARnvEWJ6kiehvTo6xFMP5YeP3kNvcr1b3cxgKLjx0');
    //   localStorage.setItem('role','technicalLead');
    //   return {"message":"login success",
    //   // "role":"technicalLead",
    //   // "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlY2huaWNhbExlYWRAY29tcGFueS5pbiIsInBhc3N3b3JkIjoidGVjaG5pY2FsTGVhZDEyMyJ9.1vARnvEWJ6kiehvTo6xFMP5YeP3kNvcr1b3cxgKLjx0"
    // }
    // }
    // else if(data.email === 'hr@company.in' && data.password === 'hr123'){
    //   localStorage.setItem('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhyQGNvbXBhbnkuaW4iLCJwYXNzd29yZCI6ImhyMTIzIn0.ykNrQ2ER3Whfr-lslORxXjoottJtQ19QNqQXUOVjySA')
    //   localStorage.setItem('role','hr');
    //   return {
    //     "message": "login success",
    //     // "role": "hr",
    //     // "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhyQGNvbXBhbnkuaW4iLCJwYXNzd29yZCI6ImhyMTIzIn0.ykNrQ2ER3Whfr-lslORxXjoottJtQ19QNqQXUOVjySA"

    //   }
    // }
    // else 
    // return {"message": "login incorrect"}

  }

  isLoggedIn():boolean{
    const token = localStorage.getItem('token');
    if(token)
    return true;

    else return false;

  }

  getUserRole(){
    const role = localStorage.getItem('role');
    return role;
  }
}
