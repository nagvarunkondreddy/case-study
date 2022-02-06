import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleStatsComponent } from './article-stats.component';

const routes: Routes = [{ path: '', component: ArticleStatsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleStatsRoutingModule { }
