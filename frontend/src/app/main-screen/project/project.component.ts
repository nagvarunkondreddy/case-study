import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/shared/services/project/project.service';
import { SpinnerService } from 'src/app/shared/services/spinner/spinner.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  showLoading:boolean =false; 
  projectCardContent:any;

  constructor(private spinnerService: SpinnerService, private projectService: ProjectService,private cdRef:ChangeDetectorRef) { 

  }

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
        this.projectService.getProjectCardContent();
        this.projectService.getprojectCardContentObserver().subscribe(data =>{
          this.projectCardContent=data;
         
         if(this.projectCardContent.length>1)
         {
           console.log('data received')
           this.spinnerService.requestEnded();
          }
          
        });
      
        
  }
}
