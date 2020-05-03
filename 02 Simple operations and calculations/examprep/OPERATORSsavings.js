function solve(input){

   let income = Number(input.shift());
   let months = Number(input.shift());
   let personalexpenses = Number(input.shift()); // personal expenses//
   let otherExpenses = (0.3 * income);
   let totalExpenses = personalexpenses + otherExpenses;
   let leftAmount = (income - totalExpenses).toFixed(2);

   let savings = ((months * leftAmount)).toFixed(2);
   let percentage = ((leftAmount / income)*100).toFixed(2);

   console.log(`She can save ${percentage}%`)
   console.log(`${savings}`)
   
   





}

solve ([
"2050",
"5",
"900"


])