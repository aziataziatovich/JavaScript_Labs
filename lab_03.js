//1 
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(random(1, 10)); // число от 1 до 10




//2 
function generateKey(length, characters) {
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = random(0, characters.length - 1);
    result += characters[randomIndex];
  }
  return result;
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
console.log(generateKey(16, characters));


//3
function ipToNumber(ip = '127.0.0.1') {
  return ip.split('.')
    .map(Number)
    .reduce((acc, byte, index) => acc + (byte << ((3 - index) * 8)), 0);
}

console.log(ipToNumber('127.0.0.1'));  // 2130706433
console.log(ipToNumber('10.0.0.1'));   // 167772161
console.log(ipToNumber('192.168.1.10')); // -1062731510
console.log(ipToNumber('255.225.133.10')); // -1511946858
console.log(ipToNumber('8.8.8.8')); // 134744072



//4
function introspect(iface) {
  return Object.entries(iface)
    .filter(([key, value]) => typeof value === 'function')
    .map(([key, value]) => [key, value.length]);
}

const iface = {
  m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  }
};

console.log(introspect(iface));
// [ ['m1', 1], ['m2', 2], ['m3', 3] ]


