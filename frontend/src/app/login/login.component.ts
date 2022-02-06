import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth/auth.service';
import { SpinnerService } from '../shared/services/spinner/spinner.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  patternEmail = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,4}$";
  showPassword:boolean=false;
  formErrorMsg = "";
  showLoading:boolean = false;
  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.pattern(this.patternEmail)]),
    password: new FormControl('',[Validators.required,Validators.minLength(5)]),

  });

  constructor(private router: Router,private auth: AuthService,private spinnerService: SpinnerService,private cdRef:ChangeDetectorRef) { 
    this.init();
  }

  ngOnInit(): void {
  }

  loginDetails(){
    this.formErrorMsg="";
     this.spinnerService.requestStarted();
   this.auth.login(this.loginForm.value).subscribe((data)=>{
    localStorage.setItem('role',data.role);
    localStorage.setItem('token',data.token);
    this.spinnerService.requestEnded();
    if(data.status === 'login success')
    this.router.navigateByUrl('/');
    else{
      this.formErrorMsg =data.status;
          }
   });



  }
  get f(){
    return this.loginForm.controls;
  }

  init(){
    this.spinnerService.getSpinnerObserver().subscribe((status)=>{
      this.showLoading = status;
      this.cdRef.detectChanges();

    })
  }
}

