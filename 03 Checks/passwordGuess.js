function solve(x) {
    let password = String(x);
    if (password === "s3cr3t!P@ssw0rd") {
        console.log("Welcome")
    } else {
        console.log("Wrong password!")
    }
}
solve(["s3cr3t!P@ssw0rd"])