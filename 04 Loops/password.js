function solve(input){
    let name = input.shift();
    let password = input.shift();
    let data = input.shift();

    while (data !== password) {
        data = input.shift();
    }

    console.log(`Welcome ${name}!`);
}
solve(["Nakov", "1234", "pass", "1324", "1234"])