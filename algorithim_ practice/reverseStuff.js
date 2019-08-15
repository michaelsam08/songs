////// reverse a string ////////
//str = "hello";   //  "olleh"
//////// option 1
function reverseString(str) {
  str2arr = str.split("");
  revArr = str2arr.reverse();
  reversedArr2str = revArr.join("");
  return reversedArr2str;
}

///////////option 2
function reverseString(str) {
  let result = "";
  for (let i = 0; i <= str.length - 1; i++) {
    result = str[i] + result;
  }
  return result;
}

/////////////////////////////////////////////  reverse integer  ////////////////////////////////////
function revInt(int) {
  //////// turn integers in to a string of integers, then slpit, then reverse  !!!!!!!!!!!!!!!! ///////////////
  const newInt = int
    .toString()
    .split("")
    .reverse()
    .join("");
  /////////// parseInt turns the sring of ints back into a regular integer
  return parseInt(newInt);
}
