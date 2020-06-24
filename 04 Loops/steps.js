function solve(input) {
  let steps = 0;
  let total = 0;
  let command = input.shift();
  
  while (command != "Going home") {
    if ((command == "Going home")) {
        let walkingSteps = Number(command);    
        total += walkingSteps;
    } else {
        total += steps;
    } break;
  }
  if (total >= 10000) {
    console.log("Goal reached! Good job!");
    return;
  } else {
    let diff = 10000 - total;
    console.log(`${diff} more steps to reach goal.`);
    return;
  }
}
solve(["1500", "300", "2500", "3000", "Going home", "200"]);
