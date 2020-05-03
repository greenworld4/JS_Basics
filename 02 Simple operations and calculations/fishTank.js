function fishTank(input){
    let length = Number(input.shift());
    let width = Number(input.shift());
    let height = Number(input.shift());
    let percentage = Number(input.shift());
    let volume = length*width*height;
    let fullTank = volume / 1000;
    let filledTank = fullTank - percentage/100*fullTank;

    console.log(filledTank.toFixed(3));


}

fishTank(["85", "75", "47", "17"])