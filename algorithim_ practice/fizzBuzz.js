////////////  loop through numbers 1-100, for mulitiples of 3 print Fizz, for mulitiples of 5 print Buzz,
/////////////////        for multiples of 3 and 5 print FizzBuzz

function FizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else console.log(i);
  }
}
