import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {query} from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  private firstQueryParam: string;
  private secondQueryParam: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.subscribeForActiveRouteParams();
    alert(`First param: ${this.firstQueryParam}`);
    alert(`Second param: ${this.secondQueryParam}`);

  }

  ngOnInit() {
  }

  public onNavigate() {
    this.router.navigate(['']);
  }

  private showQueryParams(){
    alert(`First param: ${this.firstQueryParam}`);
    alert(`Second param: ${this.secondQueryParam}`);
  }

  public subscribeForActiveRouteParams() {
    this.activatedRoute.queryParams.subscribe((queryParams: Params) => {
      this.firstQueryParam = queryParams['customQuery'];
      this.secondQueryParam = queryParams['secondQueryParams'];
      // this.showQueryParams();
    });
  }
}
