
function inc(n) {
    return n + 1;
}

const a = 5;
const b = inc(a);
console.log({a, b}); // a=5, b=6


function incObj(num) {
    num.n = num.n + 1;
}

const obj = { n: 5 };
incObj(obj);
console.log(obj); // { n: 6 }







let arr = [
    true, 'hello', 5, 12, -200, false, false, 'word', 
    null, undefined, { x: 1 }, [1,2,3], 3.14
];


let types = {
    number: 0,
    string: 0,
    boolean: 0,
    object: 0,
    undefined: 0
};


for (let el of arr) {
    let t = typeof el;
    if (!(t in types)) {
        types[t] = 0;
    }
    types[t]++;
}

console.log(types);
