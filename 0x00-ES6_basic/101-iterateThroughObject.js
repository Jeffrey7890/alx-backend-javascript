export default function iterateThroughObject(reportWithIterator) {
  const employees = [];
  for (const employee of reportWithIterator) {
    employees.push(employee); // Add each employee name to the array
  }
  return employees.join(' | ');
}
