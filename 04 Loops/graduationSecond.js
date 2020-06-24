function solve(input) {
  let name = input.shift();
  let totalGrade = 0;
  let counter = 1;
  let excluded = 0;
  let isExcluded = false;

  while (counter <= 12) {
    let yearlyGrade = +input.shift();
    if (yearlyGrade >= 4.0) {
      counter++;
      totalGrade += yearlyGrade;
    }
        if (yearlyGrade < 4.0) {
      excluded++;      
    }
    if (excluded >= 2) {
      isExcluded = true;
    }
    if (isExcluded === true) {
      console.log(`${name} has been excluded at ${counter} grade`);
      return;
    }
  }

  let finalGrade = totalGrade / counter;
  console.log(`${name} graduated. Average grade: ${finalGrade.toFixed(2)}`);
}
solve(["Mimi", "6", "5", "6", "5", "6", "6", "2", "3"]);
