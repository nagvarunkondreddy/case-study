import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from 'src/app/cards/cards.component';
import { ModalComponent } from 'src/app/modals/modal-1/modal.component';
import { TeamModalComponent } from 'src/app/modals/team-modal/team-modal.component';
import { HeadingComponent } from 'src/app/page-heading/page-heading.component';
import { LoadingComponent } from 'src/app/loading/loading.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from 'src/app/table/table.component';



@NgModule({
  declarations: [
    CardsComponent,
    HeadingComponent,
    TeamModalComponent,
    ModalComponent,
    TableComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [     
    CardsComponent,
    HeadingComponent,
    TeamModalComponent,
    ModalComponent,
    TableComponent,
    CommonModule,
    ReactiveFormsModule,
  FormsModule,
LoadingComponent ],
})
export class SharedModule { }
