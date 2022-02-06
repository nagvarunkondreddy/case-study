import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { EventService } from 'src/app/shared/services/event/event.service';
import { ProjectService } from 'src/app/shared/services/project/project.service';
import { SpinnerService } from 'src/app/shared/services/spinner/spinner.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() modalTitle: any ; 
  Form = new FormGroup({
    inputOneLabel: new FormControl('',Validators.required),
    inputTwoLabel: new FormControl('',Validators.required),
    inputThreeLabel:new FormControl('',Validators.required),
 inputFourLabel: new FormControl('',Validators.required),
 inputFiveLabel: new FormControl('',Validators.required)


  });
  @Input() inputOneLabel: any;
  @Input() inputOnePlaceholder: any;
  @Input() inputTwoLabel: any;
  @Input() inputTwoPlaceholder: any;
  @Input() inputThreeLabel: any;
  @Input() inputThreeLabelType: any;
  @Input() inputFourLabel: any;
  @Input() inputFiveLabel: any;
  constructor(private spinnerService: SpinnerService, private projectService : ProjectService, private eventService : EventService) {}
  images: any = [];

  readImage(e: any) {
    if (e.target.files) {
      for (let i = 0; i < e.target.files.length; i++) {
        var picReader = new FileReader();
        picReader.readAsDataURL(e.target.files[i]);
        picReader.onload = (events: any) => {
          this.images.push({
            image: events.target.result,
            name: e.target.files[i].name,
          });
        };
      }
    }
  }

  openImageUpload() {
    document.getElementById('pro-image')?.click();
  }

  removeImg(index1: any) {
    const newArray = this.images.filter((url: any, index: any) => {
      if (index != index1) return url;
    });
    this.images = newArray;
  }

  ngOnInit(): void {}

  onSubmit(){
    this.spinnerService.requestStarted();
    if(this.modalTitle === 'Add A New Project')
    this.projectService.addNewProjectContent(this.Form.value);
    else
    this.eventService.addNewEventContent(this.Form.value);
  }
}
