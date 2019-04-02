const urlEncode = function(text) {
  // Put your solution here
  text = text.trim();
  var arry = text.split(" ");
  var newText = ""
  for (var i = 0; i < arry.length - 1; i++){
    newText += (arry[i] + "%20")
  }
  newText += arry[arry.length - 1];
  return newText;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));