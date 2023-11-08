console.log(true + undefined);
console.log(true + NaN);
console.log(true + null);
console.log(null && undefined);
console.log(!!(null && undefined));
for (let key in { 1: 1, 0: 0 }) {
  console.log(key);
}
let a = new Array(1, 2),
  b = new Array(3);
console.log(a[0] + b[0]);
console.log(test);
if (true) {
  var test = true; // используем var вместо let
}

function sayHi() {
  phrase = "Привет";

  console.log(phrase);

  var phrase;
}
sayHi();
// true, переменная существует вне блока if
function sayHi() {
  phrase = "Привет"; // (*)

  if (false) {
    var phrase;
  }

  alert(phrase);
}
sayHi();

let nums = [0, 1, 4, 6, 8, 10, 12];
const targ = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  // console.log(end, "end");
  // console.log(start, "start");
  while (end > start) {
    // console.log(end, "end");
    let middle = Math.floor((end + start) / 2);
    // console.log(middle, "middle");
    if (arr[middle + 1] === target) {
      return middle + 1;
    }
    // console.log();
    if (target < arr[middle + 1]) {
      // console.log("  end = middle;");
      end = middle + 1;
    } else {
      // console.log(" start = middle;");
      start = middle;
    }
  }
  return start;
// };
//
// console.log(targ(nums), "targ");
//
// function f(arr, target) {
//   let start = 0;
//   let end = arr.length - 1;
//   const rekursia = (arr, target, start, end) => {
//     let middle = Math.floor((start + end) / 2);
//     if (target === arr[middle]) {
//       return middle;
//     }
//     if (start === end) {
//       return -1;
//     }
//     if (target < arr[middle]) {
//       return rekursia(arr, target, start, middle);
//     }
//     if (target > arr[middle]) {
//       return rekursia(arr, target, middle + 1, end);
//     }
//   };
//   return rekursia(arr, target, start, end);
// }
//
// console.log(f(nums, 12), "rekursia");
// const targa = (arr, target) => {
//   let start = 0;
//   let end = arr.length - 1;
//
//   while (start <= end) {
//     let middle = Math.floor((start + end) / 2);
//
//     if (arr[middle] === target) {
//       return middle; // Найден элемент
//     }
//
//     if (arr[middle] < target) {
//       start = middle + 1;
//     } else {
//       end = middle - 1;
//     }
//   }
//
//   return -1; // Элемент не найден
// };

// const nums1 = [1, 2, 3, 4, 5, 6, 7];
// const target = 5;
// const index = targa(nums1, target);
// console.log(index); // Выведет индекс элемента 3 в массиве
  let name = "jonh";

function f() {
  let name = "xaxa";
  console.log(name);
}

name = "slava";

f();
