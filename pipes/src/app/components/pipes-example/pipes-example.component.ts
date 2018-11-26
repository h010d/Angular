import { Component} from '@angular/core';
import {interval} from 'rxjs';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.scss']
})
export class PipesExampleComponent  {

  public clock = interval(1000);
  public lowerCaseString = 'lowercase';
  public upperCaseString = 'UPPERCASE';
  public sentence = 'greeting to IT Univer Angular course members!';
  public firstName = 'Bob';
  public pi = 3.14;
  public today = Date.now();
  public object = {
    name: 'Vlad', surname: 'Nasadiuk',
    nested: {course: 'Angular', members: 7},
  };
}
