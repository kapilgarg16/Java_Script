//it will always access to the above scope

var name = "Hitesh";

// console.log("line number 3", name);

function sayName()
{
    // var name = "Mr k";
    console.log("line number 7",name);

    sayName1();
    function sayName1()
    {
    // var name = "Mr k";
    console.log("line number 14",name);
    }
}
sayName();

