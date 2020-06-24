function solve(input) {
  let bookName = input.shift();
  let numberBooks = +input.shift();
  let book = input.shift();
  let times = 0;

  while (times < numberBooks) {   
      if (book == bookName) {
        break;
      } 
      times++;
      book = input.shift();
      
    }

  
  if (book == bookName) {
    console.log(`You checked ${times} books and found it.`);
  } else {
    console.log(
      `The book you search is not here!\nYou checked ${times} books.`
    );
  }
}

solve([
    "The spot", 
    "4", 
    "Hunger Games ", 
    "Harry Potter", 
    "Torronto",
    "Spotify" ]);
