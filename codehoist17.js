//This is about how then context work

// var num = 2;  //this is in global context

// function SayMe()
// {
//     console.log("Say me");
// }

// SayMe();  //this is execution context it will be responsibile for execution



// ============================================

//Function declaration are scaned and made available

tipper("5");   //it will do work b/c global context of JS
function tipper(a)
{
    var bill = parseInt(a);   //this is used when to change into a actual integer
    console.log(bill + 5);

}
//---------------------------------------------------------------

// bigTipper("200");

// var bigTipper = function (a)   //Here it will give error b/c of the bigTippr
//                             //is a variale for variable first declaration is important
// {
//     var bill  = parseInt(a);
//     console.log(bil + 15);

// }
///////////////////////////////////////////////////////////////
//ToDO:- prove --> Variable declaration are scaned and made undefined

//1st "undefined" b/c name is defined in global context
//2nd when we call sayName(); then execution context would be started so print "kapps";
//then 2nd ececution contest would be end 
// then again start global context and just print "kapil garg"

console.log(Name);
var Name = "kapil garg";   //output : undefined

function sayName()
{
    var Name = "kapps";
    console.log(Name);
}
sayName();

console.log(Name);



        