// TODO : falsy

// undefined
// null
// 0
// ''
// NaN


//null - it's totally empty

// TODO : Coercion
//=== is used for strictly checking

var user ="2";

// In this condition it will give true, it is given true
//not strictly data type check
if(2==user)
{
    console.log("Condition is true");
}

//strictly data type check ===
if(2===user)
{
    console.log("Condition is true");
}
else
{
    console.log("Condition is false");
}