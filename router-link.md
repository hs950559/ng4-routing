# Router linking

```html
<li class="nav-item">
	<a class="nav-link" routerLink="/home">Home</a>
</li>
<li class="nav-item">
	<a class="nav-link" [routerLink]=["/users", user.id]>Users</a>
</li>
```

##  Add active class to link

```html
<li class="nav-item" routerLinkActive="active">
	<a class="nav-link" routerLink="/home">Home</a>
</li>
<li class="nav-item" routerLinkActive="active">
	<a class="nav-link" [routerLink]=["/users", user.id]>Users</a>
</li>
```

## Add multiple class on active link

```html
<li class="nav-item" routerLinkActive="active current">
	<a class="nav-link" routerLink="/home">Home</a>
</li>
```