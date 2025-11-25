//1.

//For cycle

const sumFor = (...numbers) => {
    let total = 0
    for(let i = 0; i < numbers.length; i++){
     total += numbers[i]   
    }
    return (total)
}

const a = sumFor(1, 2, 3) // a === 6
const b = sumFor(0) // b === 0
const c = sumFor() // c === 0
const d = sumFor(1, -1, 1) // d === 1
const e = sumFor(10, -1, -1, -1) // e === 7

//------------------------------------------------
//For of cycle

const sumForOf = (...numbers) => {
    let total = 0
    for(const num of numbers) {
        total += num
    }
    return (total)
}

const f = sumForOf(1, 2, 3) // f === 6
const g = sumForOf(10, 54, 67) // g === 131

//------------------------------------------------
//While cycle

const sumWhile = (...numbers) => {
    let total = 0
    let i = 0
    while (i < numbers.length){
        total += numbers[i]
        i++
    }
    return total
}

const h = sumWhile(43, 12, -98) // h === -43
const i = sumWhile(-29, 85, 47) // i === 103

//------------------------------------------------
//Do while cycle

const sumDoWhile = (...numbers) => {
    let total = 0
    let i = 0
    do {
        total += numbers[i]
        i++
    }while (i < numbers.length)
    return total
}

const j = sumDoWhile(1, 2, 3) // j === 6
//------------------------------------------------
//Reduce cycle

const sumReduce = (...numbers) => {
    return numbers.reduce((acc, el) => el + acc, 0)
}

const k = sumReduce(1, 2, 3) // k === 6
//------------------------------------------------


//2.
const max = (arr) => {
    let maxNum = -Infinity

    for(const row of arr){
        for(const num of row){
            num > maxNum 
            ? maxNum = num 
            : maxNum
        }
    }
    return maxNum
}

const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m); // 9

const z = max([
  [-5, -10],
  [-3, -7]
]) // -3

console.log(z)
//------------------------------------------------


//3.
const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
}

function ages(obj) {
    const personAge = {}

    for(key in obj){
        personAge[key] = obj[key].died - obj[key].born
    }

    return personAge
}

console.log(ages(persons));
// {
//   lenin: 54,
//   mao: 83,
//   gandhi: 79,
//   hirohito: 88,
// }
