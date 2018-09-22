import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyThreeComponentComponent } from './my-three-component.component';

describe('MyThreeComponentComponent', () => {
  let component: MyThreeComponentComponent;
  let fixture: ComponentFixture<MyThreeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyThreeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyThreeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
