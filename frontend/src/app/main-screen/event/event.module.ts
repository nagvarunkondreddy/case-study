import { NgModule } from '@angular/core';
import { EventRoutingModule } from './event-routing.module';
import { EventComponent } from './event.component';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';
@NgModule({
  declarations: [
    EventComponent,

  ],
  imports: [
    EventRoutingModule,
    SharedModule
  ]
})
export class EventModule { }
