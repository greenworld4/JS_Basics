function solve(arg1, arg2, arg3) {
  let figure = String(arg1);
  let area = 0.0;
  let a = 0;
  let b = 0;
  switch (figure) {
    case "square": {
      a = Number(arg2);
      area = a * a;
      break;
    }
    case "rectangle": {
      a = Number(arg2);
      b = Number(arg3);
      area = a * b;
      break;
    }
    case "circle": {
      a = Number(arg2);
      area = Math.PI * a * a;
      break;
    }
    case "triangle": {
      a = Number(arg2);
      b = Number(arg3);
      area = (a * b) / 2;
      break;
    }
  }
  console.log(area.toFixed(3));
}

solve(["square", "5"]);
