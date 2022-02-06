import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/shared/services/spinner/spinner.service';
import { TeamService } from 'src/app/shared/services/team/team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teamTableHeadings = ['', 'Name', 'Role', 'Domain', 'Number', 'Member Since'];
  teamTableIndex = ['name','designation','domain','phone','year'];
  teamTableData : any;
  showLoading:boolean =false; 

  constructor(private teamService: TeamService,private spinnerService: SpinnerService,private cdRef:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.init();
    this.getTeamData()
  }

  getTeamData(){
    this.spinnerService.requestStarted();
this.teamService.getTeamDetails();
this.teamService.getTeamDetailsObserver().subscribe(data=>{
  this.teamTableData=data;
  if(this.teamTableData.length>1)
  {
    console.log('data received')
    this.spinnerService.requestEnded();
   }
});
  }

  init(){
    this.spinnerService.getSpinnerObserver().subscribe((status)=>{
      console.log(status)
      this.showLoading = status;
      this.cdRef.detectChanges();
    })
  }

}
