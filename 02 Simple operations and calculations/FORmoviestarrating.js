function solve(input){
    let moviesCount = Number(input.shift());
    let totalRatingForAllMovies = 0;
    let maxRating = 1; //???
    let maxRatingFilm = "";

    let minRating = 10; //???
    let minRatingFilm = "";

    for(let movie = 1; movie <= moviesCount; movie++) {
        let name = input.shift();
        let rating = Number(input.shift());

        if(rating > maxRating) {
            maxRating = rating;
            maxRatingFilm = name;
        }

        if(rating < minRating) {
            minRating = rating;
            minRatingFilm = name;
        }
        
totalRatingForAllMovies += rating;
    }

    let averageRating = totalRatingForAllMovies / moviesCount;

console.log(`${maxRatingFilm} is with highest rating: ${maxRating.toFixed(1)}`);
console.log(`${minRatingFilm} is with lowest rating: ${minRating.toFixed(1)}`);
console.log(`Average rating: ${averageRating.toFixed}`);

}

solve ([
"5",
"A Star is Born",
"7.8",
"Creed 2",
"7.3",
"Mary Poppins",
"7.2",
"Vice",
"7.2",
"Captain Marvel",
"7.1" 
])