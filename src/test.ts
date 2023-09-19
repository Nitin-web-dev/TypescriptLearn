console.log('this is test file 123456')


// you can use tsc -w 
// to watch all changes directly not use tsc everytime -w watch will do it autometically



// there will be an error if we crated a file outside the src it will directly generate the file for it in public but we don't want it so we gona make changes in tsconfig.json file => atjust type it if not found in the file =>  include: [src]