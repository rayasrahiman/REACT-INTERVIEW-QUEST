//40
const objj = {};
const obj2 = { name: "rayas" };
const obj3 = { name: "rahiman" };

const key1 = JSON.stringify(obj2); // or use Symbol('rayas')
const key2 = JSON.stringify(obj3);

objj[key1] = "harsh";
objj[key2] = 48;

console.log(objj[JSON.stringify(obj2)]); // OUTPUT: "harsh"

//39
console.log([1, 2, 3] + [4, 5, 6]); //1,2,34,5,6

console.log(typeof null); //object

var xz = 1;
function print() {
  console.log(xz);
  var xz = 2;
}

print(); //undefined
//38
const flatThisArr = [0, 1, [2, [3, [4, 5]]]];

const flattenOutput = [];

function flatenArr(a) {
  for (let i = 0; i < a.length; i++) {
    if (Array.isArray(a[i])) {
      flatenArr(a[i]);
    } else {
    }
  }
}

flatenArr(flatThisArr);
console.log(flattenOutput); //[ 5, 4, 3, 2, 1, 0 ]
//37
const obj = {
  one: 1,
  two: {
    three: 3,
  },
  four: {
    five: 5,
    six: {
      seven: 7,
    },
    eight: 8,
  },
  nine: 9,
};

function flattenObject(obj, parentKey = "", result = {}) {
  for (let [key, val] of Object.entries(obj)) {
    const newKey = parentKey ? `${parentKey}.${key}` : key;
    if (val && typeof val === "object" && !Array.isArray(val)) {
      flattenObject(val, newKey, result);
    } else {
      result[newKey] = val;
    }
  }
  return result;
}

const output = flattenObject(obj);
console.log(output);

//OUTPUT:
// {
//   one: 1,
//   'two.three': 3,
//   'four.five': 5,
//   'four.six.seven': 7,
//   'four.eight': 8,
//   nine: 9
// }
//36
let ab = [1, 2, 3];

let ba = [...ab];

ba.push(4);

console.log(ab, ba); // [ 1, 2, 3 ] [ 1, 2, 3, 4 ]

ab[10] = 99;

console.log(ab.length); // 11

//35
typeof isNaN; //NUMBER

//34
const reduceStr = "a.b.c.d.e";

const splitStr = reduceStr.split(".");

// console.log(splitStr)

const objSplit = splitStr.reduceRight((acc, next) => {
  return { [next]: acc };
});

console.log(JSON.stringify(objSplit));

//33
const arrObj = [
  { id: 1, name: "rayas", designation: "Software engineer" },
  { id: 2, name: "abdul", designation: "data analysts" },
  { id: 3, name: "rahiman", designation: "business analyts" },
];

function filterObj(input) {
  const filterItem = arrObj.filter((item) => item.name === input);
  return filterItem;
}

console.log(filterObj("rayas"));

//32
const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

const mapObj = {};

function anagrams(str) {
  let map = {};

  for (let i = 0; i < str.length; i++) {
    const word = str[i];
    const sorted = word.split("").sort().join("");

    if (map[sorted]) {
      map[sorted].push(word);
      // console.log(map)
    } else {
      map[sorted] = [word];
    }
  }
  return Object.values(map);
}

console.log(anagrams(strs));
//31
//SPLIT USING FOR LOOP

const splitName = "rayas abdul rahiman razz";

const words = [];
let word = "";

for (let i = 0; i < splitName.length; i++) {
  if (splitName[i] === " ") {
    words.push(word);
    word = "";
  } else {
    word += splitName[i];
  }
}

if (word) {
  words.push(word);
}

console.log(words);

//30
//FIND SECOND LARGEST NUMBER
const a1 = [10, 11, 15, 10, 12, 15];

const aa = [];
for (let i = 0; i < a1.length; i++) {
  for (let j = 0; j < a1.length - i - 1; j++) {
    if (a1[j] < a1[j + 1]) {
      let temp = a1[j];
      a1[j] = a1[j + 1];
      a1[j + 1] = temp;
    }
  }
}

console.log(a1);

for (let i = 0; i < a1.length; i++) {
  if (a1[i] !== a1[i + 1]) {
    aa.push(a1[i]);
  }
}

console.log(aa[1]);
//29
const [x, z, ...y] = [1, 2, 3, 4];

console.log(x, y, z);

//28
//Sum of two numbers: PURE FUNCTION (NO Side Effects)

function calculateSum(a, b) {
  console.log(a + b);
}

calculateSum(2, 3);

//Sum of two numbers: IMPURE FUNCTION (WITH Side Effects)

let imp = 0;

function xyz(a, b) {
  imp = a + b;
  console.log(imp);
}

xyz(3, 3);

//Max Number in an array
const arr = [1, 10, 5, 3, 12, 6];

function findMaxNum(arr) {
  console.log(Math.max(...arr));
}

findMaxNum(arr);

///27
//reverse a given String using for loop

const str1 = "rayas";
let reverse1 = "";
function reverseTheStr(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    reverse1 += str[i];
  }
}
reverseTheStr(str1);
console.log(reverse1);

