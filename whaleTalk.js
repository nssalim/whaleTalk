// Whale Talk
// Take a phrase like 'whales are intelligent!' and translate it into its “whale talk” equivalent: 'AEEAEEIEEIEE'

// Rules to translate text to whale language:-
// There are vowels (no consonants). 
// The u‘s and e‘s are extra long, so, double them.
// Once text is converted to the whale language, the result is sung slowly, as is a custom in the ocean.

// extract array of vowels from input variable

// state text to be translated into 'whale talk'
const input = 'whales are intelligent!';
console.log('PHRASE: \n' + input)

// state vowels
const vowels = ['a', 'e', 'i', 'o', 'u'];

// storage for vowels from input string
let resultArray = [];

// iterate through each letter of the input variable text
for(let inputIndex = 0; inputIndex < input.length; inputIndex++){
  // console.log('inputIndex = ' + input[inputIndex]);

// inner loop to iterate through the vowels array each time the outer loop runs
// can check each letter of input against all the vowels elements during each iteration
// log the iterator number positions
  for(let vowel = 0; vowel < vowels.length; vowel++){
    // console.log('vowel =' + vowel);
// will see 0 through 4 repeatedly because vowels is 5 elements long

// compare the input letter to every letter in the vowels array
// whales double their e‘s and the u‘s in their language
// perform this check only once for every letter in the input
    if (input[inputIndex] === vowels[vowel]){
      if(input[inputIndex] === 'e'){
        resultArray.push('ee');
      }
      else if(input[inputIndex] === 'u'){
        resultArray.push('uu');
      }
      else{
resultArray.push(input[inputIndex]);
      }
    }
  }
}
// use console.log() and .join() to print 'whale talk'
// capitilize the array elements
console.log("\nWHALE TALK' translation: \n" + resultArray.join('').toUpperCase());;
