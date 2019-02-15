"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var q = 1;
//string
var str = 'string';
// number
var num = 10;
//boolean
var isTrue = true;
var isFalse = false;
// other
var unknow_first = '1';
unknow_first = '2';
var unknow = '1';
unknow = 1;
unknow = true;
num = unknow_first.length;
console.log('num', num);
function showLine(name, sign, qt) {
    if (name === void 0) { name = 'separator'; }
    if (sign === void 0) { sign = '='; }
    if (qt === void 0) { qt = 50; }
    str = '';
    for (var i = 0; i < qt / 2; i++) {
        str += sign;
    }
    str += name;
    for (var j = qt / 2; j < qt; j++) {
        str += sign;
    }
    console.log(str);
}
//** /////////////////////////////////////////////////////
//
//  Arrays
//
var numArray1 = [1, 2, 3];
var numArray2 = [1, 2, 3, 'string'];
var strArray1 = ['1', '2', '3'];
var strArray2 = ['1', '2', '3'];
var boolArray1 = [true, false];
var boolArray2 = [true, false];
// Tuples
var array = [1, 2, 3, '4'];
var array2 = [true, 'str', 22];
// let array3: Array<number, string> = [1, 'str'];
//** //////////////////////////////////////////////////
//
//
//  Methods
var myName = 'WFM';
var myAge = 50;
function getMyName() {
    return myName;
}
function getMyAge(myAge, prefix) {
    if (prefix === void 0) { prefix = 'WFM-'; }
    return prefix + myAge;
    // return myName;
}
function consoleLog(str) {
    console.log(str);
}
console.log('myName:', getMyName());
console.log('myAge:', getMyAge(40));
consoleLog('Test string');
//** ////////////////////////////////////////////////// 
//
//**            FUNCTIONS
//
var testFunc = function () { return 1 + 1; };
var testFunc2 = function () {
    return 1 + 1;
};
var mySum;
function sum(num1, num2) {
    return num1 + num2;
}
mySum = sum;
console.log(mySum(10, 15));
var user = {
    name: 'WFM',
    age: 50,
    jobs: ['a', 'b'],
    getJobs: function () {
        return this.jobs;
    },
    logName: function () {
        console.log(this.name);
    }
};
var user2 = {
    name: 'Max',
    age: 30,
    jobs: ['2'],
    getJobs: function () {
        return this.jobs;
    }
};
var user3 = {
    name: 'WFM',
    age: 20
};
function logUser(user) {
    console.log(user.name + ' ' + user.age);
}
logUser(user3);
var variable;
variable = 1;
variable = '';
//** //////////////////////////////////////////////////
//**
//**            SPECIAL TYPE
//**
//**
var Job;
(function (Job) {
    Job[Job["Frontend"] = 0] = "Frontend";
    Job[Job["Backend"] = 50] = "Backend";
    Job[Job["Designer"] = 51] = "Designer";
})(Job || (Job = {}));
var job = Job.Backend;
var job2 = Job.Designer;
console.log(job);
console.log(job2);
function throwNewError(err) {
    throw new Error(err);
}
var newArr;
newArr = null;
var myNumber = 20;
myNumber = null;
//** //////////////////////////////////////////////////
//**
//**            CLASSES
//**
//**
var User4 = /** @class */ (function () {
    function User4(name, job) {
        this.name = name;
        this.job = job;
        // public	name: string;  // public default
        this._isTeacher = false;
        this._age = 0;
    }
    User4.prototype.getAge = function () {
        return this._age;
    };
    User4.prototype.setAge = function (value) {
        this._age = value;
    };
    User4.prototype.getIsTeacher = function () {
        return this._isTeacher;
    };
    User4.prototype.setIsTeacher = function (value) {
        this._isTeacher = value;
    };
    User4.prototype.setTitle = function (title) {
        console.log(this._isTeacher);
        this._isTeacher = title;
        console.log(this._isTeacher);
    };
    return User4;
}());
var user5 = new User4('WFM', 'Fronted');
console.log(user5);
console.log(user5.getAge());
user5.setTitle(false);
//** //////////////////////////////////////////////////
//**
//**            CLASSES INHERITANCE
//**
//**
var UserIn = /** @class */ (function () {
    function UserIn(name, job) {
        this.name = name;
        this.job = job;
        this.isTeacher = false;
        this.age = 30;
    }
    UserIn.prototype.getAge = function () {
        return this.age + '';
    };
    return UserIn;
}());
var WFM = /** @class */ (function (_super) {
    __extends(WFM, _super);
    function WFM(job) {
        var _this = _super.call(this, 'WFM', job) || this;
        _this.age = 100;
        return _this;
    }
    WFM.prototype.getAge = function () {
        return 'Hello ' + this.age;
    };
    return WFM;
}(UserIn));
var userIn = new UserIn('WFM', 'Fronted');
var wfm = new WFM('Frontend');
console.log(wfm);
console.log(wfm.getAge());
var Car = /** @class */ (function () {
    function Car() {
        this.year = 2010;
    }
    Car.prototype.getCarYear = function () {
        return this.year;
    };
    return Car;
}());
var Mercedes = /** @class */ (function (_super) {
    __extends(Mercedes, _super);
    function Mercedes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mercedes.prototype.logInfo = function (info) {
        console.log(info);
    };
    return Mercedes;
}(Car));
var car = new Mercedes();
console.log(car);
car.logInfo('Info');
console.log(car.getCarYear());
// function getLength(variable: any): void
function getLength(variable) {
    console.log('getLength', variable.length);
}
getLength([1, 2, 3, 4, 5]);
var box = {
    name: 'WFM',
    length: 20,
};
getLength(box);
var userIf = {
    name: 'WFM',
    age: 20,
    logInfo: function (info) {
        console.log('Info', info);
    }
};
var UserCl = /** @class */ (function () {
    function UserCl() {
        this.name = 'user';
    }
    UserCl.prototype.logInfo = function (info) {
        console.log(info);
    };
    UserCl.prototype.getYear = function () {
        return 200;
    };
    return UserCl;
}());
//** //////////////////////////////////////////////////
//**
//**                10 GENERIC (Общие типы)
//**
//**
function getter(data) {
    return data;
}
console.log(getter('WFM').length);
console.log(getter(100).length);
function genericGetter(data) {
    return data;
}
console.log(genericGetter('WFM').length);
console.log(genericGetter('WFM').length);
// console.log(genericGetter(100).length); <= ошибка
console.log(genericGetter(100).toFixed(2));
console.log(genericGetter(100));
var array3 = [1, 2, 3];
var array4 = [1, 2, 3];
var newGenericFunction = genericGetter;
console.log(newGenericFunction('WFM').length);
console.log(newGenericFunction(100).toFixed(2));
console.log('//=============================================================');
// class Multiply <T extends number | string>{    вариант с наследованием типа данных
var Multiply = /** @class */ (function () {
    function Multiply(a, b) {
        this.a = a;
        this.b = b;
    }
    Multiply.prototype.getResult = function () {
        return +this.a * Number(this.b); // parseInt() 3 способа приведения к number
    };
    return Multiply;
}());
// const mNum = new Multiply<number>(10, 5); еще один вариант запии с типом данных
var mNum = new Multiply(10, 5);
console.log('Number: ', mNum.getResult());
// const mStr = new Multiply<number>('40', '60'); 
var mStr = new Multiply('40', '60');
console.log('String: ', mStr.getResult());
//** //////////////////////////////////////////////////
//**
//**                11 DECORATORS (декораторы)
//**
//**
showLine(' DECORATORS ');
function log(constrFn) {
    console.log(constrFn);
}
var UserDec = /** @class */ (function () {
    function UserDec(name, age) {
        this.name = name;
        this.age = age;
        console.log('I am new user');
    }
    UserDec = __decorate([
        log
    ], UserDec);
    return UserDec;
}());
showLine();
//**///////////////////////////////////////////////////
function logger(constrFn) {
    console.log(constrFn);
}
function shouldLog(flag) {
    return flag ? logger : null;
}
var UserDec2 = /** @class */ (function () {
    function UserDec2(name, age) {
        this.name = name;
        this.age = age;
        console.log('I am new user');
    }
    UserDec2 = __decorate([
        shouldLog(true)
    ], UserDec2);
    return UserDec2;
}());
//**========================================================
showLine();
function addShowAbility(constructorFn) {
    constructorFn.prototype.showHtml = function () {
        var pre = document.createElement('pre');
        pre.innerHTML = JSON.stringify(this);
        document.body.appendChild(pre);
    };
}
var UserDec3 = /** @class */ (function () {
    function UserDec3(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }
    UserDec3 = __decorate([
        addShowAbility
    ], UserDec3);
    return UserDec3;
}());
var userDec3 = new UserDec3('WFM', 20, 'Frontend');
console.log(userDec3);
userDec3.showHtml();
//** //////////////////////////////////////////////////
//**
//**                12 NAMESPACE
//**
//**
showLine(' 12 NAMESPACE ');
var Util;
(function (Util) {
    function isEmpty(d) {
        return !d;
    }
    Util.isEmpty = isEmpty;
    function isUndefined(d) {
        return typeof d === 'undefined';
    }
    console.log(isEmpty(''));
    console.log(isEmpty('sa'));
    showLine('sssss', '-');
    console.log(isUndefined(20));
    console.log(isUndefined(undefined));
    console.log(isUndefined(null));
    showLine('sssss', '-');
    Util.PI = Math.PI;
    Util.EXP = Math.E;
})(Util || (Util = {}));
var EXP = 'TEST';
console.log(Util.isEmpty(''));
console.log(Util.isEmpty('dsa'));
console.log(Util.PI);
console.log(EXP);
console.log(Util.EXP);
//** //////////////////////////////////////////////////
//**
//**                12 NAMESPACE
//**
//**
showLine(' 13 Typescript & webpack ', '/\\-', 10);
//# sourceMappingURL=index.js.map