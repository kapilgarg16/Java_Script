//node obj_nd_method.js

var user = 
{
    firstName :"Kapil",
    lastName : "Garg",
    role: "Admin",
    loginCount :32,
    gmailSignIn : true,
    courseList: [],
    //method inside the objects
    buyCourse : function(courseName) //syntax is diifferent 
    {
        //this is refer to current context which is "user context"
        this.courseList.push(courseName);
    },
    getCourseCount: function()
    {
        return `${this.firstName} is enrolled of total number of ${this.courseList.length} courses`;
    }

};
// var courseList = true;
console.log(user.firstName);   //why it did not  error after change firstaName??
console.log(user.getCourseCount());
user.buyCourse("angular js");
user.buyCourse("node js");
console.log(user.getCourseCount());