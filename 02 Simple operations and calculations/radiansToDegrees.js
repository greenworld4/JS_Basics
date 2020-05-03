function radiansToDegrees(input) {
    let radian = Number(input.shift());
    console.log((radian*180/Math.PI).toFixed(0));
}

radiansToDegrees(["3.1416"])