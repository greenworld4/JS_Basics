function yardGreening(input){
    let area = Number(input.shift());
    let total = (area*7.61).toFixed(2);
    let final = (total - ((18/100)*total)).toFixed(2);
    let discount = (total-final).toFixed(2);
    console.log(`The final price is: ${final} lv.\n The discount is: ${discount} lv.`)

}

yardGreening(["135"])