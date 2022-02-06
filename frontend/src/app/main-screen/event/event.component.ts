import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/shared/services/event/event.service';
import { SpinnerService } from 'src/app/shared/services/spinner/spinner.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  showLoading:boolean =false;
  eventCardContent:any;

  constructor(private spinnerService: SpinnerService,private cdRef:ChangeDetectorRef,private eventService : EventService) { }
 
  ngOnInit(): void {
    this.init();
    this.getCardContent();
  }
  init(){
    this.spinnerService.getSpinnerObserver().subscribe((status)=>{
      console.log(status)
      this.showLoading = status;
      this.cdRef.detectChanges();
    })
  }

  getCardContent(){
    this.spinnerService.requestStarted();
       this.eventService.getEventCardContent();
       this.eventService.geteventCardObserver().subscribe(data =>{
         this.eventCardContent=data;
        
        if(this.eventCardContent.length>1)
        {
          console.log('data received')
          this.spinnerService.requestEnded();
         }
         
       });
     
       
 }
}
