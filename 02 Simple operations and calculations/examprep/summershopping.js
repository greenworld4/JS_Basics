function solve (input) {
    let budget = Number(input.shift());
    let towelPrice = Number(input.shift());
    let discount = Number(input.shift());
    let umbrellaPrice = (2/3 * towelPrice);
    let slippersPrice = (0,75 * umbrellaPrice);
    let bagPrice = (1/3 * (slippersPrice + towelPrice));
    let totalPrice = 0;
    totalPrice = (towelPrice + umbrellaPrice + slippersPrice + bagPrice);
    let priceAfterDiscount = (totalPrice - ((discount/100)*totalPrice)).toFixed(2);
    let amountLeft = (budget - priceAfterDiscount).toFixed(2);
    let notEnough = (totalPrice - budget).toFixed(2);


    if (budget > priceAfterDiscount) {
        console.log(`Annie's sum is ${priceAfterDiscount} lv. She has ${amountLeft} lv. left.`)
    }

    else {
        console.log(`Annie's sum is ${priceAfterDiscount} lv. She needs ${notEnough} lv. more.`)
    }

    console.log(totalPrice);

    


    


}

solve ([
    "40",
    "15",
    "5"

])