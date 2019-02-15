const q = 1;
//string
let str: string = 'string';
// number
let num: number = 10;
//boolean
let isTrue: boolean = true;
let isFalse: boolean = false;


// other
let unknow_first: string | number | boolean = '1';
unknow_first = '2';
let unknow: any = '1';

unknow = 1;
unknow = true;

num = unknow_first.length;
console.log('num', num);

function showLine(name: string = 'separator', sign: string = '=', qt: number = 50): void {
	str = '';
	for (let i = 0; i < qt / 2; i++) {
		str += sign;
	}
	str += name;
	for (let j = qt / 2; j < qt; j++) {
		str += sign;
	}
	console.log(str);

}

//** /////////////////////////////////////////////////////
//
//  Arrays
//
let numArray1: number[] = [1, 2, 3];
let numArray2: Array<number | string> = [1, 2, 3, 'string'];

let strArray1: string[] = ['1', '2', '3'];
let strArray2: Array<string> = ['1', '2', '3'];

let boolArray1: boolean[] = [true, false];
let boolArray2: Array<boolean> = [true, false];

// Tuples
let array: [number, number, number, string] = [1, 2, 3, '4'];
let array2: [boolean, string, number] = [true, 'str', 22];

// let array3: Array<number, string> = [1, 'str'];

//** //////////////////////////////////////////////////
//
//
//  Methods
const myName: string = 'WFM';
const myAge: number = 50;

function getMyName(): string {
	return myName;
}

function getMyAge(myAge: number, prefix: string = 'WFM-'): string {
	return prefix + myAge;
	// return myName;

}

function consoleLog(str: string): void {
	console.log(str);
}

console.log('myName:', getMyName());
console.log('myAge:', getMyAge(40));
consoleLog('Test string');
//** ////////////////////////////////////////////////// 
//
//**            FUNCTIONS
//
const testFunc = () => 1 + 1;
const testFunc2 = function () {
	return 1 + 1;
}


let mySum: (num1: number, num2: number) => number;

function sum(num1: number, num2: number): number {
	return num1 + num2;
}

mySum = sum;

console.log(mySum(10, 15));
//** //////////////////////////////////////////////////
//
//**                OBJECTS
//
//

type User = { name: string, age: number, getJobs: () => string[], jobs: string[], logName?: () => void };

let user: User =
	{
		name: 'WFM',
		age: 50,
		jobs: ['a', 'b'],
		getJobs(): string[] {
			return this.jobs;
		},
		logName(): void {
			console.log(this.name);
		}
	};

let user2: User =
	{
		name: 'Max',
		age: 30,
		jobs: ['2'],
		getJobs(): string[] {
			return this.jobs;
		}

	};
//** //////////////////////////////////////////////////
//**
//**      COMPILER and CONFIGURATION
//**
//**
type User2 = { name: string, age: number };
const user3: User2 =
	{
		name: 'WFM',
		age: 20
	};

function logUser(user: User2): void {
	console.log(user.name + ' ' + user.age);

}

logUser(user3);
let variable;
variable = 1;
variable = '';
//** //////////////////////////////////////////////////
//**
//**            SPECIAL TYPE
//**
//**
enum Job {
	Frontend,
	Backend = 50,
	Designer
}

const job: Job = Job.Backend;
const job2: Job = Job.Designer;
console.log(job);
console.log(job2);

function throwNewError(err: string): never {
	throw new Error(err);
}

let newArr;
newArr = null;
let myNumber: number | null = 20;
myNumber = null;
//** //////////////////////////////////////////////////
//**
//**            CLASSES
//**
//**

class User4 {
	// public	name: string;  // public default
	private _isTeacher: boolean = false;
	private _age: number = 0;


	constructor(public name: string, public job: string) {


	}


	getAge(): number {
		return this._age;
	}

	setAge(value: number) {
		this._age = value;
	}


	getIsTeacher(): boolean {
		return this._isTeacher;
	}

	setIsTeacher(value: boolean) {
		this._isTeacher = value;
	}

	public setTitle(title: boolean) {
		console.log(this._isTeacher);
		this._isTeacher = title;
		console.log(this._isTeacher);
	}
}

const user5 = new User4('WFM', 'Fronted');
console.log(user5);
console.log(user5.getAge());
user5.setTitle(false);
//** //////////////////////////////////////////////////
//**
//**            CLASSES INHERITANCE
//**
//**
class UserIn {
	private isTeacher: boolean = false;
	protected age: number = 30;

	constructor(public name: string, public job: string) {

	}

	public getAge(): string {
		return this.age + '';
	}
}

class WFM extends UserIn {
	constructor(job: string) {
		super('WFM', job);
		this.age = 100;
	}

	getAge(): string {
		return 'Hello ' + this.age;
	}
}

