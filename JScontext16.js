
// TODO :- when we execute in it it a inpect console(browser) log
// var myName = "kapil garg";

// if(myName ===window.myName)  //Java script has a bigger contest that every thing resides
// {
//     console.log("A true statement");
// }


// TODO :- global contest is not available in nodejs
//injava script there is a need of context and that this is responsible
//all the things registered inside the context...then the function wrapped up
//and put in global context.

if(2=="2")
{
    console.log("This is true");
}

var myName = "hitesh";
if(myName ===window.myName)  //showing errw because in node js window is not global context
{
    console.log("A true statement");
}