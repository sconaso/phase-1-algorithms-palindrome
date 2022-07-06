function isPalindrome(word) {
  let wordArray = word.split('')
  let arrayLength = wordArray.length
  let decrement = 1
  let answer = true

  // console.log('wordArray ', wordArray)
  // console.log('arrayLength ', arrayLength)

  for (let n = 0; n < arrayLength; n++ ) {
    // console.log('decrement ', decrement)
    // console.log(wordArray[n])
    // console.log(wordArray[arrayLength - decrement])

    if (wordArray[n] !== wordArray[arrayLength - decrement]){
      answer = false;
    }

    // console.log('answer ', answer)
    decrement++

  }
  return answer
}

/* 
  PSUEDOCODE
  Break apart the string into an array, with each element being an individual letter
  Determine array length
  Define a decrease counter, starting at 1
  Set the default answer to true
  Run a for loop, comparing the first element [0] with the last element of the array [n-decrease counter]
  Increment the decrease counter by one
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("noon"))

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("noun"));

}

module.exports = isPalindrome;
