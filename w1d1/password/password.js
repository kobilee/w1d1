var myArgs = process.argv.slice(2);

function obfuscate(password) {
  newPassword = "";
  for (var i = 0; i < password.length - 1; i++) {
    if (password[i].toLowerCase() == "a") {
      newPassword += "4";
    } else if (password[i].toLowerCase() == "e"){
      newPassword += "3";
    } else if (password[i].toLowerCase() == "o"){
      newPassword += "0";
    } else if (password[i].toLowerCase() == "l"){
      newPassword += "1";
    } else {
      newPassword += password[i];
    }
  }
  return newPassword;
}

console.log(obfuscate(myArgs[0]));