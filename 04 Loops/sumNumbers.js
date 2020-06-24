function solve(input) {
  let number = +input.shift();
  let n = 1;

  while (n <= number) {
    console.log(n);
    n = n * 2 + 1;
  }
}
solve(["17"]);
