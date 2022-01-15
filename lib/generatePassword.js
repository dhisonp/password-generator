function generatePassword(options) {
  const { length, isNumbers, isUpperCase, isSymbols } = options;
  // console.log(options);

  var result = "";
  var characters = "abcdefghijklmnopqrstuvwxyz";
  if (isUpperCase) {
    characters = characters + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (isNumbers) {
    characters += "0123456789";
  }
  if (isSymbols) {
    characters += "$!*_-@%&";
  }
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export default generatePassword;
