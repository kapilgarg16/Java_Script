/*

Define a function that can answer the role of a user

A user can be following roles:
admin: with all access 
subadmin : with access to create/delete course
testprep = with access to create/delete tests
user - consume all content
other trial user

Input : getUserRole(name , role)

*/

var getUserRole = function getUserRole(name ,role)  //A speacial thing in jaascript
{
    switch(role)
    {
        case "admin":
            return `${name} is admin with all access`;
        case "subadmin":
            return `${name} with access to create/delete course`;
        case "testprep":
            return `${name} with access to create/delete tests`;
        default:
            return "Nothing";
    }
}
console.log(getUserRole("kapil", "admin"));