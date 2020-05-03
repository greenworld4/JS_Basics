function concatData(input){
    let name = input.shift();
    let lastname = input.shift();
    let age = Number(input.shift());
    let town = input.shift();

    console.log(`You are ${name} ${lastname}, a ${age}-years old person from ${town}.`)
}

concatData(["Gabriela", "Petkova", "24", "Burgas"])