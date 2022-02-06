import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from './shared/store/reducers/current-router.reducer';
import { filter } from 'rxjs/operators';
import * as  CurrentRouterActions from './shared/store/actions/current-router.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iota-website-admin';
  active:any;
  constructor(private router: Router, private store:Store<State>){
          router.events.pipe(
          filter(event => event instanceof NavigationEnd)
        )
        .subscribe((event: any) => {
          this.active = event.url;     
          this.active = this.active.substring(1); //to remove slash
         
                    if(!this.active){
            this.active = "project";
          }
          this.store.dispatch(new CurrentRouterActions.SaveCurrentRoutes({name: this.active, route: event.url}));

        });
  }
}
