import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Project } from '../../models/project.model';
import { Team } from '../../models/team.model';
import { AppConfig } from '../config/app.config';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projectCardContent = new BehaviorSubject<Project[]>([]);

  constructor(private http:HttpClient) {
   }

   getprojectCardContentObserver(): Observable<Project[]>{
     return this.projectCardContent.asObservable();
   }

   getProjectCardContent(){
     console.log('api called')
   this.http.get<Project[]>(`${AppConfig.PROJECT_URL}`).subscribe((data)=>{
     this.projectCardContent.next(data);
    
   });
   }

   addNewProjectContent(data:any){
     this.http.post<Project[]>(`${AppConfig.ADD_PROJECT_URL}`,data).subscribe((data)=>{
       this.projectCardContent.next(data);
     });

   }

   deleteProject(data : any){
     const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: data
    };
     this.http.delete<Project[]>(`${AppConfig.DELETE_PROJECT_URL}`,options).subscribe((data)=>{
       this.projectCardContent.next(data);
     })
  
   }
   
}
