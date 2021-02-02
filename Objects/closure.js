
//redux.js.org

//1st example
function init()
{
    var firstName = "hitesh";
    console.log("I am init");
    function sayFirstName()
    {
        console.log(firstName);
    }
    return sayFirstName;
}

var value = init(); //store the address of 
//sayFirstName so init context remanne same after also returning

value();

//2nd expample
function addition(x)
{
    return function(y)
    {
        return x+y;
    };
}
var add5 = addition(5);
console.log(add5(6));
//or
console.log(addition(5)(7));




