function solve(input){

    let stage = input.shift();
    let ticketType = input.shift();
    let tickets = Number(input.shift());
    let picture = input.shift();

    let total = 0;

    if (stage === "Quarter final") {
        switch (ticketType) {
            case 'Standard':
               total += 55.50 * tickets; 
                break;
            case 'Premium':
                total += 105.20 * tickets;
                break;
            case 'VIP':
                total += 118.90 * tickets;
                break;
        }

    } else if (stage === "Semi final") {
        switch (ticketType) {
            case 'Standard':
                total += 75.88 * tickets;
                break;
            case 'Premium':
                total += 125.22 * tickets;
                break;
            case 'VIP':
                total += 300.40 * tickets;
                break;
        }

    } else if (stage === "Final") {
        switch (ticketType) {
            case 'Standard':
                total += 110.10 * tickets;
                break;
            case 'Premium':
                total += 160.66 * tickets;
                break;
            case 'VIP':
                total += 400 * tickets;
                break;
        }
    }

    let isSpecial = true;

    if(total > 4000) {
        total *= 0.75; 
        isSpecial = false; 
    } else if(total > 2500){
        total *= 0.90;
    }

    if(picture === "Y" && isSpecial===true) {
        total += tickets * 40;        
    }

    console.log(total.toFixed(2));
    
    }
    
    solve ([
        "Final",
        "Premium",
        "25",
        "Y",
    
    ])
