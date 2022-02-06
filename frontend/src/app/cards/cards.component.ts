import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventService } from '../shared/services/event/event.service';
import { ProjectService } from '../shared/services/project/project.service';
import { SpinnerService } from '../shared/services/spinner/spinner.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input()cardContent: any;
  @Input() cardImageLocation: any;
  @Input() cardTitle: any;
  constructor(private spinnerService: SpinnerService, private projectService: ProjectService, private eventService : EventService) {


  }

  ngOnInit(): void { 
  
  }


  deleteCard(i:any){
    this.spinnerService.requestStarted();
    if(this.cardTitle === 'Project')
    
    this.projectService.deleteProject({'_id':i});
    else
    this.eventService.deleteEvent({'_id':i});
  }

}
