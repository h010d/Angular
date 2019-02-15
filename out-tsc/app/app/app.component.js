var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, ViewChild } from '@angular/core';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.answers = [{
                type: 'yes',
                text: 'Да'
            }, {
                type: 'no',
                text: 'Нет'
            }];
        this.defaultAnswer = 'no';
        this.defaultCountry = 'ua';
        this.formData = {};
        this.isSubmited = false;
    }
    AppComponent.prototype.addRandEmail = function () {
        var randEmail = 'wfm@gmail.com';
        this.form.form.patchValue({
            user: { email: randEmail }
        });
    };
    AppComponent.prototype.submitForm = function () {
        this.isSubmited = true;
        this.formData = this.form.value;
        this.form.reset();
    };
    __decorate([
        ViewChild('form')
    ], AppComponent.prototype, "form");
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html'
        })
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
