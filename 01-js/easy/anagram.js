/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let hash = {};
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  if (str1.length != str2.length){
    return false;
  }

  for (let char of str1){
    if(char in hash){hash[char] += 1;}
    else{hash[char] = 1;}
  }
  for (let char of str2){
    if(char in hash){hash[char] -= 1;}
    else{hash[char] = 1;}
  }
  
  for(char of str1){
    if(hash[char] != 0){return false;}
  }
  return true;
}
module.exports = isAnagram;
