function tailoringWorkshop(x,y,z) {
    let tablesNumber = Number(x);
    let tableLength = Number(y);
    let tableWidth = Number(z);
    let tableArea = tablesNumber * (tableLength + 2 * 0.30) * (tableWidth + 2 * 0.30);
    let kareArea = tablesNumber * (tableLength / 2) * (tableLength / 2);
    let totalPrice = (tableArea * 7 + kareArea * 9);
    let bgn = (totalPrice * 1.85);
    console.log(`${totalPrice.toFixed(2)} USD\n${bgn.toFixed(2)} BGN`);
}

tailoringWorkshop(["5", "1.00", "0.50"])