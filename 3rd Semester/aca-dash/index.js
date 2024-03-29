
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//create a function called `map`, it should take 2 parameters `array` and `iteratee`
//`array` must be an array
//`iteratee` must be a function that takes one parameter and returns a bool
//The point of the javascript map function is to take an array and return different array with the exact same number of items in it
//The items will be whatever the function `iteratee` creates
//in the map function create a new empty array and store in a variable named whatever you want (myNewArray)
//loop array and extract the single item from the array per loop and store it in a variable
//on each loop call iteratee() passing in the item from the current loop into the call to iteratee()
//iteratee is a function that must return something, capture whatever it returns in a variable
//add the returned value from iteratee tp myNewArray
//after looping, return  myNewArray

// function map(array, iteratee){

// }
const arr = [1, 2, 3, 4, 5];

function map(arr, iteratee) {
  const newArray = [] // 1
  for (let i = 0; i < arr.length; i++) { // 2
    newVal = iterate(arr[i])
    newArray.push(newVal)
  }
  return newArray // 3
}

map(arr, (item) => {
  return item * 2
})
 

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//create a function called `filter`, it should take 2 parameters `array` and `iteratee`
//`array` must be an array
//`iteratee` must be a function that takes one parameter and returns a bool
//in the map function create a new empty array and store in a variable named whatever you want (myNewArray)
//loop `array` and call iteratee for each thing in the array, 
//     passing in the item from the current loop
//iteratee will return true or false, if true add the item to myNewArray else do not
//after looping, return myNewArray
cosnt names= ['michael', 'james', 'julia', 'mike', 'jame', 'jul']
const myNums = [1, 2, 3, 4, 5]
function findThree (name) {
  return name.length ===3;
}
function filter(array, fnc){
  const newArray = []
  for (let i =0; i < array.length; i++){
    if(fnc(array[i])) {
    newArray.push(array[i]);
    }
  }
return newArray;
}
let result = filter(names,(names)=>{names.length===3});

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
//create a function called `find`, it should take 2 parameters `theArray` and `fnc`
//loop theArray and call the fnc for each thing in the array, 
//     passing in the item from the current loop
//fnc will return true or false, if true return the item 
//after looping, return null
const arr = ['a','b', 'c', 'd']

function find (arr, func){
//const found = [], was not necessary
for (let i=0; i< arr.length; i++)
if (func(arr[i])){
  return arr[i]
}
return null
}
find(arr, (item) =>{
  if (item === 'b'){
    return true 
  }else {
    return false
  }
  })
const arr = ['a','b', 'c', 'd']

function find (arr, func){
//const found = []
for (let i=0; i< arr.length; i++)
if (arr[i]==='b'){
  return 'b'
} 
return null

}
find(arr)

//return the last item in theArray
const theArray = ['a','b', 'c', 'd']
function findLast(theArray){
for (let i=0; i< theArray.length-1; i++)
  return theArray[theArray.length-1]
}



//return the first element of the array
const theArray = ['a','b', 'c', 'd']
function findFirst(theArray){
  return theArray[0] 
}


//create a new array
//loop theArray in reverse order
//add the item from each loop to the new array
//return the new array
let theArray = [3, 5, 9, 11];

function reverse(theArray) {
let myNewArray = [];
for (let i = theArray.length - 1; i >= 0; i--) {
myNewArray.push(theArray[i])

}
return myNewArray
}
reverse(theArray);

//create a new array
//loop theArray
//add the item from each loop to the new array except the first item
//return the new array
function tail(theArray){

}

//implement the most basic sorting algorithm there is
//assume the array will always have numbers
//use a while loop to constantly loop theArray until it is sorted
//use a for loop to loop theArray
//look at the current item and the next item, compare them
//if the items are out of order, swap them
//initialize a variable that indicates if a swap had to be done, set it to false
//if a swap is done set it to true
//after each for loop check the variable, if true, continue the while loop
//if false return theArray
let numbers = [11, 20, 5, 91, 13, 11];

function sort(numbers) {
let sorted = false;
while (sorted === false) {
sorted = true;
for (let i = 0; i < numbers.length - 1; i++) {
if (numbers[i] > numbers[i + 1]) {
sorted = false
let temp = numbers[i]
numbers[i] = numbers[i + 1]
numbers[i + 1] = temp;
}
}

}
return numbers
}
sort(numbers);


exports.map = map;
exports.filter = filter;
exports.find = find;
exports.head = head;
exports.reverse = reverse;
exports.tail = tail;
exports.sort = sort;
exports.findLast = findLast;