const userIn = new UserIn('WFM', 'Fronted');

const wfm = new WFM('Frontend');
console.log(wfm);
console.log(wfm.getAge());

abstract class Car {
	model: string;
	year: number = 2010;

	abstract logInfo(info: string): void;

	getCarYear(): number {
		return this.year;
	}
}

class Mercedes extends Car {
	logInfo(info: string): void {
		console.log(info);
	}
}

const car = new Mercedes();
console.log(car);
car.logInfo('Info');
console.log(car.getCarYear());

//** //////////////////////////////////////////////////
//**
//**               09  INTERFACES
//**
//**

interface ILength {
	length: number;
}

// function getLength(variable: any): void
function getLength(variable: ILength): void {
	console.log('getLength', variable.length);
}

getLength([1, 2, 3, 4, 5]);
const box =
	{
		name: 'WFM',
		length: 20,
		// boxLength: 20
	};
getLength(box);

//** //////////////////////////////////////////////////

interface IUser {
	name: string;
	age?: number;

	logInfo(info: string): void;

}

const userIf: IUser =
	{
		name: 'WFM',
		age: 20,
		logInfo(info) {
			console.log('Info', info);
		}
	};

interface IGetYear {
	getYear(): number;

}

class UserCl implements IUser, IGetYear {
	name: string = 'user';
	job: string;
	newAge: number;

	logInfo(info: string): void {
		console.log(info);
	}

	getYear(): number {
		return 200;
	}

}

//** //////////////////////////////////////////////////
//**
//**                10 GENERIC (Общие типы)
//**
//**
function getter(data: any) {
	return data;
}

console.log(getter('WFM').length);
console.log(getter(100).length);

function genericGetter<T>(data: T): T {
	return data;

}

console.log(genericGetter<string>('WFM').length);
console.log(genericGetter('WFM').length);
// console.log(genericGetter(100).length); <= ошибка
console.log(genericGetter<number>(100).toFixed(2));
console.log(genericGetter(100));

const array3: number[] = [1, 2, 3];
const array4: Array<number> = [1, 2, 3];

let newGenericFunction: <T>(d: T) => T = genericGetter;

console.log(newGenericFunction<string>('WFM').length);
console.log(newGenericFunction<number>(100).toFixed(2));

console.log('//=============================================================');

// class Multiply <T extends number | string>{    вариант с наследованием типа данных
class Multiply<T> {
	constructor(private a: T, private b: T) {
	}

	public getResult(): number {
		return +this.a * Number(this.b);  // parseInt() 3 способа приведения к number
	}

}

// const mNum = new Multiply<number>(10, 5); еще один вариант запии с типом данных
const mNum = new Multiply(10, 5);
console.log('Number: ', mNum.getResult());

// const mStr = new Multiply<number>('40', '60'); 
const mStr = new Multiply('40', '60');
console.log('String: ', mStr.getResult());

//** //////////////////////////////////////////////////
//**
//**                11 DECORATORS (декораторы)
//**
//**
showLine(' DECORATORS ');

function log(constrFn: Function) {
	console.log(constrFn);
}


@log
class UserDec {
	constructor(public name: string, public age: number) {
		console.log('I am new user');
	}

}

showLine();

//**///////////////////////////////////////////////////
function logger(constrFn: Function) {
	console.log(constrFn);
}

function shouldLog(flag: boolean): any {
	return flag ? logger : null;
}

@shouldLog(true)
class UserDec2 {
	constructor(public name: string, public age: number) {
		console.log('I am new user');
	}

}


//**========================================================
showLine();

function addShowAbility(constructorFn: Function) {
	constructorFn.prototype.showHtml = function () {
		const pre = document.createElement('pre');
		pre.innerHTML = JSON.stringify(this);
		document.body.appendChild(pre);
	}
}

@addShowAbility
class UserDec3 {
	constructor(public name: string, public age: number, public job: string) {

	}


}

let userDec3 = new UserDec3('WFM', 20, 'Frontend');
console.log(userDec3);
(<any>userDec3).showHtml();
//** //////////////////////////////////////////////////
//**
//**                12 NAMESPACE
//**
//**
showLine(' 12 NAMESPACE ');


namespace Util {

	export function isEmpty(d: any): boolean {

		return !d;
	}

	function isUndefined(d: any): boolean {
		return typeof d === 'undefined';
	}

	console.log(isEmpty(''));
	console.log(isEmpty('sa'));
	showLine('sssss', '-');
	console.log(isUndefined(20));
	console.log(isUndefined(undefined));
	console.log(isUndefined(null));
	showLine('sssss', '-');
	export const PI = Math.PI;
	export const EXP = Math.E;

}

const EXP = 'TEST';

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
 
