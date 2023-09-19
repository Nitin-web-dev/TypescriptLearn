// explicit types
var Character;
var age;
var isLoggedIn;
// age = '234' // error type error
age = 30;
// isLoggedIn = 23' // error type error
isLoggedIn = true;
// arrays
// let ninjas:string[];
// ninjas.push('sahsm');  // error bcus we havn't declare it yet
// show we can do this
var ninjas = [];
ninjas.push("sahsm");
// ninjas= [12,2]// error
ninjas = ["sam", "rahlu"];
// union types
// could be one or two types
var mixed = [];
mixed.push("sam");
mixed.push(234);
mixed.push(true);
console.log(mixed);
var uid; // for a variable no need paranthesis;
// objects
// objects
var ninjaOne;
ninjaOne = { name: "yoshi", age: 30 };
var ninjaTwo;
ninjaTwo = {
    name: "ken",
    age: 20,
    beltColour: "black", //,skills:[] // will create err bcos it doesn't exits in original
};
