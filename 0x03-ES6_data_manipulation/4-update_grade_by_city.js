export default function updateStudentGradeByCity(students, city, newGrades) {
  // Step 1: Filter students by city
  return students
    .filter((student) => student.location === city) // Filter students located in the specified city
    .map((student) => {
      // Step 2: Find the grade for the student in newGrades
      const studentGrade = newGrades.find((grade) => grade.studentId === student.id);

      // Step 3: Return the student object with updated grade (or "N/A" if no grade is found)
      return {
        ...student, // Spread operator to retain all original student properties
        grade: studentGrade ? studentGrade.grade : 'N/A', // Set grade or "N/A"
      };
    });
}
