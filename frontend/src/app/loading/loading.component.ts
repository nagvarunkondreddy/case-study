import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SpinnerService } from '../shared/services/spinner/spinner.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {


  constructor() {

   }

  ngOnInit(): void {
  }



}
