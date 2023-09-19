// array
let names = ["sam", "sumit", "rahul"];

names.push("tosad");
// names.push(3) // error bcos array is only stirng
// names[0] = 3 //error

let numbers = [10, 12, 213];

numbers.push(23);
// numbers.push('sag')// error for same
// numbers[0] = 'asdffs'

// but we can crate mixed
let mixed = ["sam", 20, "rahul", 234];

mixed.push("samsingh");
mixed.push(234);
mixed[2] = "aksh";

// objects

let ninjs = {
  name: "mario",
  belt: "black",
  age: 30,
};

ninjs.age = 40;
ninjs.name = 'sam'
// ninjs.age = '30'; // error same reason type change
// ninjs.skills = ['fighting', 'sneaking'] // error


// we can overide which only exist

ninjs = {
    name: 'yoshi',
    belt : 'oragnge',
    // age: '34' // error type 
    age: 34,
    // skills : ['sdfasdf','asdfasdfsf'] // error bcos it does n't exits in original
}