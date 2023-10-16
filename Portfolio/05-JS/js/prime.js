/*
    Prime Factorization - Have the user enter a number and find
    all Prime Factors (if there are any) and display them.
*/

var getPrimeFactors = function () {
  "use strict";
  var n = document.getElementById("num").value;

  function isPrime(n) {
    var i;

    for (i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }

  var i=2, sequence = []; 

  //TODO: Check which numbers are factors of n and also check if
  // that number also happens to be a prime

  if(isPrime(n)){
    sequence= "El numero es primo"
  }else{
    while (n>1){
      while(n%i===0){
        n=n/i
        sequence.push(i)
      }
      i++
    }
  }

  console.log(sequence);
};

// the prime factors for this number are: [ 2, 3, 5, 7, 11, 13 ]
// console.log(getPrimeFactors(30030));
