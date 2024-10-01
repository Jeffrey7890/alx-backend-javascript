export default function appendToEachArrayValue(array, appendString) {
  for (const item of array) {
    const idx = array.findIndex((value) => value === item);
    array[idx] = appendString + item;
  }

  return array;
}
