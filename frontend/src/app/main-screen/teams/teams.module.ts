import { NgModule } from '@angular/core';
import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsComponent } from './teams.component';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';


@NgModule({
  declarations: [
    TeamsComponent,

  ],
  imports: [
    TeamsRoutingModule,
    SharedModule
  ]
})
export class TeamsModule { }
