function solve(input){
    let tripPrice = Number(input.shift());
    let puzzlesNumber = Number(input.shift());
    let dollsNumber = Number(input.shift());
    let teddyBears = Number(input.shift());
    let minions = Number(input.shift());
    let trucks = Number(input.shift());   
    let sum = puzzlesNumber*2.60+dollsNumber*3+teddyBears*4.10+minions*8.20+trucks*2;
    let totalToys = puzzlesNumber+dollsNumber+teddyBears+minions+trucks;
        if (totalToys>=50) {
        sum  = sum - 25/100*sum;
    }
    let rent = 10/100*sum;
    let sumFinal = sum-rent;
    let moneyLeft = sumFinal-tripPrice;
    let moneyNeeded = tripPrice-sumFinal;
    if (sumFinal>tripPrice){
        console.log(`Yes! ${moneyLeft} lv left`);
    } else {
        console.log(`Not enough money! ${moneyNeeded} lv needed.`)
    }
    

    
    
    
}

solve([
    "40.8",
    "20",
    "25",
    "30",
    "50",
    "10"
])