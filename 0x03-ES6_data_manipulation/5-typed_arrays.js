export default function createInt8TypedArray(length, position, value) {
  // Step 1: Check if the position is valid
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Step 2: Create a new ArrayBuffer of the specified length
  const buffer = new ArrayBuffer(length);

  // Step 3: Create a typed array (Int8Array) from the buffer
  const int8Array = new Int8Array(buffer);

  // Step 4: Set the value at the specified position
  int8Array[position] = value;

  // Step 5: Return the typed array
  return int8Array;
}
