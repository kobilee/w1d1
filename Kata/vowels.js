//  Create a function named numberOfVowels that will receive a string and return the number of vowels in that string.
let numberOfVowels = function(data) {
  // Put your solution here
  var vowels = "aeiou";
  var num_v = 0;
  for ( var i = 0 ; i< data.length; i++){
      if (vowels.includes(data[i])){
        num_v += 1;
      }
  }
  return num_v;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));