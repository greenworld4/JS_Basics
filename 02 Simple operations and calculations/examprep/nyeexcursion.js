function solve (input) {

    let budget = Number(input.shift());
    let newYearPackagePrice = Number(input.shift());
    let transportPrice = Number(input.shift());

    let fireworkPrice = (transportPrice - (0.45 * transportPrice));
    let spaPackagePrice = (newYearPackagePrice + (0.15 * newYearPackagePrice));
    let total = (newYearPackagePrice + transportPrice + fireworkPrice + spaPackagePrice);

    if (budget > total) {
        let moneyLeft = (budget - total).toFixed(2);
        console.log(`Happy New Year. Money left: ${moneyLeft} leva.`)
    }

    else {
        let moreMoney = (total - budget).toFixed(2);
        console.log(`Not enough money! They need ${moreMoney} leva more!`)
    }

}

solve ([

"1950",
"525",
"69"

])