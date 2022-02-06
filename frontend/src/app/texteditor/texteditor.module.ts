import { NgModule } from '@angular/core';
import { TexteditorRoutingModule } from './texteditor-routing.module';
import { TexteditorComponent } from './texteditor.component';
import { SharedModule } from '../shared/modules/shared/shared.module';


@NgModule({
  declarations: [
    TexteditorComponent
  ],
  imports: [
    TexteditorRoutingModule,
    SharedModule
  ]
})
export class TexteditorModule { }
