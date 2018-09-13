

function findObject(array, objectKey, valueToCheck) {
  return array.filter(function (current) { return current[objectKey] === valueToCheck; })[0];
}

export { findObject }
