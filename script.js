import { getPlanetData } from "./modules/api.js";
import { displayErrorMessage, hideErrorMessage } from "./modules/displayErrors.js";
import {openInfoWindowForPlanet} from "./modules/planetInfoWindow.js";
import{showTooltip} from './modules/tooltip.js';
import{hideTooltip} from './modules/tooltip.js';

const planetNames = [];
const searchBtn = document.getElementById("searchBtn");
// Get all planets  for tooltips
const planets = document.querySelectorAll('.planet');

//Klick på sök-knapp initierar huvudfunktionen på sidan:
searchBtn.addEventListener("click", async function (event) {
  event.preventDefault(); 
  hideErrorMessage();     //om tidigare felmeddelande finns så stängs det.
  const data = await getPlanetData();   //kollar om planetdata finns i Local Storage, annars hämtas via API och sparas ner. (api.js)
  const planetNames = getAvailablePlanetNames(data);
  console.log(planetNames);
  const planetSearchName = document.getElementById("planetSearchName").value;   //användarens valda planet.
  console.log("rocket", planetSearchName);
  if (checkSearchPlanetIsAvailable(planetNames, planetSearchName)) {
    console.log("yes!", planetSearchName);
   openInfoWindowForPlanet(data, planetSearchName);

  } else {
    console.log("no planet available");
    displayErrorMessage("Rymden är stor. Ingen planet hittades.");
  }
});



//Hämtar lista med tillgängliga planeter från databasen.
function getAvailablePlanetNames(data) {
  for (const planet of data.bodies) {
    planetNames.push(planet.name);
  }
  return planetNames;
}


// Kollar om användarens valda planet finns med bland tillgängliga planeter.
function checkSearchPlanetIsAvailable() {
  let status = planetNames.includes(planetSearchName.value);
  console.log("användarens planet", planetSearchName.value);
  console.log("databasens planet", planetNames);
  console.log(status);
  return status;
}

let tooltipTimeout;
// Attach event listeners to each planet for tooltips
planets.forEach(planet => {
  planet.addEventListener('mouseover', () => {
    showTooltip(planet);
  });

  planet.addEventListener('mouseout', () => {
    tooltipTimeout = setTimeout(() => {
      hideTooltip(planet);
    }, 1000);
     });
});
