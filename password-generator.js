const generatePassword = require("generate-password");

const password = generatePassword.generate({
  length: 12, // Length of the password
  numbers: true, // Include numbers
  symbols: true, // Include symbols
  uppercase: true, // Include uppercase letters
});

console.log("Generated Password:", password);
