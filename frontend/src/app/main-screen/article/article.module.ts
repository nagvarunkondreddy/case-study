import { NgModule } from '@angular/core';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article.component';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';


@NgModule({
  declarations: [
    ArticleComponent
  ],
  imports: [
    ArticleRoutingModule,
    SharedModule
  ]
})
export class ArticleModule { }
