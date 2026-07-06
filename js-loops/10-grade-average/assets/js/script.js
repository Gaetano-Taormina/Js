const grades = [];
while (true) {
  let input = prompt("Enter a grade (or leave empty to stop):");
  if (!input) break;
  grades.push(Number(input));
}
if (grades.length > 0) {
  let sum = 0;
  for(let i=0; i<grades.length; i++) sum += grades[i];
  console.log("Average:", sum / grades.length);
}