// 1. 
function iterate(object, callback) {
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      callback(key, object[key], object);
    }
  }
}
//------------------------------------------------

// 2. 
function store(value) {
  return function read() {
    return value;
  };
}

//------------------------------------------------


// 3.
function contract(fn, ...types) {
  if (typeof fn !== 'function') {
    throw new TypeError('First argument must be a function');
  }
  if (types.length === 0) {
    throw new TypeError('Types are required');
  }

  const argTypes = types.slice(0, -1);
  const resultType = types[types.length - 1];

  function checkType(value, Type) {
    if (Type === Number) return typeof value === 'number';
    if (Type === String) return typeof value === 'string';
    if (Type === Boolean) return typeof value === 'boolean';
    if (Type === Function) return typeof value === 'function';
    if (Type === Array) return Array.isArray(value);
    return value instanceof Type;
  }

  return function (...args) {
    if (args.length !== argTypes.length) {
      throw new TypeError('Invalid arguments count');
    }

    for (let i = 0; i < argTypes.length; i++) {
      if (!checkType(args[i], argTypes[i])) {
        throw new TypeError('Argument type mismatch at index ' + i);
      }
    }

    const result = fn(...args);

    if (!checkType(result, resultType)) {
      throw new TypeError('Result type mismatch');
    }

    return result;
  };
}
//------------------------------------------------
