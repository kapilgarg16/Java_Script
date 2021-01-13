//read documentation of MDN

var course = ["mern","node","js","angular"];

var states = new Array("MP", "UP", "RAJ","Delhi");

// console.log(course);
// console.log(states[1]);

// console.log(states.length);

// states[0] = "punjab";
// console.log(states);

states.pop();  //delete from back
// console.log(states);

states.unshift("New value");  //include one value in beginning
states.shift();               // remove shift value
// console.log(states);

// console.log(states.indexOf("UP"));  //return index of those elements

//TODO: - Try to explore every element of array find...etc
// console.log(states.indexOf("fdsfs")); //if did not find return -1;

//Todo: try to change string element into array
console.log(Array.from("hitesh"));
