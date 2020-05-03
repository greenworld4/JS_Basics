function solve(x,y){
    let hour = Number(x);
    let min = Number(y);
    let totalMin = hour*60 + min;
    let timePlus15 = totalMin + 15;
    let finalHour = Math.floor(timePlus15 / 60);
    let finalMin = timePlus15 % 60;
    parseInt.finalMin;
    
    if (finalHour >= 24) {
        finalHour -= 24;
    }

    if (finalMin < 10) {
        console.log(`${finalHour.toFixed(0)}:0${finalMin}`)
    } else {
        console.log(`${finalHour.toFixed(0)}:${finalMin}`)
    }
    

}
solve(["10", "44"])