const q = 1;
//string
let str: string = 'string';
// numberyn
let num: number = 10;
//boolean
let isTrue: boolean = true;
let isFalse: boolean = false;
let isFalse: boolean = false;
let isFalse: boolean = false;

// other
let unknow_first: string | number | boolean = '1';
unknow_first = '2';
let unknow: any = '1';

unknow = 1;
unknow = true;

num = unknow_first.length;
console.log('num', num);

// ////////////////////////////////////////////////////////////////////////////
//
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

// ////////////////////////////////////////////////////////////////////////////
//
//
//  Methods
const myName: string = 'WFM';
const myAge: number = 50;

function getMyName(): string {
	return myName;
}
function getMyAge(): number
{
	return myAge;
	// return myName;

}
console.log('myName:', getMyName());
console.log('myAge:', getMyAge());
