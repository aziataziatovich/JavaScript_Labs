// 1. pipe: left-to-right composition
function pipe(...fns) {
  if (!fns.length) {
    throw new Error('pipe requires at least one function');
  }

  for (const fn of fns) {
    if (typeof fn !== 'function') {
      throw new TypeError('pipe expects functions only');
    }
  }

  return function (input) {
    return fns.reduce((acc, fn) => fn(acc), input);
  };
}

// Examples:
const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f1 = pipe(inc, twice, cube);
console.log(f1(5)); // 1728

const f2 = pipe(inc, inc);
console.log(f2(7)); // 9

// const f3 = pipe(inc, 7, cube); // throws immediately

//'---------------------------------------------------------------------------------'

// 2. Right-to-left composition with error suppression
function composeSafe(...fns) {
  const list = fns.slice().reverse();

  for (const fn of list) {
    if (typeof fn !== 'function') {
      throw new TypeError('composeSafe expects functions only');
    }
  }

  const listeners = { error: [] };

  function composed(input) {
    let value = input;

    try {
      for (const fn of list) {
        value = fn(value);
      }
      return value;
    } catch (err) {
      // notify listeners, ignore their own errors
      for (const handler of listeners.error) {
        try {
          handler(err);
        } catch (_) {}
      }
      return undefined;
    }
  }

  composed.on = function (eventName, handler) {
    if (eventName === 'error' && typeof handler === 'function') {
      listeners.error.push(handler);
    }
    return composed;
  };

  return composed;
}

// Example:
const safe = composeSafe(cube, twice, inc);

safe.on('error', e => {
  console.log('Caught error:', e.message);
});

console.log(safe(2)); // 216

const safeWithError = composeSafe(
  x => x + 1,
  () => {
    throw new Error('boom');
  },
  x => x * 10
);

safeWithError.on('error', e => {
  console.log('Second handler:', e.message);
});

console.log(safeWithError(5)); // undefined, error handlers called
