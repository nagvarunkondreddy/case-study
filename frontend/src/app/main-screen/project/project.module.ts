import { NgModule } from '@angular/core';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';
import { LoadingComponent } from 'src/app/loading/loading.component';

@NgModule({
  declarations: [
    ProjectComponent,
  ],
  imports: [
    ProjectRoutingModule,
    SharedModule
  ],

})
export class ProjectModule { }
