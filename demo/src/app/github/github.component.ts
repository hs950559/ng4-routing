import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
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
