function charityCampaign (input) {
    let days = Number(input.shift());
    let bakersNumber = Number(input.shift());
    let cakesAmount = Number(input.shift());
    let wafflesAmount = Number(input.shift());
    let pancakesAmount = Number(input.shift());
    let totalPerBaker = cakesAmount*45 + wafflesAmount*5.80 + pancakesAmount*3.20;
    let totalPerDay = totalPerBaker*bakersNumber;
    let total = totalPerDay*days;
    let expenses = 1/8*total;
    let campaign = total - expenses;
    console.log(campaign.toFixed(2));
}

charityCampaign(["20", "8", "14", "30", "16"])