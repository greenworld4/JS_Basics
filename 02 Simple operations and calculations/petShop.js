function petShop(input){
    let dogs = Number(input.shift());
    let others = Number(input.shift());
    let sum = (dogs*2.50 + others*4).toFixed(2);

    console.log(`${sum} lv.`)
}

petShop(["5", "4"]);