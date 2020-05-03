function usdToBgn(input){
    let dollars = Number(input.shift());
    console.log((dollars*1.79549).toFixed(2));
}

usdToBgn(["20"])