/*
  Pragmatic JavaScript
  Chapter 4
  Programming Assignment

  Author:   Dustin Craven
  Date:     5/19/24
  Filename: script.js
*/

"use strict";

const movies = [
  {
    title: "The Lord of the Rings: Return of the King",
    year: "2003",
    director: "Peter Jackson",
    synopsis: "Hobbit destroys shiny ring in volcano and saves world from evil."
  },
  {
    title: "The Hobbit: An Unexpected Journey",
    year: "2012",
    director: "Peter Jackson",
    synopsis: "Hobbit is visited by old man in robes and is suddenly on a dangerous adventure."
  },
  {
    title: "Train to Busan",
    year: "2016",
    director: "Yeon Sang-ho",
    synopsis: "Zombie outbreak forces strangers on a train to unite and survive until the train stops and they realize the outbreak is widespread."
  },
  {
    title: "The Matrix",
    year: "1999",
    director: "Lana & Lilly Wachowskis",
    synopsis: "Man breaks out of a false reality and participates in the rebellion against intelligent machines that are controlling humanity."
  },
  {
    title: "How to Train Your Dragon",
    year: "2012",
    director: "Chris Sanders & Dean DeBlois",
    synopsis: "Kid bonds with dragon after shooting it from sky and injuring it and ends a multi-year feud between the dragons and his people."
  }
];

function fetchMovie(title) {
  return new Promise((resolve, reject) => {
    const searchResult = movies.find(movie => movie.title === title);

    setTimeout(() => {
      if(!searchResult) {
        reject("Movie not found");
      } else {
        resolve(searchResult);
      }
    }, 2000);
  });
}

document.getElementById("movie-form").addEventListener("submit", async (event) => {
  //Store HTML elements in variables for easier use
  let errorMessage = document.getElementById("error-message");
  let movieTitle = document.getElementById("movie-title");
  let movieDirector = document.getElementById("movie-director");
  let movieYear = document.getElementById("movie-year");
  let movieSynopsis = document.getElementById("movie-synopsis");
  let searchValue = document.getElementById("title-input");
  
  //Reset page on new search
  errorMessage.innerText = "";
  movieTitle.innerText = "";
  movieDirector.innerText = "";
  movieYear.innerText = "";
  movieSynopsis.innerText = "";

  //Attempt to call fetchMovie() with try catch block
  try {
    //Stop form from submitting
    event.preventDefault();

    console.log(searchValue.value);
    //Use await to pull result of fetchMovie() and store value in variable
    let searchResult = await fetchMovie(searchValue.value);

    //Set search result values to page
    movieTitle.innerText = searchResult.title;
    movieDirector.innerText = searchResult.director;
    movieYear.innerText = searchResult.year;
    movieSynopsis.innerText = searchResult.synopsis;
  } catch(err) {
    //Set error message value to page
    errorMessage.innerText = err;
  }
});