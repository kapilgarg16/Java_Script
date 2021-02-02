
var User = function(firstName, courseCount)
{
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function()
    {
        console.log(`Course Count is" ${this.courseCount}`);
    };
};

//TODO:
//proto type is basically used for injecting properites in objects without
//entering in object

User.prototype.getFirstname = function()
{
    console.log(`Your firstname is: ${this.firstName}`);
};

var hitesh = new User("kapil",2);

//check that object has those properity which the which we want to accsess
if(hitesh.hasOwnProperty("firstNamee"))  //return false b/c firstNamee is not property of object "hitesh"
{
    hitesh.getFirstname();
}

hitesh.getCourseCount();
hitesh.getFirstname();

// console.log(hitesh);


var sam = new User("chirag",17);
sam.getCourseCount();
sam.getFirstname();