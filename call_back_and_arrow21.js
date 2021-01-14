// node call_back_and_arrow.js

//Normal code

// function isEven(element)
// {
//     if(element%2 == 0)
//     {
//         return true;
//     }
//     return false;
// }
// console.log(isEven(2));


//TODO :- it is required when put arrow keyword then doing return is important

// => arrow operato
// var isEven =  (element) =>
// {
//      return element%2 === 0;
// };
// console.log(isEven(2));

//** first way to learn
// var result = [2,3,6,8].every(isEven);  //call_back
// console.log(result);

//now we can call_back function in other way...

var result = [2, 4, 8, 6 ,8].every((e) => (e%2 === 0));
console.log(result);