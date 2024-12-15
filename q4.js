const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function findGCD(arr) {
  return arr.reduce((acc, num) => gcd(acc, num), arr[0]);
}

let numbers = [];

function askForNumber(index) {
  rl.question(`${index + 1}-р тоог оруулана уу : `, (input) => {
    let num = parseInt(input.trim());
    
    if (!isNaN(num)) {
      numbers.push(num);
      
      if (numbers.length === 5) {
        let result = findGCD(numbers);
        console.log("ХИЕХ = ", result);
        rl.close();
      } else {
        askForNumber(numbers.length);
      }
    } else {
      console.log("Зөвхөн тоо оруулна уу");
      askForNumber(index);
    }
  });
}

askForNumber(0);
