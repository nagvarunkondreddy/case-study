import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SpinnerService } from 'src/app/shared/services/spinner/spinner.service';
import { TeamService } from 'src/app/shared/services/team/team.service';

@Component({
  selector: 'app-team-modal',
  templateUrl: './team-modal.component.html',
  styleUrls: ['../modal-1/modal.component.css'],
})
export class TeamModalComponent implements OnInit {
  memberForm = new FormGroup({
    name: new FormControl('',Validators.required),
    domain: new FormControl('',Validators.required),
    role : new FormControl('',Validators.required),
    number: new FormControl('',Validators.required),
    joined: new FormControl('',Validators.required),
    profile: new FormControl('',Validators.required),
    description: new FormControl('',Validators.required),


  })
  constructor(private teamService : TeamService,private spinnerService: SpinnerService) {}

  ngOnInit(): void {}

  addMemberDetails(){
  const  dateParts  = this.memberForm.value.joined.split("-");
    const year = dateParts[0];
    const data={
      image:'../../../assets/images/person-img.jpg',
    name:this.memberForm.value.name,
    designation:this.memberForm.value.role,
    domain:this.memberForm.value.domain,
    phone:this.memberForm.value.number,
    year:year};
    this.spinnerService.requestStarted();
    this.teamService.addTeamMember(data); 
  }
}
