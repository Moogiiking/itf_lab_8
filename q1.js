function isPalindrome(num) {
    const str = num.toString();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

function sumOfDigits(number) {
    let sum = 0;
    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    return sum;
}

function isSumOfDigitsPalindrome(number) {
    const sum = sumOfDigits(number);
    return isPalindrome(sum);
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Тоогоо оруулна уу: ", (input) => {
    const inputNumber = parseInt(input, 10);
    if (isSumOfDigitsPalindrome(inputNumber)) {
        console.log(`${inputNumber} тоонуудын нийлбэр палимдром МӨН байна.`);
    } else {
        console.log(`${inputNumber} тоонуудын нийлбэр палимдром БИШ байна.`);
    }
    rl.close();
});
