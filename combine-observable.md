# Subscribing to Multiple Observables 

Combining multiple subscription

```javascript
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';

ngOnInit() {
	Observable.combineLatest([
	  this.route.paramMap,
	  this.route.queryParamMap
	])
	  .subscribe(combined => {
	    console.log(combined[0].get('username'));
	    console.log(combined[1].get('page'));
	    console.log(combined[1].get('order'));
	  });
	// this.route.paramMap
	//   .subscribe(params => {
	//     console.log(params.get('username'));
	//   });

	// this.route.queryParamMap
	//   .subscribe(query => {
	//     console.log(query.get('page'));
	//     console.log(query.get('order'));
	//   });
}
```

## Avoid nested subscribe ( switchMap )

```javascript
// Before
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';

ngOnInit() {
	Observable.combineLatest([
	  this.route.paramMap,
	  this.route.queryParamMap
	])
  .subscribe(combined => {

	this.service.getAll()
		.subscribe(res => {})
  });
```

```javascript
// After
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/switchMap';

ngOnInit() {
	Observable.combineLatest([
	  this.route.paramMap,
	  this.route.queryParamMap
	])
	.switchMap(combined => {
	    console.log(combined[0].get('username'));
	    console.log(combined[1].get('page'));
	    console.log(combined[1].get('order'));	
	    return this.service.getAll();
	})
  .subscribe(followers => {
	this.followers = followers;
  });
```
