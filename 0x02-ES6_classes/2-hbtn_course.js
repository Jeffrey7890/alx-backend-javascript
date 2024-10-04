function isArray(input) {
  return input instanceof Array;
}

export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof (name) !== 'string') throw new TypeError('Name must be a string');
    if (typeof (length) !== 'number') throw new TypeError('Length must be a number');
    if (isArray(students) === false) throw new TypeError('Students must be an array');
    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(name) {
    if (typeof (name) === 'string') {
      this._name = name;
    } else throw new TypeError('Name must be a string');
  }

  set length(length) {
    if (typeof (length) !== 'number') throw new TypeError('Length must be a number');
    this._length = length;
  }

  set students(students) {
    if (isArray(students) === false) throw new TypeError('Students must be an array');
    this._students = students;
  }

  get students() {
    return this._students;
  }

  get length() {
    return this._length;
  }

  get name() {
    return this._name;
  }
}
