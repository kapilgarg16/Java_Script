//operators
// aviale name never be start from number like 2

// var num1 = 7;
// var num2 = 4;

// console.log(num1 * num2);

// var answer = num1>num2;
// console.log(answer);

//discount program
var sellingPrice = 199;
var listingPrice = 799;

var discountPercent = (((listingPrice - sellingPrice) / listingPrice)*100);
console.log("Discount percentage is: " + discountPercent);

displayDiscountPercentage = Math.round(discountPercent);  //This is used for round of float numbers

discountPercent.toFixed(0);                               // This can be also used for round float numbers
console.log(displayDiscountPercentage + "% off");


console.log(typeof displayDiscountPercentage);  //check type of data type

//precedency of operators documentaion
// https://developer.mozilla.org/en-US/docs/Web/JavaScript

