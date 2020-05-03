function solve(input){
    let hour = Number(input.shift());
    let min = Number(input.shift());
    let newtime = min + 15;
    if (min=59){
        hour += 1;
        min +=14
        console.log(`${hour}:${min}`)
    }
}
solve(["1", "46"])