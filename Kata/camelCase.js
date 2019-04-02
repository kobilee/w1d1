//Create a function named camelCase that will convert a string to camel case, and return the result.
let camelCase = function(input) {
  // Your code here
  var array = input.split(" ");
  var newStr = array[0];
  for (var i = 1; i < array.length; i ++){
      newStr += array[i][0].toUpperCase() + array[i].substr(1);
  }
  return newStr;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));