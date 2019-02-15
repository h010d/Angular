var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { User } from './domain/user';
var TemplateDrivenFormComponent = /** @class */ (function () {
    function TemplateDrivenFormComponent(userService) {
        this.userService = userService;
        this.isValidFormSubmitted = false;
        this.user = new User();
    }
    TemplateDrivenFormComponent.prototype.onFormSubmit = function (form) {
        this.isValidFormSubmitted = false;
        if (form.invalid) {
            return;
        }
        this.isValidFormSubmitted = true;
        this.user.userName = form.controls['uname'].value;
        this.user.gender = form.controls['gender'].value;
        this.user.isMarried = form.controls['married'].value;
        this.user.isTCAccepted = form.controls['tc'].value;
        this.userService.createUser(this.user);
        this.resetForm(form);
    };
    TemplateDrivenFormComponent.prototype.resetForm = function (form) {
        this.user = new User();
        form.resetForm({
            married: false
        });
    };
    TemplateDrivenFormComponent.prototype.setDefaultValues = function () {
        this.user.userName = 'Krishna';
        this.user.gender = 'male';
        this.user.isMarried = true;
        this.user.isTCAccepted = false;
    };
    TemplateDrivenFormComponent = __decorate([
        Component({
            selector: 'app-template',
            templateUrl: './template-driven-form.component.html',
            styleUrls: ['./style.css']
        })
    ], TemplateDrivenFormComponent);
    return TemplateDrivenFormComponent;
}());
export { TemplateDrivenFormComponent };
