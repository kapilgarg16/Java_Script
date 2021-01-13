// conditionols 
//=== is also an operator


//logicals->

// Allow here to access course if he is
// logged in from google
// logged in from email
// logged in from facebook


var email= true;
var facebook = false;

var google = false;

if(email || facebook || google)
{
    console.log("login success");
}


var authenticated = true;

// if(authenticated)
// {
//     console.log("show signout button");
// }
// else
// {
//     console.log("show login option")
// }

//ternary operator->

authenticated ? console.log("signOut Button") : console.log("signin Button");

//Switch for roled bases access

//used
//admin - gets full access
//subadmin - gets access to create/delete courses
//test prep - get access to create/delete tests

var user = "testprep";

switch(user)
{
        case "admin":
            return console.log("you get full access");
        case "testprep":
            return console.log("gets access to create/delete access");
        case "user":
            return console.log("get access to consume contests");
        default:
            break;
}