function isPal(str) {
  let result = "";
  for (let i = 0; i <= str.length - 1; i++) {
    result = str[i] + result;
  }
  if (result === str) {
    return true;
  } else return false;
}

function isPal(str) {
  revStr = str
    .split("")
    .reverse()
    .join("");
  if (revStr === str) {
    return true;
  } else {
    return false;
  }
}
