function solve (input) {
    let number = +input.shift();

        while(number < 1 || number > 100) {
            number = +input.shift();
        }
            console.log(number);
        }
    
    

solve(["5", "122"])