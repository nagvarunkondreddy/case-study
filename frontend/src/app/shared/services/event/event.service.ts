import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Events } from '../../models/events.model';
import { AppConfig } from '../config/app.config';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private eventCardContent = new BehaviorSubject<Events[]>([]);

  constructor(private http:HttpClient) { }

  geteventCardObserver(): Observable<Events[]>{
    return this.eventCardContent.asObservable();
  }

  getEventCardContent(){
     this.http.get<Events[]>(`${AppConfig.EVENT_URL}`).subscribe((data)=>{
      this.eventCardContent.next(data);
     
    });
  }

  addNewEventContent(data:any){
    this.http.post<Events[]>(`${AppConfig.ADD_EVENT_URL}`,data).subscribe((data)=>{
      this.eventCardContent.next(data);
    });

  }
  deleteEvent(data :any){
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: data
    };
     this.http.delete<Events[]>(`${AppConfig.DELETE_EVENT_URL}`,options).subscribe((data)=>{
       this.eventCardContent.next(data);
     })
  }
}
