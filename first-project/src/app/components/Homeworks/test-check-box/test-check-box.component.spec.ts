import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCheckBoxComponent } from './test-check-box.component';

describe('TestCheckBoxComponent', () => {
  let component: TestCheckBoxComponent;
  let fixture: ComponentFixture<TestCheckBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCheckBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCheckBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
