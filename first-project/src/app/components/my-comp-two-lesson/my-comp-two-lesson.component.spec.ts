import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCompTwoLessonComponent } from './my-comp-two-lesson.component';

describe('MyCompTwoLessonComponent', () => {
  let component: MyCompTwoLessonComponent;
  let fixture: ComponentFixture<MyCompTwoLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCompTwoLessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCompTwoLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
