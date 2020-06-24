function solve(input) {
  let name = input.shift();
  let counter = 0;
  let sumGrades = 0;
  let finalGrade = 0.00;
  let grade = 0;

    while (counter<12){                
        grade = Number(input.shift());
        if(grade>=4.00) {
            counter++;
            sumGrades += grade;
        }
        
    }
    finalGrade = sumGrades / counter;
  if (finalGrade >= 4.00) {
    console.log(`${name} graduated. Average grade: ${finalGrade.toFixed(2)}`);
  }
}
solve([
  "Pesho",
  "4.00",
  "5.50",
  "6.00",
  "5.43",
  "4.50",
  "6.00",
  "5.55",
  "5.00",
  "6.00",
  "6.00",
  "5.43",
  "5.00",
]);
