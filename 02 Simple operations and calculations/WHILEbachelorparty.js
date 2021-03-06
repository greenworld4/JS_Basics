function solve(input){

    let singerPrice = Number(input.shift());
    let inputLine = input.shift();
    let totalSum = 0;
    let totalGuests = 0;

    while(inputLine !== "The restaurant is full"){

        let groupOfPeople = Number(inputLine);
        
        if (groupOfPeople < 5) {
            totalSum += groupOfPeople * 100;

        } else {
            totalSum += groupOfPeople * 70;

        }
        totalGuests += groupOfPeople;
        inputLine = input.shift();
    }
    let amount = Math.abs(totalSum - singerPrice);

    if (totalSum >= singerPrice) {        
        console.log(`You have ${totalGuests} guests and ${amount} leva left`);
    }
    else {
        console.log(`You have ${totalGuests} guests and ${totalSum} leva income, but no singer`);
    }

    console.log(totalSum);
    console.log(totalGuests);


}

solve ([
    "2800",
    "5",
    "5",
    "4",
    "6",
    "6",
    "12",
    "12",
    "The restaurant is full",
]);