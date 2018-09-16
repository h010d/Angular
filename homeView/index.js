"use strict";
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
// ////////////////////////////////////////////////////////////////////////////
//
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
// ////////////////////////////////////////////////////////////////////////////
//
//
//  Methods
var myName = 'WFM';
var myAge = 50;
function getMyName() {
    return myName;
}
function getMyAge() {
    return myAge;
    // return myName;
}
console.log('myName:', getMyName());
console.log('myAge:', getMyAge());
