import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFreeComponentComponent } from './my-free-component.component';

describe('MyFreeComponentComponent', () => {
  let component: MyFreeComponentComponent;
  let fixture: ComponentFixture<MyFreeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFreeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFreeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
