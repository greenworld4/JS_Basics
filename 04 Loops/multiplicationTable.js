function solve(input){
    let n = +input.shift();
    for(let i = 0; i<n; i++){
        let num = +input.shift();
        let sum = 0;
        let max = Number.MIN_SAFE_INTEGER;
        if(sum == max){
            console.log(`Yes\nSum = ${sum}`)
        } else{
            console.log(`No\nDiff = ${max-sum}`)
        }
    }
}
solve([
    "7",
    "3",
    "4",
    "1",
    "1",
    "2",
    "12",
    "1"
])