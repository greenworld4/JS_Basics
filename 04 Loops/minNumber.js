function solve(input) {
    let n = +input.shift();
    let k = 0;
    let minNumber = Number.MAX_SAFE_INTEGER;
  
    while (k < n) {
      let number = +input.shift();
      if (number <= minNumber) {
        minNumber = number;
      }
      k++;
    }
    console.log(minNumber);
  }
  solve(["2", "100", "99"])