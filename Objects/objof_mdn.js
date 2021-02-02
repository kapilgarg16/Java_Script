var User = {
    name:"",
    getUserName: function()
    {
        console.log(`User name is: ${this.name}`);
    }
};

var hitesh = Object.create(User)
console.log(hitesh);
hitesh.getUserName();

hitesh.name = "Kapil Garg";
hitesh.getUserName();

var sam = Object.create(User,{
    name : {value : "Sammy"},
    courseCount : {value:3},
});
sam.getUserName();
console.log(sam.courseCount);
// console.log(hitesh.courseCount); don;t exist