////////////// pass in a string "i love austin"  and capitalize 1st letter of each word //////////
function capLetters(str) {
  ///// make sure the string is all lowercase to begin and then split into an array
  str2arr = str.toLowerCase().split(" ");
  for (let i = 0; i < str2arr.length; i++) {
    /////////  looping through str2arr : [ i  ,    love   ,  austin], use substring and say position 0 , though 1, make uppercase, then
    ///  add the rest of the word from that postion 1
    str2arr[i] =
      str2arr[i].substring(0, 1).toUpperCase() + str2arr[i].substring(1);
  }
  return str2arr.join(" ");
}



////////// using map////////////
function capLetters (str){
str
.toLowerCase()
.split(' ')
.map ( word => word[0].toUpperCase()= word.substring(1))
.join(" ");

}