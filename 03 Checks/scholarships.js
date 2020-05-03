function solve(x, y, z) {
  let income = Number(x);
  let averageGrade = Number(y);
  let minimumWage = Number(z);
  let socialScholarship = 0;
  let excellentScholarship = 0;

  if (averageGrade >= 5.5) {
    excellentScholarship = averageGrade * 25;
  }
  if (income < minimumWage && averageGrade > 4.5) {
    socialScholarship = 0.35 * minimumWage;
  }
  if (socialScholarship > excellentScholarship) {
    console.log(
      `You get a Social scholarship ${Math.floor(socialScholarship)} BGN`
    );
  } else if (socialScholarship < excellentScholarship && averageGrade >= 5.5) {
    console.log(
      `You get a scholarship for excellent results ${Math.floor(
        excellentScholarship
      )} BGN`
    );
  } else {
    {
      console.log("You cannot get a scholarship!");
    }
  }
}

solve(["300.00", "5.65", "420.00"]);
