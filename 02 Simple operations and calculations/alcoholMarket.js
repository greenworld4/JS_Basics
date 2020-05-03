function alcoholMarket(input) {
    let whiskeyPrice = Number(input.shift());
    let beerLiters = Number(input.shift());
    let wineLiters = Number(input.shift());
    let RakiaLiters = Number(input.shift());
    let whiskeyLiters = Number(input.shift());
    let rakiaPrice = whiskeyPrice/2;
    let winePrice = rakiaPrice - 40/100*rakiaPrice;
    let beerPrice = rakiaPrice - 80/100*rakiaPrice;
    let total = whiskeyPrice*whiskeyLiters + beerLiters*beerPrice + wineLiters*winePrice + rakiaPrice*RakiaLiters;
    console.log(total.toFixed(2));
}
alcoholMarket(["50", "10", "3.5", "6.5", "1"])