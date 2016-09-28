
// Example

// The purpose of this first exercise is just to show how
// assertions work and how the homework should be carried out.
// We'll do it together in class.

// Part EXAMPLE

// Write a function called addOne() that returns the input number, plus one.

console.assert(addOne(1) === 2)
var addOne= function (number){
 return number + 1;
}

// Part 0

// Fix the following code so that the assertion passes.

var doubleNum = function(num) {
 	return num * 2;
}

console.assert(doubleNum(5) === 10)


/**
 * PART 1
 *
 * Write a function called sum that takes two numbers as
 * inputs and computes the sum of those two numbers.
 */


console.assert(sum(8, 11) === 19);
console.assert(sum(4, 100) === 104);

var sum= function (num1, num2){
	return num1 + num2;
}
// PART 2

// Write a function called average that takes two numbers
// as inputs and returns the average of the two. To avoid
// repeating yourself, use your sum function inside
// of your average function.


console.assert(average(8,12) === 10)
console.assert(average(100,200) === 150)

var average= function (x, y){
	var sum = x + y;
return sum/2;
}

/**
 * PART 3
 *
 * Modify your sum function so that if either of its
 inputs is not a number, it will return "null."
 */


console.assert(sum(867, 5309) === 6176);
console.assert(sum('867', 5309) === null);
console.assert(sum(true, 5) === null);

var sum= function (a,b) {if (a'number' || b'number')}
{return object;}


// Part 4

// Write a function called isNegative that will tell
// whether a number is negative or not.

console.assert(isNegative(10) === false)
console.assert(isNegative(0) === false)
console.assert(isNegative(-999) === true)

var isNegative = function (num) if(-x) {
    "This is true";
}else {
    "This is false";
}

// Now, modify your sum function again, so that it
// will return null if any of the inputs is negative.
// To avoid repeating yourself, use your isNegative
// function inside your sum funciton ***

console.assert(sum(5,-5) === null)

var isNegative= function (num) if(-x) {
    "This is true";
} return === null;{}
}

// Part 5

// Write a function that will find the minimum of four
// input numbers. You can do it using nested if statements,
// boolean operators, or both (but not neither).

console.assert(minimum(1,2,4,0) === 0)
console.assert(minimum(1000,-2,-99,50) === -99)
console.assert(minimum(-1000,-2,-99,50) === -1000)
console.assert(minimum(1000,-2,99,50) === -2)

var minimum = function (num1, num2, num3, num4) {
	return num1
}else if (num2 < num3 && num2 < num4) {
	return num2
}else if (num3 < num4) {
	return num3
}else {
	return num4
}



// Part 7

// Using logical operators, write a function that will
// return true if either input is a string, but not
// both or neither.

console.assert(justOneString('a',5) === true)
console.assert(justOneString(6,'dotron') === true)
console.assert(justOneString('peanut','butter') === false)
console.assert(justOneString(8,null) === false)

var justOneString= function (num,phr) {
	if (num==='string' && phr==='number' || num=== 'string' && phr=== 'string')}
	{return true;
}else{
	return false;
}



// Part 8

// Write a function called doTwice that takes as input a
// function and invokes that function twice.

// For testing purposes, I've included some functions that
// modify global variables, although that's not a good
// pattern for production code.

var NUMBER = 10

var incrementGlobalNumber = function(){
	NUMBER = NUMBER + 1
}

var doubleGlobalNumber = function() {
	NUMBER = NUMBER * 2
}

var doTwice= function (num1) {
	num1 ()
	num1 ()
}

doTwice(incrementGlobalNumber)
console.assert(NUMBER === 12)

doTwice(doubleGlobalNumber)
console.assert(NUMBER === 48)

var doTwice= [[[x]]]

// Part 9

// Write a function called conditionallyInvoke that takes a function
// as input. It should invoke that input function only if
// the value of a certain global variable, called ORACLE, is
// "YES." Otherwise, it will does nothing.

var ORACLE = 'NO'

conditionallyInvoke(doubleGlobalNumber)
console.assert(NUMBER === 48)

ORACLE = 'YES'
conditionallyInvoke(doubleGlobalNumber)
console.assert(NUMBER === 96)

// Part 10

// Make the following assertion work:

console.assert(factory()() === 'hello world')  // INCEPTION!


// Part 11

// Want more?

console.assert(factory2()('you sly dog') === 'you sly dog')
console.assert(factory2()(999) === 999)

// Part 12

// This can't be healthy...

console.assert(factory3('i have reached function nirvana')() === 'i have reached function nirvana')
console.assert(factory3(100)() === 100)
