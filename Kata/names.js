//Create a function named instructorWithLongestName that will receive an array of instructor objects,
// and return the object that has the longest name. If there are two instructors with the longest name, return the first one.
const instructorWithLongestName = function(instructors) {
  // Put your solution here
  var location = 0;
  var nameL = instructors[0]["name"].length;
 for (var i = 0; i < instructors.length -1; i++){
  if (instructors[i + 1]["name"].length > nameL)  {
    nameL = instructors[i + 1]["name"].length;
    location = i + 1;
  }
 }
 return instructors[location];
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
