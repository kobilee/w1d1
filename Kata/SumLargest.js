let sumLargestNumbers = function(data) {
  // Put your solution here
  var a = data[0];
  var b = data[0];
  for (var i = 0; i < data.length - 1; i++){
    if (data[i  + 1] > a){
      a = data[i +1];
    }
  }
  for (var i = 0; i < data.length - 1; i++){
    if (data[i + 1] > b && data[i + 1] < a){
      b = data[i +1];
    }
  }
  return a + b;
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));