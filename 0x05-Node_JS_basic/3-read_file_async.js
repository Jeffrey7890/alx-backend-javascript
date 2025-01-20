const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      if (lines.length < 2) {
        reject(new Error('Database is empty or invalid'));
        return;
      }

      const students = lines.slice(1).map((line) => line.split(','));
      const studentCount = students.length;
      const fields = {};

      students.forEach((student) => {
        const [, , , field] = student;
        if (field) {
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(student[0]); // Assuming the first name is at index 0
        }
      });

      console.log(`Number of students: ${studentCount}`);
      for (const [field, names] of Object.entries(fields)) {
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }

      resolve();
    });
  });
}

module.exports = countStudents;
