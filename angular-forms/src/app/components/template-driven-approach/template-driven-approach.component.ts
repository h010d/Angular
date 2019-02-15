import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from '../../models/user.model';
import {AvailableCity} from '../../enums/available-city.enum';
import {Gender} from '../../enums/gender.enum';

@Component({
  selector: 'app-template-driven-approach',
  templateUrl: './template-driven-approach.component.html',
  styleUrls: ['./template-driven-approach.component.scss']
})
export class TemplateDrivenApproachComponent {

  public readonly EMAIL_PATTERN = '[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?';
  public readonly INCORRECT_EMAIL_LABEL = 'Incorrect email!';
  public availableCity = AvailableCity;
  public gender = Gender;

  public defaultUser = new User(
    'Vlad',
    'nasadiuk.vlad@gmail.com',
    AvailableCity.Kyiv,
    Gender.Male
  );

  public onSubmit(ngForm: NgForm) {
    console.log('Submited!');
    console.log(ngForm);
  }

  public getEnumLabel(selectedEnum: AvailableCity | Gender, value: AvailableCity | Gender): string {
    return Object.keys(selectedEnum).find(key => selectedEnum[key] === value);
  }
}



