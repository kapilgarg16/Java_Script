// TODO part 1 of "this" key word

console.log(this);  //this will give empty parenthesis

//it is not always same in every case...it is compiling in node engine
//which is basically V8 enegine
// console.log(this);  it will give global window context
                        // on browser 


// in node inside the fun after the printing it will give  different output in global context and execution context

// in browser inside the fun after the printing it will give  same (global window context) output in global context and execution context