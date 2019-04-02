
//Create a function named conditionalSum that will be given an array of numbers and a condition, such as odd or even.
// Given this condition, add up only the values which match that condition. If no values match the condition, return 0.
const conditionalSum = function(values, condition) {
  var sum = 0;
  if (condition === "even"){
    var check = 0;
  } else if (condition === "odd"){
    var check = 1;
  }

  for (var i = 0; i < values.length; i ++){
    if (values[i] % 2 === check) {
      sum += values[i]
    }
  }
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));