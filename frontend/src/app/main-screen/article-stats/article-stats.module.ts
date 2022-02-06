import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleStatsRoutingModule } from './article-stats-routing.module';
import { ArticleStatsComponent } from './article-stats.component';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';


@NgModule({
  declarations: [
    ArticleStatsComponent
  ],
  imports: [
    ArticleStatsRoutingModule,
    SharedModule
  ]
})
export class ArticleStatsModule { }
