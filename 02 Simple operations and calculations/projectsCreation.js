function projectsCreation(input) {
    let nameArchitect = input.shift();
    let numberProjects = Number(input.shift());
    hours = numberProjects * 3;

        console.log(`The architect ${nameArchitect} will need ${hours} to complete ${numberProjects} project/s.`)
}

projectsCreation(["George", "4"])