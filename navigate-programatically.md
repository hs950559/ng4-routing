# Programmatic Navigation

```html
<a class="btn btn-primary" (click)="gotTo()">Go to page 100</a>
```

```javascript
import { Router } from '@angular/router';
@Component({
	...
})
export class GithubComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotTo() {
    this.router.navigate(['/github', 'hemantajax'], {
      queryParams: { page: 100, order: 'asc' }
    });
  }
}
```
