/*
    Fibonacci Sequence - Enter a number and have the program
    generate the Fibonacci sequence to that number or to the Nth number.
*/
// This array will keep memory of the previous fibonacci numbers
var memo = {};
function fibonacci() {
  "use strict";
  var n = document.getElementById("num").value;
  var val = f(n);
  console.log(memo);
  return val;
}

function f(n) {
  var value=[];
  // Check if the memory array already contains the requested number
  if (memo.hasOwnProperty(n)) {
    value = memo[n];
    console.log(value)
  } else {  
    //TODO: Implement the fibonacci function here!
    n1=0;
    n2=1
    for(var x=0;x<n;x++){
      console.log(n1);
      value.push(n1)
      next = n1 + n2;
      n1 = n2;
      n2 = next;
    }
    memo[n] = value;
  }

  return value;
}
console.log(fibonacci(15));
