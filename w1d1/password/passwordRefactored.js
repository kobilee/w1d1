var myArgs = process.argv.slice(2);

function obfuscate(password) {
  newPassword = "";
  for (var i = 0; i < password.length; i++) {
    switch (password[i].toLowerCase()) {
      case "a":
        newPassword += "4";
        break;
      case "e":
        newPassword += "3";
        break;
      case "o":
        newPassword += "0";
        break;
      case "l":
        newPassword += "1";
        break;
      default:
        newPassword += password[i];
      }
}
  return newPassword;
}

console.log(obfuscate(myArgs[0]));