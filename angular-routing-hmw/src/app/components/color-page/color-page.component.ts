import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-color-page',
  templateUrl: './color-page.component.html',
  styleUrls: ['./color-page.component.scss']
})
export class ColorPageComponent implements OnInit {

  public id: number;
  public name: string;
  public price: number;
  public unID: string;
  public hash: string;


  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.name = this.route.snapshot.params['name'];
    this.price = this.route.snapshot.queryParams['price'];
    this.unID = this.route.snapshot.queryParams['unID'];
    this.hash = this.route.snapshot.fragment; // TODO: subscribe

    this.route.params.subscribe((params: Params) => {
      // console.log(params);
      this.id = +params['id'];
      this.name = params['name'];
    });
    this.route.queryParams.subscribe((params: Params) => {
      this.price = params['price'];
      this.unID = params['unID'];
    });
  }

  public openPurplePage() {
    this.router.navigate(['./colors', 15, 'Purple'], {
      queryParams: {
        price: 22,
        unID: '658845'
      },
      fragment: 'colpurple'
    });
  }

}
