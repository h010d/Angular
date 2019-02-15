import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  template: ``,
})
export class LifecycleHooksComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  public ngOnInit() {
  }

  public ngAfterContentChecked(): void {
  }

  public ngAfterContentInit(): void {
  }

  public ngAfterViewChecked(): void {
  }

  public ngAfterViewInit(): void {
  }

  public ngDoCheck(): void {
  }

  public ngOnChanges(changes: SimpleChanges): void {
  }

  public ngOnDestroy(): void {
  }
}

