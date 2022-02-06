import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { AuthGuard } from './shared/services/auth/auth.guard';
import { RoleGuard } from './shared/services/auth/role.guard';

const routes: Routes = [
  {
    path:'login',
    component: LoginComponent
  },
  {
    path: '',
    component: MainScreenComponent,
    canActivate:[AuthGuard],
    children: [
      { path: '', loadChildren: () => import('./main-screen/project/project.module').then(m => m.ProjectModule),canActivate:[RoleGuard] },
      { path: 'project', loadChildren: () => import('./main-screen/project/project.module').then(m => m.ProjectModule) },
      { path: 'event', loadChildren: () => import('./main-screen/event/event.module').then(m => m.EventModule) },
      { path: 'article', children:[
        {path:'all-articles', loadChildren: () => import('./main-screen/article/article.module').then(m => m.ArticleModule) },
        {path:'stats', loadChildren:()=> import('./main-screen/article-stats/article-stats.module').then(m=>m.ArticleStatsModule)}
      ] },
      { path: 'team', loadChildren: () => import('./main-screen/teams/teams.module').then(m => m.TeamsModule) },
      { path: 'recruitments', loadChildren: () => import('./main-screen/recruitments/recruitments.module').then(m => m.RecruitmentsModule) },
      { path: 'texteditor', loadChildren: () => import('./texteditor/texteditor.module').then(m => m.TexteditorModule) },
    ],
  },
  { path: 'article-stats', loadChildren: () => import('./main-screen/article-stats/article-stats.module').then(m => m.ArticleStatsModule) },






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
