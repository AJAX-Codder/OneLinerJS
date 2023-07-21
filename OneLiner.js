let Num = 153;

/*===Even Odd Number Checker===*/
const EvenOdd = (Num) => (Num % 2 == 0) ? "Even Number" : "Odd Number";

/*===Prime Number Checker===*/
const Prime = (Num, i = Math.floor(Num / 2)) => (Num % i == 0) ? "Not a Prime Number " : (i == 2) ? "Prime Number" : Prime(Num, i - 1);

/*===Palindrom===*/
const Palindrom = (Num) => Num.toString().split("").reverse().join("") == Num ? "Palindrom" : "Not a Palindrom";

/*===Fibonacci===*/
const Fibonacci = (Num) => Num <= 1 ? Num : Fibonacci(Num - 1) + Fibonacci(Num - 2);

/*===Perfect Number===*/
const Perfect = (Num) => Array.from({ length: Num - 1 }, (_, i) => Num % (i + 1) === 0 ? i + 1 : 0).reduce((a, b) => a + b, 0) === Num ? "Perfect Number" : "Not a Perfect Number";