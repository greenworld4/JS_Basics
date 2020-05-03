function solve(x,y,z) {
    let recordSeconds = Number(x);
    let distance = Number(y);
    let secondsPerMeter = Number(z);
    let totalSeconds = distance*secondsPerMeter;
    distanceRounds = Math.floor(distance/15);
    let secondsWithWaterResistance = distanceRounds*12.5;
    totalSeconds += secondsWithWaterResistance;
    if (recordSeconds > totalSeconds){
        console.log(`Yes, he succeeded! The new world record is ${totalSeconds.toFixed(2)} seconds.`)
    }
    else {
        console.log(`No, he failed! He was ${(totalSeconds-recordSeconds).toFixed(2)} seconds slower.`)
    }
}

solve(["55555.67", "3017", "5.03"])