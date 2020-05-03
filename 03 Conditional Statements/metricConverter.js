function solve(input) {
    let requestedNumber = Number(input.shift());
    let inputMetric = String(input.shift());
    let outputMetric = String(input.shift());
    switch (inputMetric) {
        case "m": {
            if (outputMetric === "cm"){
                console.log((requestedNumber*100).toFixed(3))
            } else if (outputMetric === "mm"){
                console.log((requestedNumber*1000).toFixed(3));
            }
            break;
        }
        case "cm": {
            if (outputMetric === "m"){
                console.log((requestedNumber/100).toFixed(3));
            } else if (outputMetric === "mm") {
                console.log((requestedNumber*10).toFixed(3))
            }break;
        }
        case "mm": {
            if (outputMetric === "m"){
                console.log((requestedNumber/1000).toFixed(3));
            } else if (outputMetric === "cm") {
                console.log((requestedNumber/10).toFixed(3))
            }break;
        }
    }
}

solve(["150", "m", "cm"])