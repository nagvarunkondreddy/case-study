import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RecruitmentService } from 'src/app/shared/services/recruitment/recruitment.service';
import { SpinnerService } from 'src/app/shared/services/spinner/spinner.service';

@Component({
  selector: 'app-recruitments',
  templateUrl: './recruitments.component.html',
  styleUrls: ['./recruitments.component.css']
})
export class RecruitmentsComponent implements OnInit {
  recruitmentTableHeadings = [
    'Name',
    'Date',
    'Applied Domains',
    'Contact Number',
    'Email ID',
  ];
  recruitmentTableData:any;
  recruitmentTableIndex = ['name','date','domain','phone','email'];
  showLoading:boolean =false; 

  constructor(private recruitmentService : RecruitmentService,private spinnerService: SpinnerService,private cdRef:ChangeDetectorRef) { 

  }

  ngOnInit(): void {
    this.init();
    this.getTableData();
  }

  getTableData(){
    this.spinnerService.requestStarted();
    this.recruitmentService.getRecruitContent();
    this.recruitmentService.getRecruitContentObserver().subscribe(data =>{
      this.recruitmentTableData = data;
      if(this.recruitmentTableData.length>1)
      {
        this.spinnerService.requestEnded();
       }
      
    })
  }

  init(){
    this.spinnerService.getSpinnerObserver().subscribe((status)=>{
      this.showLoading = status;
      this.cdRef.detectChanges();

    })
  }

}