//using reverse method

let reverse2 = str1.split("").reverse().join("");
console.log(reverse2);

//26
//Palindrome

function palindrome(str) {
  let reverseStr = str.split("").reverse().join("");
  if (reverseStr === str) {
    console.log(str, "palindrome");
  } else {
    console.log(str, "not palindrome");
  }
}

palindrome("racecar");
//25
//Prime numbers

const primeArr = [1, 3, 2, 6, 8, 10, 5];

const prime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const primeNumbers = primeArr.filter(prime);

console.log(primeNumbers);

//24
for (let i = 1; i <= 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}

//23 WITHOUT USING FLAT
const arrOfArr = [1, [2, 3], 4, [5, [6, 7]], 8, 9, [10]];

const arrOfArr1 = [];

function flatArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (
      typeof arr[i] === "object" &&
      typeof arr[i] !== "null" &&
      typeof arr[i].length === "number"
    ) {
      flatArray(arr[i]);
    } else {
      arrOfArr1.push(arr[i]);
    }
  }
}

flatArray(arrOfArr);
console.log(arrOfArr1);

//22 ANAGRAM => BOTH WORDS CONTAIN SIMILAR LETTERS
function anagram(str1, str2) {
  str1 = str1.toLowerCase().split("").sort().join("");
  str2 = str2.toLowerCase().split("").sort().join("");
  if (str1 === str2) {
    console.log("ANAGRAM");
    return true;
  } else {
    console.log("NOT ANAGRAM");
    return false;
  }
}

anagram("listen", "silent");
//21
//isogram => NO LETTER IS REPEATED
function isogram(str) {
  str = str.toLowerCase();
  let seen = new Set();
  for (let i = 0; i < str.length; i++) {
    if (seen.has(str[i])) {
      return false;
    } else {
      seen.add(str[i]);
    }
  }
  return true;
}

console.log(isogram("Dermatoglyphics"));
//20
Promise.resolve().then(() => {
  console.log("HELLO");
});

function cons() {
  console.log("FUNC CONSOLE");
}
cons();

Promise.resolve().then(() => {
  console.log("Promise 1");
  setTimeout(() => console.log("Promise Timeout"), 0);
});

setTimeout(() => {
  console.log("1");
  setTimeout(() => console.log("2"), 0);
}, 0);

setTimeout(function () {
  console.log("TIMEOUT");
}, 0);

//1. FUNC CONSOLE;
//2. HELLO
//3. Promise 1
//4. 1
//5. TIMEOUT
//6. Promise Timeout
//7.

console.log("10" + (3 + 2)); //105
console.log("10" + 3 + 2); //1032
console.log("1" - -(-"1"), "ANSWER"); //0

//19
const missingNum = [2, 4, 5, 6, 7, 8, 9, 10];
const missingNumArr = [];

for (let i = 1; i < 10; i++) {
  if (!missingNum.includes(i)) {
    missingNumArr.push(i);
  }
}

console.log(missingNumArr, "MISSING NUMBERS");
//18
let a = 10;
let b = 5;

a = a + b; //15
b = a - b; // 10
a = a - b; // 5

console.log(`a: ${a}`, `b: ${b}`);

//17
let vowelArray = [
  "w",
  "t",
  "d",
  "y",
  "i",
  "o",
  "o",
  "p",
  "p",
  "h",
  "j",
  "g",
  "f",
];

function findVowelsIdx(a) {
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < a.length; i++) {
    if (vowels.includes(a[i])) {
      console.log({
        index: i,
        value: a[i],
      });
    }
  }
}

findVowelsIdx(vowelArray);
//16
let lastIndexArr = [1, 4, 0, 6, 7, 8, 0, 3, 4, 0, 0, 0, 0];

let lastIDX = -1;

for (let i = 0; i < lastIndexArr.length; i++) {
  if (lastIndexArr[i] !== 0) {
    lastIDX = i;
  }
}

console.log(lastIDX);

//15
const inputStr = "Javascript Programming";

const lowerInput = inputStr.toLowerCase();

const countObj = {};
const arrCount = {};

for (let count of lowerInput) {
  if (count !== " ") {
    countObj[count] = (countObj[count] || 0) + 1;
  }
}

// console.log(countObj)

for (let count in countObj) {
  if (countObj[count] > 1) {
    arrCount[count] = countObj[count];
  }
}

console.log(arrCount);
const characterToFind = "a";
const keys = Object.keys(arrCount);

if (keys.includes(characterToFind)) {
  console.log(true);
  console.log(
    `The character '${characterToFind}' appears ${arrCount.a} times.`
  );
}
//14
const sortNum = 1234;

let n = sortNum;
const digit = [];

while (n > 0) {
  digit.unshift(n % 10);
  n = Math.floor(n / 10);
}

// console.log(digit);

for (let i = 0; i < digit.length; i++) {
  for (let j = 0; j < digit.length; j++) {
    if (digit[j] < digit[j + 1]) {
      let temp = digit[j];
      digit[j] = digit[j + 1];
      digit[j + 1] = temp;
    }
  }
}

