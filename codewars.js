
// Given a random number count the sheep and the integer cant be negative.
/*
var countSheep = function (num){
  const sheep = 'sheep...'
  let string = '';
  for(let i = 1; i <= num; i++){
     string += `${i} ${sheep}`;
  }
    return string;
}

console.log(countSheep(3));
*/
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.


function sumMix(x){
   const arr = x.map(i => {
      if(typeof i === 'string'){
          return parseInt(i);
      }else if (typeof i !== 'string'){
          return i;
      }
     })
  const sum = arr.reduce((total,num) => total + num);
   return sum;
}

sumMix([9, 3, '7', '3']);

//Your goal is to return multiplication table for number that is always an integer from 1 to 10.

// For example, a multiplication table (string) for number == 5 looks like below:
/*
1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
10 * 5 = 50
*/ 

function multiTable(number) {
   let res = [];
   let arr = [];
   for(let i = 1; i <= 10; i++){
      res = i * number;
      arr.push(`${i} * ${number} = ${res}`)  
   }
   const x = arr.toString().replace(/,/g,'\n');
   return x;
}

// console.log(multiTable(5));

/* Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string):

Example: (Input1, Input2 -->Output)

"4",  "5" --> "9"
"34", "5" --> "39"*/


function sumStr(a,b) {
  return String(Number(a)+Number(b));
}

console.log(sumStr("",""));
