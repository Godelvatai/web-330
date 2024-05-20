/*
  Pragmatic JavaScript
  Chapter 3
  Programming Assignment

  Author:    Dustin Craven
  Date:      5/19/24
  Filename:  script.js
*/

"use strict";

let heroes = [
  //Create superhero objects
  {name: "Superman",superpower: "Kryptonian",weakness: "kryptonite",city: "Metropolis"},
  {name: "Martian Manhunter",superpower: "Martian",weakness: "fire",city: "Middleton"},
  {name: "Flash",superpower: "Speed Force",weakness: "cold temperatures",city: "Central City"}
];

function fetchHero1() {
  //return promise for the retrieval of information for hero 1
  return new Promise((resolve, reject) => {
    //Two second timeout delay
    setTimeout(() => {
      //For testing, Math.random() < 0.9 causes Promise to be rejected 10% of the time
      if(Math.random() < 0.9) {
        //resolve promise with first hero of heroes array
        resolve(heroes[0]);
      } else {
        //reject with message that retrieval of info failed
        reject(`Unable to retrieve information for ${heroes[0].name}`);
      }
    }, 2000);
  });
}

function fetchHero2() {
  //return promise for the retrieval of information for hero 2
  return new Promise((resolve, reject) => {
    //Five second timeout delay
    setTimeout(() => {
      //For testing, Math.random() < 0.9 causes Promise to be rejected 10% of the time
      if(Math.random() < 0.9) {
        //resolve promise with the second hero of heroes array
        resolve(heroes[1]);
      } else {
        //reject with message that retrieval of info failed
        reject(`Unable to retrieve information for ${heroes[1].name}`);
      }
    }, 5000);
  });
}

function fetchHero3() {
  //return promise for the retrieval of information for hero 3
  return new Promise((resolve, reject) => {
    //Three second timeout delay
    setTimeout(() => {
      //For testing, Math.random() < 0.9 causes Promise to be rejected 10% of the time
      if(Math.random() < 0.9) {
        //resolve promise with the third hero of heroes array
        resolve(heroes[2]);
      } else {
        //reject with message that retrieval of info failed
        reject(`Unable to retrieve information for ${heroes[2].name}`);
      }
    }, 3000);
  });
}

// TODO: Use Promise.allSettled to fetch all heroes and update the webpage
Promise.allSettled([fetchHero1(), fetchHero2(), fetchHero3()]).then((results) => {
  results.forEach((result) => {
    if(result.status === "fulfilled") {
      let resultHero = result.value;
      let formattedOutput = `Superhero Name: ${resultHero.name}<br>Super Power: ${resultHero.superpower}<br>Weakness: ${resultHero.weakness}<br>Home City: ${resultHero.city}`;
      switch(resultHero.name) {
        case "Superman":
          document.getElementById("hero1").innerHTML = formattedOutput;
          break;
        case "Martian Manhunter":
          document.getElementById("hero2").innerHTML = formattedOutput;
          break;
        case "Flash":
          document.getElementById("hero3").innerHTML = formattedOutput;
          break;
        default:
          break;
      }
    } else {
      if(result.reason.includes("Superman")) {
        document.getElementById("hero1Error").innerText = result.reason;
      } else if(result.reason.includes("Martian Manhunter")) {
        document.getElementById("hero2Error").innerText = result.reason;
      } else if(result.reason.includes("Flash")) {
        document.getElementById("hero3Error").innerText = result.reason;
      }
    }
  })
})