function solve (input) {

    let tripCount = Number(input.shift(300));
    let continent = input.shift();
    let totalCount = 5;

    for (let tripCount = 1; tripCount <= 5; tripCount++) {
        let europeTrips = ((1/tripCount) * 100).toFixed(2);
        let asiaTrips = ((1/tripCount) * 100).toFixed(2);
        let africaTrips = ((1/tripCount) * 100).toFixed(2);
        let americaTrips = ((1/tripCount) * 100).toFixed(2);
        let australiaTrips = ((1/tripCount) * 100).toFixed(2);

    

        console.log(`Europe: ${europeTrips}%`)
        console.log(`Asia: ${asiaTrips}%`)
        console.log(`Africa: ${africaTrips}%`)
        console.log(`America: ${americaTrips}%`)
        console.log(`Australia: ${australiaTrips}%`)
    }

    
       
}

solve ([

    "5",
    "Europe",
    "Asia",
    "Africa",
    "America",
    "Australia"

    

])