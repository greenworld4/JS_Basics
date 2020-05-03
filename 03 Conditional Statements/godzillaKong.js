function solve(x,y,z) {
    let budget = Number(x);
    let stuntmen = Number(y);
    let clothesPricePerPerson = Number(z);
    let decorPrice = 0.1*budget;
    let clothesPriceTotal = stuntmen*clothesPricePerPerson;
    let totalSum = clothesPriceTotal + decorPrice;
    
    if(stuntmen>150) {
        clothesPricePerPerson -= 0.1*clothesPricePerPerson;
    }
    if (totalSum > budget) {
        console.log(`Not enough money!\nWingard needs ${(stuntmen*clothesPricePerPerson+decorPrice-budget).toFixed(2)} leva more.`)
    }
    else {
        console.log(`Action!\nWingard starts filming with ${(budget-(stuntmen*clothesPricePerPerson+decorPrice)).toFixed(2)} leva left.`)
    }
}
solve(["15437.62", "186", "57.99"])