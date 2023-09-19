// explicit types

let Character: string;
let age: number;
let isLoggedIn: boolean;

// age = '234' // error type error
age = 30;

// isLoggedIn = 23' // error type error
isLoggedIn = true;

// arrays
// let ninjas:string[];
// ninjas.push('sahsm');  // error bcus we havn't declare it yet
// show we can do this

let ninjas: string[] = [];
ninjas.push("sahsm");
// ninjas= [12,2]// error
ninjas = ["sam", "rahlu"];

// union types
// could be one or two types
let mixed: (string | number | boolean)[] = [];

mixed.push("sam");
mixed.push(234);
mixed.push(true);
console.log(mixed);

let uid: string | number; // for a variable no need paranthesis;

// objects

// objects
let ninjaOne: object;
ninjaOne = { name: "yoshi", age: 30 };

let ninjaTwo: {
  name: string;
  age: number;
  beltColour: string;
};
ninjaTwo = {
  name: "ken",
  age: 20,
  beltColour: "black", //,skills:[] // will create err bcos it doesn't exits in original
};