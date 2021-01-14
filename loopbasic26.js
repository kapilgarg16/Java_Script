//node loopbasic26.js

//for loop

// Description. let allows you to declare variables that are limited to the scope of a block statement, or expression on which it is used, 
//unlike the var keyword, which declares a variable globally, or locally to 
// an entire function regardless of block scope.

//var declared a variable gloabally or an entire function so we will use
//let is used

// const states =
// [
//     "MP", "UP", "RAJ", "ASSAM",1234
// ];
// TODO 1:-  for loop
// for(let i=0; i<states.length; i++)  //for upperbound it will print "undefined" not error
// {
//     if (typeof states[i] === "string")
//     continue;
//     console.log(states[i]);
// }

//  TODO 2:-  While and do while same as c++
 
//  TODO 3:- for each loop not considered as loop but considered as method

// states.forEach((s) => (console.log(s)));  //this is just like call back function

// TODO 4:  Introduce 2 new loops "for in" and "for of" loop
  
const names = ["Youtube", "facebook", "Instagram", "Netflix", "Amazon"];

//"for of" is used for array
for(const n of names)
{
    console.log(n); 
}

const symbols = {
    yt: "Youtube",
    ig: "instagram",
    fb : "facebook",
    kg : "kapil16garg"
};

//"for in" is used for used for array

for(const n in symbols)
{
    console.log(`key is ${n} and value if :${symbols[n]}`);
}