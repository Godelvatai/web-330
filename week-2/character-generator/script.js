/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author:    Dustin Craven
  Date:      4/7/24
  Filename:  script.js
*/

"use strict";

function createCharacter(name, gender, characterClass) {
  // TODO: Implement this function
  let characterName = name;
  let characterGender = gender;
  let selectedClass = characterClass;

  return {
    getName: function() {
      return characterName;
    },
    getGender: function() {
      return characterGender;
    },
    getClass: function() {
      return selectedClass;
    }
  }
}

document.getElementById("generateHero").addEventListener("click", function(e) {
  e.preventDefault();

  // TODO: Get form values
  let characterName = document.getElementById("heroName").value;
  let characterGender = document.getElementById("heroGender").value;
  let characterClass = document.getElementById("heroClass").value;
  // TODO: Create character
  let createdCharacter = createCharacter(characterName, characterGender, characterClass);
  // TODO: Display character information
  document.getElementById("characterOutput").innerHTML = "Character Name: "+createdCharacter.getName()+"<br>Character Gender: "+createdCharacter.getGender()+"<br>Character Class: "+createdCharacter.getClass();
});