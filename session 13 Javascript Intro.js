//Data Types Primitive data types
//Interger
var x = 40;
console.log(x);
//String
var y = "Code young";
console.log(y);
//Boolean
var b = true;
//Undefined
var a;
//null variable
var c = null;

//NON PRIMITIVE DATA TYPES
//Array
var array = [12,20,2,3,4,6,7,"c","t"]
console.log(array)

//index position it starts from 0
console.log(array[5])
//Adding new element to end of array
array.push("code young")
console.log(array)
//adding element at beginning of array
array.unshift(200)
console.log(array)

//adding new element in particular position
var list = ['code','world']
list[1]="Young"
console.log(list)

var list = ['code','world']
list[3]="Young"
console.log(list)

//sorting ascending order
var letter = ['e','a','t','g','r']
letter.sort()
console.log(letter)

//knowing index position number
var a = ['e','a','t','g','r']
a.indexOf('t')
console.log(a)

//Concatenate
console.log("5"+"5")
console.log(5+30+"hellow")