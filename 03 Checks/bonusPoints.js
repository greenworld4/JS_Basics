function solve(x){
    let initialPoints = Number(x);
    let additionalPoints = 0.0;
    if (initialPoints <= 100) {
        additionalPoints = 5;
    } else if (initialPoints > 1000) {
        additionalPoints = 10/100*initialPoints;
    } else {
        additionalPoints = 20/100*initialPoints;
    } if (initialPoints%2 == 0){
        additionalPoints += 1;
    } else if (initialPoints % 10 == 5){
        additionalPoints += 2;
    }

    console.log(additionalPoints);
    console.log(initialPoints+additionalPoints);
}

solve(["20"])