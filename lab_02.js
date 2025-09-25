// 1. Идентификаторы
let myName = "John";              
const birthYear = 2005;           

function greet(name) {         
  console.log(`Hello, ${name}!`);
}
greet(myName);

// 2. Циклы
function range(start, end) {
  const arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
}
console.log(range(15, 30));

function rangeOdd(start, end) {
  const arr = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) arr.push(i);
  }
  return arr;
}
console.log(rangeOdd(15, 30));

// 3. Функции
function average(a, b) {
  return (a + b) / 2;
}

function square(x) {
  return x * x;
}

function cube(x) {
  return x * x * x;
}

function calculate() {
  const results = [];
  for (let i = 0; i <= 9; i++) {
    const avg = average(square(i), cube(i));
    results.push(avg);
  }
  return results;
}
console.log(calculate());

// 4. Объекты
function fn() {
  const obj1 = { name: "Object1" };
  let obj2 = { name: "Object2" };

  // изменения полей
  obj1.name = "Changed1";
  obj2.name = "Changed2";

  // ссылка на другой объект
  obj2 = obj1;

  console.log(obj1, obj2);
}
fn();

function createUser(name, city) {
  return { name, city };
}
console.log(createUser("Marcus Aurelius", "Roma"));

// 5. Коллекции
const phoneBookArray = [
  { name: "Marcus Aurelius", phone: "+380445554433" },
  { name: "Ivan Petrov", phone: "+380671234567" },
  { name: "Anna Ivanova", phone: "+380931112233" },
];

function findPhoneByName(name) {
  for (const entry of phoneBookArray) {
    if (entry.name === name) return entry.phone;
  }
  return null;
}
console.log(findPhoneByName("Ivan Petrov"));

const phoneBookHash = {
  "Marcus Aurelius": "+380445554433",
  "Ivan Petrov": "+380671234567",
  "Anna Ivanova": "+380931112233",
};

function findPhoneByNameHash(name) {
  return phoneBookHash[name] || null;
}
console.log(findPhoneByNameHash("Anna Ivanova"));
