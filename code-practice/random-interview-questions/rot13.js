/*
What is ROT13 Ceasar Cipher?
If you have ever done any research on cyber security or cryptography you have probably heard of a Caesar cipher. 
If you haven’t, a Caesar cipher is a shift cipher that shifts all the letters of the alphabet a set number of letters down the alphabet. 
A ROT3 being the most common Caesar Cipher. A ROT13 means each letter substituted with the 13th letter after it in the alphabet 

Prompt:
Create a function that takes a string and returns the string with each letter substituted with the 13th letter after it in the alphabet (ROT13). 
If there are numbers or special characters included in the string, they should be returned as they are. 

Examples:
rot13("Hello Dev World is awesome!")   // Uryyb Qri Jbeyq vf njrfbzr
rot13("my dogs are the cutest dogs in the world")   // zl qbtf ner gur phgrfg qbtf va gur jbeyq
rot13("abcdefghijklmnopqrstuvwxyz")  // nopqrstuvwxyzabcdefghijklm
rot13("#365DaysOfCoding") // #365QnlfBsPbqvat
*/

// Solution
// Using regex
function rot13(message) {
  const alphabet =
    'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';
  return message.replace(
    /[a-z]/gi,
    (letter) => alphabet[alphabet.indexOf(letter) + 13],
  );
}

console.log(rot13('Hello Dev World is awesome!')); // Uryyb Qri Jbeyq vf njrfbzr
console.log(rot13('my dogs are the cutest dogs in the world')); // zl qbtf ner gur phgrfg qbtf va gur jbeyq
console.log(rot13('abcdefghijklmnopqrstuvwxyz')); // nopqrstuvwxyzabcdefghijklm
console.log(rot13('#365DaysOfCoding')); // #365QnlfBsPbqvat
