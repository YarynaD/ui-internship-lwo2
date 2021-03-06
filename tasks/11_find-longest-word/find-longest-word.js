/* eslint "require-jsdoc": 0 */

export function findLongestWord(str) {
  let longestWord = str.split(' ').reduce(function(longest, currentWord) {
    return currentWord.length > longest.length ? currentWord : longest;
  }, ' ');
  return longestWord.length;
}
