export default function getListStudentIds(students) {
  // Check if the input is an array, return an empty array if not
  if (!Array.isArray(students)) {
    return [];
  }

  // Use map to extract the ids from each student object
  return students.map((student) => student.id);
}
