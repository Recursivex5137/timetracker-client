export const findObject = (array, objectKey, valueToCheck) => array
  .find(current => current[objectKey] === valueToCheck);