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