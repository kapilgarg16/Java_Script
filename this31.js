//confusing part of this 

//for all regular function calls, this points to window objects


var user = {
    Name : "Kapil Garg",
    course :"MERN",

    getCourseCount:function()
    {
        console.log("Line 12", this); //this is object function call so this will print objects
        function sayHello()       
        {
            console.log("hello");
            console.log("Line 17",this); ///this is point to the window objects
                                        //b/c this is regular function call whick point regular windoe objects

        }
        sayHello();
    },
};
user.getCourseCount();