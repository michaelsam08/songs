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
