// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(array) {
  const directorsOnly = array.map(function (value, index, originalArray) {
    return value.director;
  });
  return directorsOnly;
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
  let stevenMovies = array.filter(
    result =>
      result.director === 'Steven Spielberg' && result.genre.some('Drama')
  );
  console.log(stevenMovies);
  return stevenMovies;
}
howManyMovies(movies);
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array) {
  const total = array.reduce(function (
    accumulator,
    value,
    index,
    originalArray
  ) {
    const rates = accumulator + array.rate;
  },
  0);
  const avarage = total / array.length;
  return Math.round(avarage * 100) / 100;
}
// Iteration 4: Drama movies - Get the average of Drama Movies

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
  const lexical = array.map;
  return;
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
