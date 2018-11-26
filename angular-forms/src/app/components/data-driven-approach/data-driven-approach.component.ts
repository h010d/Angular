import {Component} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {AvailableCity} from '../../enums/available-city.enum';
import {Gender} from '../../enums/gender.enum';
import {onlyLetters} from '../../validators/only-letters.validator';
import {asyncExample} from '../../validators/async-examle.validator';

@Component({
  selector: 'app-data-driven-approach',
  templateUrl: './data-driven-approach.component.html',
  styleUrls: ['./data-driven-approach.component.scss']
})
export class DataDrivenApproachComponent {

  public loginForm: FormGroup;

  public availableCity = AvailableCity;
  public gender = Gender;

  private readonly PASSWORD_MIN_LENGTH = 7;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();

    this.loginForm.valueChanges.subscribe(data => {
      console.log(data);
    });

    this.loginForm.statusChanges.subscribe(data => {
      console.log(data);
    });
  }

  public get username(): AbstractControl {
    return (this.loginForm.controls.userData as FormGroup).controls.username;
  }

  public get phones(): FormArray {
    return this.loginForm.controls['phones'] as FormArray;
  }

  public onSubmit() {
    console.log(this.loginForm);
  }

  public parsedEnumLabels(selectedEnum: AvailableCity | Gender): string[] {
    const enumFullLength = Object.values(selectedEnum).length;
    return Object.values(selectedEnum).slice(0, enumFullLength / 2);
  }

  public addPhone() {
    this.phones.push(new FormControl('', Validators.required));
  }


  public onPatchValueClick() {
    this.loginForm.patchValue({
      userData: {
        username: 'Test',
        email: 'test@gmail.com',
      },
      password: '12345678',
      gender: Gender.Female,
      city: AvailableCity.Lviv
    });
  }

  public onUpdateCityClick() {
    this.loginForm.controls.city.setValue(AvailableCity.Kyiv); // когда нужно проапдейтить один формконтрол
  }

  private buildForm() {

    this.loginForm = this.formBuilder.group({
      userData: this.formBuilder.group({
        username: ['Vladyslav', [Validators.required, onlyLetters], asyncExample],
        email: ['nasadiuk.vlad@gmail.com',
          {
            updateOn: 'blur',
            validators: [Validators.required, Validators.email],
            asyncValidators: null
          }
        ]
      }),
      password: ['', [Validators.required, Validators.minLength(this.PASSWORD_MIN_LENGTH)]],
      gender: Gender.Male,
      city: AvailableCity.Kyiv,
      phones: new FormArray([
        new FormControl('', Validators.required)
      ])
    }, {updateOn: 'blur'}); // апдейт мод на всю форму

    // this.loginForm = new FormGroup({
    //    userData: new FormGroup({
    //      username: new FormControl('Vlad', Validators.required),
    //      email: new FormControl('nasadiuk.vlad@gmail.com', [Validators.required, Validators.email]),
    //    }),
    //    password: new FormControl('', [Validators.required, Validators.minLength(this.PASSWORD_MIN_LENGTH)]),
    //    gender: new FormControl(Gender.Male),
    //    city: new FormControl(AvailableCity.Kyiv)
    //  });
  }


}