console.log(digit);
//13
const strArray = ["z", "e", "a", "c"];

for (let i = 0; i < strArray.length; i++) {
  for (let j = 0; j < strArray.length; j++) {
    if (strArray[j] > strArray[j + 1]) {
      let temp = strArray[j];
      strArray[j] = strArray[j + 1];
      strArray[j + 1] = temp;
    }
  }
}

console.log(strArray);

//12
function outer(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(outer(1)(2)(3));
//11
function curryingSum(a) {
  let total = a;
  function inner(b) {
    if (b !== undefined) {
      total += b;
      return inner;
    } else {
      return total;
    }
  }
  return inner;
}

console.log(curryingSum(1)(2)(3)(4)());
//10
const strArr = ["(", "(", "(", ")", ")", ")", ")"];

function isBalanced(strArr) {
  const stack = [];

  for (let bracket of strArr) {
    if (bracket === "(") {
      stack.push(bracket);
      console.log(stack, "PUSH");
    } else if (bracket === ")") {
      if (stack.length === 0) {
        console.log("NOT BALANCED BRACKET");
        return false;
      }
      stack.pop();
      console.log(stack, "POP");
    }
  }
  const result =
    stack.length === 0 ? "BALANCED BRACKET" : "NOT BALANCED BRACKET";
  console.log(result);
  return stack.length === 0;
}
isBalanced(strArr);

//9
function fibo(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];

  memo[n] = fibo(n - 1, memo[n]) + fibo(n - 2, memo[n]);

  return memo[n];
}

console.log(fibo(10));
//8
function twoSum(n, target) {
  const sum = [];
  for (let i = 0; i < n.length; i++) {
    for (let j = i; j < n.length; j++) {
      if (n[i] + n[j] === target && i !== j) {
        sum.push(i);
        sum.push(j);
      }
    }
  }
  return sum;
}

console.log(twoSum([2, 7, 11, 15], 9));
//7
const arrNum = [1, 2, 3, 4, 5, 6, 10, 8, 9];

const objNum = {};

arrNum.forEach((val, index) => {
  objNum[`key${index}`] = val;
});

console.log(objNum);
//6
function lengthOfLongestSubstring(s) {
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    let seen = new Set();
    let currentLength = 0;
    for (let j = i; j < s.length; j++) {
      if (seen.has(s[j])) break;
      seen.add(s[j]);
      currentLength++;
      maxLength = Math.max(maxLength, currentLength);
    }
  }
  return maxLength;
}

console.log(lengthOfLongestSubstring("aaabbbbsbcc"), "MAX LENGTH");
//5
function fibonacciSeries(limit) {
  let a = 1;
  let b = 1;
  console.log(a);
  console.log(b);
  for (let i = a + b; i < limit; i = a + b) {
    console.log(i);
    a = b;
    b = i;
  }
}

console.log(fibonacciSeries(500));
//4
const user = [
  { id: 1, name: "rayas" },
  { id: 2, name: "rahiman" },
];
const userData = [
  { refId: 1, address: "mangalore" },
  { refId: 2, address: "bangalore" },
];

const uniqueID = [{ refId: 2 }];

const users = [];

const idMatch = [];

for (let i = 0; i < user.length; i++) {
  for (let j = i; j < userData.length; j++) {
    if (
      user[i].id === userData[j].refId &&
      !users.find((el) => el.value === user[i])
    ) {
      const address = userData[j].address;
      users.push({
        ...user[i],
        address,
      });
    }
  }
}

console.log(users);

for (let i = 0; i < user.length; i++) {
  for (let j = 0; j < uniqueID.length; j++) {
    if (user[i].id === uniqueID[j].refId) {
      idMatch.push(user[i]);
    }
  }
}

console.log(idMatch);

//3
var objSum = {
  a: 1,
  c: 2,
  b: 3,
  z: 26,
};

const sumObj = Object.values(objSum).reduce((a, b) => a + b);
console.log(sumObj);

//2
const strNum = "razz1234";

let name = "";
let number = "";
let seenName = new Set();
let seenNum = new Set();

for (let i = 0; i < strNum.length; i++) {
  if (isNaN(strNum[i])) {
    if (!seenName.has(strNum[i])) {
      name += strNum[i];
      seenName.add(strNum[i]);
    }
  } else {
    if (!seenNum.has(strNum[i])) {
      number += strNum[i];
      seenNum.add(strNum[i]);
    }
  }
}

console.log(name);
console.log(number);
console.log(seenName);
console.log(seenNum);

//1
const arrIndVal = [1, 5, 2, 3, 3, 2, 5, 3, 4];

const arr1 = [];

for (let i = 0; i < arrIndVal.length; i++) {
  const firstInd = arrIndVal.findIndex((el) => el === arrIndVal[i]);
  // console.log(firstInd, "&&", arrIndVal[i])
  if (firstInd !== i && !arr1.find((el) => el.value === arrIndVal[i])) {
    arr1.push({ index: firstInd, value: arrIndVal[i] });
  }
}

console.log(arr1);
