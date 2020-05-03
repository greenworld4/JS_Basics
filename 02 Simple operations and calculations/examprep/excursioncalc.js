function solve(input){

    
    let peopleCount = Number(input.shift(20));
    let season = String(input.shift());

    let total = 0;



    if (season === 'spring') {
        switch (peopleCount) {
            default: peopleCount <= 5
                total += 50.00 * peopleCount;
                break;
            case peopleCount > 5:
                total += 48.00 * peopleCount;
                break;

        }

    } else if (season === 'summer') {
        switch (peopleCount) {
            case peopleCount <= 5:
                total += 48.50 * peopleCount;
                break;
            default: peopleCount > 5
                total += 45.00 * peopleCount;
                break;
        }
    } else if (season === 'autumn') {
        switch (peopleCount) {
            case peopleCount <= 5:
                total += 60.00 * peopleCount;
                break;
            default: peopleCount > 5
                total += 49.50 * peopleCount;
                break;
        }
    } else if (season === 'winter') {
        switch (peopleCount) {
            case peopleCount <= 5:
                total += 86.00 * peopleCount;
                break;
            default: peopleCount > 5
                total += 85.00 * peopleCount;
                break;
        }
    }

    
    if(season === "summer") {
        total = (total - (0.15 * total)); 
    } 

    if(season === "winter") {
        total = total + 0.08*total;
    }     
    

    

    console.log(`${total.toFixed(2)} leva.`);

}

solve ([
    "15",
    "autumn"
])