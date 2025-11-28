// 1. 
function removeElement(array, item) {
  const index = array.indexOf(item);
  if (index !== -1) {
    array.splice(index, 1);
  }
}

// 2. 
function removeElements(array, ...items) {
  items.forEach(item => removeElement(array, item));
}

// 3. 
function unique(array) {
  return array.filter((value, index) => array.indexOf(value) === index);
}

// 4. 
function difference(array1, array2) {
  return array1.filter(item => !array2.includes(item));
}
