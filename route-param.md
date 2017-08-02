# Getting the route parameter

`this.route.paramMap` return observable so any update to param wpould be in sync, useful if you are on same route `users/:username` and trying to update `username`

```javascript
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.scss']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        console.log(params.get('username'));
      });
  }
}
```

## Get static param

When you are sure user will navigate to another route when param change you can use this version

```javascript
this.route.snapshot.paramMap.get('username');
```

## Routes with Multiple Parameters

```javascript
  { path: 'users/:id/:loc', component: UsersComponent },
```

```html
// localhost:4200/users/213213/Bangalore
<li [routerLink]="['/users', user.id, user.loc]">
```


## Getting query parameters

/users/:username/:loc?page=12&order=desc
PARAM: :username/:loc
Query PARAM: page=12&order=desc

```html
<li [routerLink]="['/users', user.id, user.loc]"
	[queryParams]="[page: 12, order: 'desc']">
```

```javascript
this.route.queryParamMap.subscribe() // sync
this.route.snapshot.queryParamMap.get('page') // static
```

```javascript
ngOnInit() {
this.route.paramMap
  .subscribe(params => {
    console.log(params.get('username'));
  });

this.route.queryParamMap
  .subscribe(query => {
    console.log(query.get('page'));
    console.log(query.get('order'));
  });
}
```


