function solve (input) {

    let peopleCount = Number(input.shift());
    let nightsCount = Number(input.shift());
    let transportCards = Number(input.shift());
    let ticketsPerPerson = Number(input.shift());

    //pricelist
    let pricePerNight = 20;
    let pricePerCard = 1.60;
    let pricePerTicket = 6;
    let total = ((nightsCount * pricePerNight) + (pricePerTicket * ticketsPerPerson) + (pricePerCard * transportCards));

    let pricePerGroup = total*peopleCount;
    let extraExpense = 0.25*pricePerGroup;
    let finalSum = pricePerGroup + extraExpense;

    


    console.log(finalSum.toFixed(2));
    
}



solve ([
    "20",
    "14",
    "30",
    "6"

])