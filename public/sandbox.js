"use strict";
let greet;
// greet = 'hell' // error
greet = () => {
    console.log("hola!");
};
// ? is for optional in parameters if get value good if not also good
// const add = (a:number, b:number,c?:number|string) => {
//     console.log(a + b);
//     console.log(c) // undefined output
// }
// add(5, '10') // error
// add(5,10)
// we can solve it by this method assigned default value but on ?
// if funciton does return anything it should be void
const add = (a, b, c = 10) => {
    console.log(a + b); // 15
    console.log(c); // 10 if not provied if provided 20 or sam
};
// add(5, '10') // error
add(5, 10);
add(5, 10, 20); //
add(5, 10, "sam");
// if return should also define type to return after ():type explicit
// or it will get autometic also
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7);
console.log(result);
