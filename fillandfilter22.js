// node fillandfilter22.js

var testArray = [2,4,6,3,1,5,9,8];

// console.log(testArray.fill("h", 0));
// console.log(testArray.fill("h", 2));   

// Index no 2 to n they all are would be 'h'; 

console.log(testArray.fill("h",2,5));  //index 2 to 5 change num into "h";

//filter function
var myNumber = [2,4,5,66,2, 54 ,3,542,524];
const result = myNumber.filter((num) => (num < 55)); //filter all the number wich ins less then 55
console.log(result);

