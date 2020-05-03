function rectangleArea(x1, y1, x2, y2){
    let length = Math.abs(x1-x2);
    let width = Math.abs(y1-y2);
    let area = (length*width).toFixed(2);
    let perimeter = (2*(length+width)).toFixed(2);
    console.log(`${area} \n ${perimeter}`);
}

rectangleArea(["60", "20", "10", "50"])