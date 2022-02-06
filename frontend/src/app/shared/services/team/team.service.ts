import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Team } from '../../models/team.model';
import { AppConfig } from '../config/app.config';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private teamMemberData = new BehaviorSubject<Team[]>([]);

  constructor(private http:HttpClient) { }

  getTeamDetailsObserver(): Observable<Team[]>{
    return this.teamMemberData.asObservable();
  }


  getTeamDetails(){
     this.http.get<Team[]>(`${AppConfig.TEAM_URL}`).subscribe((data)=>{
      this.teamMemberData.next(data);
     
    });;
  }

  addTeamMember(data:any){
    this.http.post<Team[]>(`${AppConfig.ADD_TEAM_URL}`,data).subscribe((data)=>{
      this.teamMemberData.next(data);
    });
  }
}
