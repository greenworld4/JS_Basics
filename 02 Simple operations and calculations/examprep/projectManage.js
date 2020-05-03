function projectManage(input) {
    let name = input.shift();
    let projectCount = Number(input.shift());

    console.log(`${name} will need ${projectCount * 3} hours to complete ${projectCount} projects.`)
}

projectManage(["George", "4"]);