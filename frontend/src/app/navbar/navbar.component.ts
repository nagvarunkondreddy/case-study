import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AuthService } from '../shared/services/auth/auth.service';
import { State } from '../shared/store/reducers/current-router.reducer';
import * as currentRouteSelector from '../shared/store/selector/current-router.selectors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  routeDetails: any;
  activeElement: any;
  userRole: any;
  constructor(private router: Router, private store: Store<State>, private auth : AuthService) {

  }

  ngOnInit(): void {
    this.assignUserRole();
    

  }

  ngAfterViewInit(){
    this.addColorToActiveElement();
  }
addColorToActiveElement(){
  this.store
  .pipe(select(currentRouteSelector.getCurrentRoute))
  .subscribe((element) => {
    this.removeActiveRouter();
    if (element.name === 'texteditor') {
      this.activeElement = document.getElementById('article');
    } else {
      this.activeElement = document.getElementById(element.name);
    }

    if (this.activeElement != null) {
      this.activeElement.style.color = 'rgba(255,255,255)';
      this.activeElement.style.fontWeight = '600';
    }
  });

}

  removeActiveRouter(): void {
    var tabs = ['project', 'event', 'article', 'team', 'recruitments'];
    for (var i = 0; i < tabs.length; i++) {
      var element = document.getElementById(tabs[i]);
      if (element) {
        element.style.color = 'rgba(255,255,255,.75)';
        element.style.fontWeight = 'unset';
      }
    }
  }

  assignUserRole(){
    this.userRole=this.auth.getUserRole();
  }

  signout(){
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }
}
