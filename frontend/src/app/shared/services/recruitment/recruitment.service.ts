import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { recruitment } from '../../models/recruitment.model';
import { AppConfig } from '../config/app.config';

@Injectable({
  providedIn: 'root'
})
export class RecruitmentService {
  private recruitmentTableData = new BehaviorSubject<recruitment[]>([]);
  constructor(private http:HttpClient) { } 

  getRecruitContentObserver(): Observable<recruitment[]>{
    return this.recruitmentTableData.asObservable();
  }

  getRecruitContent(){
    this.http.get<recruitment[]>(`${AppConfig.RECRUITMENT_URL}`).subscribe((data)=>{
      this.recruitmentTableData.next(data);
     
    });
    }
}
