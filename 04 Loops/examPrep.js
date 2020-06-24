function solve(input){
    let inputOfBadGrades = Number(input.shift());
    let countForBadGrades = 0;
    let sumGrades = 0;
    let counterForGrades = 0;
    let lastProblem = " ";

    while (countForBadGrades < inputOfBadGrades) {
        let nameOfExercise = input.shift();
        let grade = Number(input.shift());
        if(nameOfExercise == "Enough") {
            let avrg = sumGrades/counterForGrades;            
            console.log(`Average score: ${avrg.toFixed(2)}\nNumber of problems: ${counterForGrades}\nLast problem: ${lastProblem}`)
            break;
        }
        sumGrades += grade;
        counterForGrades++;
        if (grade <= 4.00){
            countForBadGrades++;
            
        }
        lastProblem = nameOfExercise;
    }
    if (countForBadGrades == inputOfBadGrades) {
        console.log(`You need a break, ${countForBadGrades} poor grades.`)
    }

}
solve([
    "3", 
    "Money", 
    "6", 
    "Story", 
    "4", 
    "Spring Time",
    "5",
    "Bus",
    "6", 
    "Enough"
])