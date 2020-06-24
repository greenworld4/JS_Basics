function solve(input) {
  let n = +input.shift();
  let k = 0;
  let maxNumber = Number.MIN_SAFE_INTEGER;

  while (k < n) {
    let number = +input.shift();
    if (number >= maxNumber) {
      maxNumber = number;
    }
    k++;
  }
  console.log(maxNumber);
}
solve(["4", "45", "-20", "7", "99"]);
