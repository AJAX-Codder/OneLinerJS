/*[1].===Even Odd Number Checker===*/
const EvenOdd = (Num) => (Num % 2 == 0) ? "Even Number" : "Odd Number";

/*[2].===Factorial===*/
const Factorial = (Num) => (Num == 0) ? 1 : Num * Factorial(Num - 1);

/*[3].===Prime Number Checker===*/
const Prime = (Num, i = Math.floor(Num / 2)) => (Num % i == 0) ? "Not a Prime Number " : (i == 2) ? "Prime Number" : Prime(Num, i - 1);

/*[4].===Palindrom===*/
const Palindrom = (Num) => Num.toString().split("").reverse().join("") == Num ? "Palindrom" : "Not a Palindrom";

/*[5].===Fibonacci===*/
const Fibonacci = (Num) => Num <= 1 ? Num : Fibonacci(Num - 1) + Fibonacci(Num - 2);

/*[6].===Perfect Number===*/
const Perfect = (Num) => Array.from({ length: Num - 1 }, (_, i) => Num % (i + 1) === 0 ? i + 1 : 0).reduce((a, b) => a + b, 0) === Num ? "Perfect Number" : "Not a Perfect Number"; 1

const AnagramStr = (str1, str2) => str2.replace(new RegExp(`[^${str1}]`, 'g'), "").length === str1.length

/*[7].===Armstrong Number===*/
const Armstrong = (Num) => Num.toString("").split("").map(Number).reduce((a, b) => a + b ** Num.toString("").split("").length, 0) === Num ? "Armstrong Number" : "Not a Armstrong Number";

/*[8].===Rotate Arr===*/
const Rotate = (Arr, k) => [...Arr.slice(k), ...Arr.slice(0, k)];

/*[9].=== prefix Count===*/
/* 
    You are given an array of strings words and a string pref.
    Return the number of strings in words that contain pref as a prefix.
    A prefix of a string s is any leading contiguous substring of s.
 */
var prefixCount = (words, pref) => words.filter(word => word.slice(0, pref.length) === pref).length

/**[10].
    There are n employees in a company, numbered from 0 to n - 1. Each employee i has worked for hours[i] hours in the company.
    The company requires each employee to work for at least target hours.
    You are given a 0-indexed array of non-negative integers hours of length n and a non-negative integer target.
    Return the integer denoting the number of employees who worked at least target hours.
*/
const numberOfEmployeesWhoMetTarget = (hours, target) => hours.filter(x => x >= target).length

/**[11].
    Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, 
    return the number of negative numbers in grid.
 */
var countNegatives = (grid) => grid.flat().sort().filter((n) => n < 0).length;

/**[12].
    A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
    Given a string s, return true if it is a palindrome, or false otherwise.
 */
var isPalindrome = (s) => s.replace(/[^0-9a-zA-Z]/g, "").replaceAll(" ", "").toLowerCase() === s.replace(/[^0-9a-zA-Z]/g, "").replaceAll(" ", "").toLowerCase().split("").reverse().join("")

/**[13].
    Given a string s consisting of words and spaces, return the length of the last word in the string.
    A word is a maximal substring consisting of non-space characters only.
 */
const lengthOfLastWord = s => s.trim().split(" ").reverse()[0].length

/**[14].
    Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.

    For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".
    Return the resulting string.
*/
const reversePrefix = (word, ch) => word.indexOf(ch) == -1 ? word : word.substring(0, word.indexOf(ch) + 1).split("").reverse().join("") + word.substring(word.indexOf(ch) + 1)

/*[15].
    find Max sum excluding minimum element and Min sum excluding maximum element
*/
const miniMaxSum = (arr) => console.log(arr.sort((a, b) => a - b).reduce((a, b) => a + b) - arr[arr.length - 1], arr.reduce((a, b) => a + b) - arr[0])