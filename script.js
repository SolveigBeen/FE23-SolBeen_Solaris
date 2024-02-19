"use strict";
/*variabel deklaration */
const planetSearchName = document.getElementById("planetSearchName");
const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default form submission behavior
  let searchPlanet=planetSearchName.value;
  console.log(searchPlanet);
  clearInput()
});

/* Nollställer och förbereder drop-down för ny sökning*/
function clearInput() {
  planetSearchName.value = '';
}

