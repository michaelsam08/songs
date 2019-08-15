function findMaxChar(str) {
  const charObject = {};
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (charObject[str[i]]) {
      charObject[str[i]] = charObject[str[i]] + 1;
    } else charObject[str[i]] = 1;
  }
  return charObject;
}

function solution(int) {
  if (int % 3 === 0) {
    int - 1;
  } else {
    if (int % 2 === 0) {
      int / 2;
    }
  }
}
