var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from './domain/user';
var ReactiveFormComponent = /** @class */ (function () {
    function ReactiveFormComponent(userService) {
        this.userService = userService;
        this.isValidFormSubmitted = null;
        this.userForm = new FormGroup({
            uname: new FormControl('', Validators.required),
            gender: new FormControl('', Validators.required),
            married: new FormControl(false),
            tc: new FormControl('', Validators.requiredTrue)
        });
        this.user = new User();
    }
    ReactiveFormComponent.prototype.onFormSubmit = function () {
        this.isValidFormSubmitted = false;
        if (this.userForm.invalid) {
            return;
        }
        this.isValidFormSubmitted = true;
        console.log(this.userForm.valid);
        this.user.userName = this.userForm.get('uname').value;
        this.user.gender = this.userForm.get('gender').value;
        this.user.isMarried = this.userForm.get('married').value;
        this.user.isTCAccepted = this.userForm.get('tc').value;
        this.userService.createUser(this.user);
        this.reset();
    };
    ReactiveFormComponent.prototype.reset = function () {
        this.userForm.reset({
            married: false
        });
    };
    ReactiveFormComponent.prototype.setDefaultValues = function () {
        this.userForm.patchValue({ uname: 'Krishna', gender: 'male', married: true });
    };
    ReactiveFormComponent = __decorate([
        Component({
            selector: 'app-reactive',
            templateUrl: './reactive-form.component.html',
            styleUrls: ['./style.css']
        })
    ], ReactiveFormComponent);
    return ReactiveFormComponent;
}());
export { ReactiveFormComponent };
