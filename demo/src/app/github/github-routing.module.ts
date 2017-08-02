import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubComponent } from './github.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';


const routes: Routes = [{
  path: '',
  component: GithubComponent,
  children: [
    {
      path: ':username',
      component: GithubProfileComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GithubRoutingModule { }
