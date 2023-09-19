// const loginDetails = (uid: string | number, item: string):void => {
//     console.log(`${item} has a uid of ${uid}`);
// }


// const greet = (user:{name: string, uid:string | number}):void => {
//     console.log(`${user.name} says hello`)
// }



// above code has some repeatition string | number 
// we can do type aliases
// in this we can create a type 
type StringOrNumber = string | number;
type ObjectWithName = {name:string, uid:StringOrNumber};



const loginDetails = (uid: StringOrNumber, item: string):void => {
    console.log(`${item} has a uid of ${uid}`);
}


const greet = (user:ObjectWithName):void => {
    console.log(`${user.name} says hello`)
}

