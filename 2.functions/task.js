'use strict'

// Задание 1
function getArrayParams(arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  avg = parseFloat((sum / arr.length).toFixed(2));
  return { min:min, max:max, avg:avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    let arrSum = func(arrOfArr[i]);
    if (arrSum > max) {
      max = arrSum;
    }
  }
  return max;
}
/* при отладке кода в браузере представлены другие массивы, нежели те что записаны в автотестах:
console.log(makeWork([[10,10,20],[20,19,10]],worker)); =>49  вместо 15
console.log(makeWork([[12,23,31],[41,5,61]],worker));  =>107 вместо 31
console.log(makeWork([[14,21,36],[15,26,39]],worker)); =>80  вместо 0
*/

// Задание 3
function worker2(arr) {
  return getArrayParams(arr).max - getArrayParams(arr).min;
}
