var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.createUser = function (user) {
        //Log user data in console
        console.log("User Name: " + user.userName);
        console.log("Gender: " + user.gender);
        console.log("Married?: " + user.isMarried);
        console.log("T & C accepted?: " + user.isTCAccepted);
    };
    UserService = __decorate([
        Injectable()
    ], UserService);
    return UserService;
}());
export { UserService };
