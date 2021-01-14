// node sliceandsplice23.js

var myNumber = [2,4,5,66,2, 54 ,3,542,524];

const result = myNumber.filter((num) => (num < 55)); //filter all the number wich ins less then 55

// console.log(result);

var users = ["Ted", "Tim", "Ton", "Sam", "God"];

// console.log(users.slice(1,3)); //cout 1 to  number of counts will slice
// console.log(users);            //not put affect on actual one

// console.log(users.slice(1));   //print 1 to users.length-1 complete

// console.log(users.slice(users.length-1)); //print last element


//Todo:-  SPLICE

// Removes elements from an array and, if necessary, inserts new elements ...
// in their place, returning the deleted elements.
users.splice(1,2,"kapil" , "garg", "mhoon");
console.log(users);