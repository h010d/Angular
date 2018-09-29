import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-car-three',
  templateUrl: './car-three.component.html',
  styleUrls: ['./car-three.component.css']
})

export class CarThreeComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input('carItem') car: { name: string, year: number };
  @Input() name: string;
  @ContentChild('carHeading') carHeading: ElementRef;

  ngAfterViewInit() {
    console.log('this.carHeading: ', this.carHeading);
  }

  constructor() {
    console.log('constructor()');

  }

  ngOnInit(): void {
    console.log('ngOnInit()');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges().changes => ', changes);
  }

  ngDoCheck() {
    console.log('ngDoCheck()');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked()');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit()');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked()');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy()');
  }

}
