import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GithubRoutingModule } from './github-routing.module';
import { GithubComponent } from './github.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';

@NgModule({
  imports: [
    CommonModule,
    GithubRoutingModule
  ],
  declarations: [GithubComponent, GithubProfileComponent]
})
export class GithubModule { }
