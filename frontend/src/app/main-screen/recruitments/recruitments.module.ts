import { NgModule } from '@angular/core';
import { RecruitmentsRoutingModule } from './recruitments-routing.module';
import { RecruitmentsComponent } from './recruitments.component';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';

@NgModule({
  declarations: [
    RecruitmentsComponent
  ],
  imports: [
    RecruitmentsRoutingModule,
    SharedModule
  ]
})
export class RecruitmentsModule { }
