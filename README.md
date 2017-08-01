# Angular 4 Routing

Github - https://github.com/hs950559/ng4-routing

## Configuring Routes

```javascript
// app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'posts', loadChildren: 'app/blog/post/post.module#PostModule' },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```


# Resources

Create Cover

https://www.canva.com/design/DACc3Wg0tvc/2WFWvSS7tYvvnjiVpA9U2w/edit?layouts=&layoutQuery=free&utm_source=onboarding







