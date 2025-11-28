//1.

function seq(...fns) {
  return function run(x) {
    let res = x;
    for (let fn of fns) res = fn(res);
    return res;
  };
}

// Examples:
console.log(
  seq(x => x + 7, x => x * 2)(5)
); // 17

console.log(
  seq(x => x * 2, x => x + 7)(5)
); // 24

console.log(
  seq(x => x + 1, x => x * 2, x => x / 3, x => x - 4)(7)
); // 3

//'--------------------------------------------------------------'

//2.

function array() {
  const data = [];

  function a(i) {
    return data[i];
  }

  a.push = function (value) {
    data.push(value);
  };

  a.pop = function () {
    return data.pop();
  };

  return a;
}

// Example:
const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0)); // first
console.log(arr(1)); // second
console.log(arr(2)); // third

console.log(arr.pop()); // third
console.log(arr.pop()); // second
console.log(arr.pop()); // first
console.log(arr.pop()); // undefined


