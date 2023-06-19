function sayHello(name){
    console.log('Hello' + name);
}

// sayHello("Josh");

// global = window in node 
// in JS vars are added to windo
//  in node, vars are not added to global

// in JS this can be bad if we have duplicate 
// functions that override eachother due to global scope
// modules for node fix this - separation and encapsulation

// files will have a main module that makes things private
// console.log(module)