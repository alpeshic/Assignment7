//STEP 1
var favoriteMovies = ["Top gun", "The Avengers", "Spiderman", "Superman", "Batman", "Antman", "Wonderwoman"];
console.log("Step 1");
console.log(favoriteMovies[1]);
//STEP 2
var movies = new Array(5);
movies[0] = favoriteMovies[2];
movies[1] = favoriteMovies[1];
movies[2] = favoriteMovies[3];
movies[3] = favoriteMovies[4];
movies[4] = favoriteMovies[5];
console.log("Step 2");
console.log(movies[0]);
//STEP 3
var movies = new Array(5);
movies[0] = favoriteMovies[2];
movies[1] = favoriteMovies[1];
movies[2] = favoriteMovies[3];
movies[3] = favoriteMovies[4];
movies[4] = favoriteMovies[5];
movies.splice(2,0, "Rajputana");
console.log("Step 3");
console.log(movies.length);

//STEP 4
var movies = [];
movies[0] = favoriteMovies[2];
movies[1] = favoriteMovies[1];
movies[2] = favoriteMovies[3];
movies[3] = favoriteMovies[4];
movies[4] = favoriteMovies[5];
delete movies[0];
console.log("Step 4");
console.log(movies);
//STEP 5
var movies = [];
movies[0] = favoriteMovies[2];
movies[1] = favoriteMovies[1];
movies[2] = favoriteMovies[3];
movies[3] = favoriteMovies[4];
movies[4] = favoriteMovies[5];
movies[5] = favoriteMovies[6];
movies[6] = favoriteMovies[0];
var i;
console.log("Step 5");
for(i = 0; i < movies.length; i++)
{
    console.log(movies[i]);
}
//STEP 6
var movies = [];
movies[0] = favoriteMovies[2];
movies[1] = favoriteMovies[1];
movies[2] = favoriteMovies[3];
movies[3] = favoriteMovies[4];
movies[4] = favoriteMovies[5];
movies[5] = favoriteMovies[6];
movies[6] = favoriteMovies[0];
console.log("Step 6");
movies.forEach(function(movie){
    "use strict";
    console.log(movie);
})

//STEP 7
var movies = [];
movies[0] = favoriteMovies[2];
movies[1] = favoriteMovies[1];
movies[2] = favoriteMovies[3];
movies[3] = favoriteMovies[4];
movies[4] = favoriteMovies[5];
movies[5] = favoriteMovies[6];
movies[6] = favoriteMovies[0];
console.log("Step 7");
movies.sort().forEach(function(movie){
    "use strict";
    console.log(movie);
})
//STEP 8
var movies = [];
movies[0] = favoriteMovies[2];
movies[1] = favoriteMovies[1];
movies[2] = favoriteMovies[3];
movies[3] = favoriteMovies[4];
movies[4] = favoriteMovies[5];
movies[5] = favoriteMovies[6];
movies[6] = favoriteMovies[0];

var leastFavMovies = [];
leastFavMovies[0] = "Joker";
leastFavMovies[1] = "Gemini Man";
leastFavMovies[2] = "Jexi";
console.log("Step 8");
console.log("Movies I like:");
console.log("");
movies.forEach(function(movie){
    "use strict";
    console.log(movie);
})
console.log("Movies I regret watching:");
console.log("");
leastFavMovies.forEach(function(movie){
    "use strict";
    console.log(movie);
})
//STEP 9
var movies = [];
movies[0] = favoriteMovies[2];
movies[1] = favoriteMovies[1];
movies[2] = favoriteMovies[3];
movies[3] = favoriteMovies[4];
movies[4] = favoriteMovies[5];
movies[5] = favoriteMovies[6];
movies[6] = favoriteMovies[0];

var leastFavMovies = [];
leastFavMovies[0] = "Joker";
leastFavMovies[1] = "Gemini Man";
leastFavMovies[2] = "Jexi";
movies = movies.concat(leastFavMovies);
console.log("Step 9");
movies.reverse().forEach(function(movie){
    "use strict";
    console.log(movie);
})
//STEP 10
var movies = [];
movies[0] = favoriteMovies[2];
movies[1] = favoriteMovies[1];
movies[2] = favoriteMovies[3];
movies[3] = favoriteMovies[4];
movies[4] = favoriteMovies[5];
movies[5] = favoriteMovies[6];
movies[6] = favoriteMovies[0];

var leastFavMovies = [];
leastFavMovies[0] = "Joker";
leastFavMovies[1] = "Gemini Man";
leastFavMovies[2] = "Jexi";
movies = movies.concat(leastFavMovies);
console.log("Step 10");
console.log(movies[movies.length - 1]);
