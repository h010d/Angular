import {Component, OnInit} from '@angular/core';
import {Student} from '../models/student.model';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent implements OnInit {
  public checkBoxValue = true;
  public studentsList: Student[] = [];
  public switchValue = 2;

  constructor() {
    this.initializeStudents();
    console.log(this.studentsList);
  }

  ngOnInit() {
  }

  private initializeStudents() {
    this.studentsList.push(
      new Student('Ivan', 'Petrov', 27),
      new Student('Petr', 'Red', 54),
      new Student('Sasha', 'Vasin', 22),
    );
  }

}
