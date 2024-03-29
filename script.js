//Huvudfunktion: Välj planet och sök fakta. Fakta hämtas initialt via API-anrop, därefter från Local Storage. Fakta om planeter visas i modalt fönster.  Sekundärfunktion: Planeters namn visas med tooltip/mouse-hoover. Klickas en planet visas bild på densamma.

import { getPlanetData } from "./modules/api.js";
import { displayErrorMessage, hideErrorMessage } from "./modules/displayErrors.js";
import {openInfoWindowForPlanet} from "./modules/planetInfoWindow.js";
import{showTooltip, hideTooltip } from './modules/tooltip.js';
import{showPlanetImage, planetImgLib} from './modules/planetImages.js';

const planetNames = [];
const searchBtn = document.getElementById("searchBtn");
// Get all planets  for tooltips
const planets = document.querySelectorAll('.planet');


//Klick på sök-knapp initierar huvudfunktionen på sidan:
searchBtn.addEventListener("click", async function (event) {
  event.preventDefault(); 
  hideErrorMessage();     //om tidigare felmeddelande finns så stängs det.
  try{
  const data = await getPlanetData();   //kollar om planetdata finns i Local Storage, annars hämtas via API och sparas ner. (-> api.js)
  const planetNames = getAvailablePlanetNames(data);   //planeter som finns i databas
  console.log(planetNames);
  const planetSearchName = document.getElementById("planetSearchName").value;   //användarens valda planet.
  console.log("Sökt planet är:", planetSearchName);
  if (checkSearchPlanetIsAvailable(planetNames, planetSearchName)) {
   openInfoWindowForPlanet(data, planetSearchName);    // -> planetInfoWindows.js

  } else {
    console.log("no planet available");
    displayErrorMessage("Rymden är stor. Planeten kan inte hittas.");   // -> displayErrors.js
  }
  }catch (error){
    console.log('Ingen data')
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
  console.log("sökt planet finns i databasen: ", status);
  return status;
}


// Sekundärfunktioner: 

//Event listeners på varje planet för att visa tooltips med namn på planeten. ->tooltip.js
let tooltipTimeout;
planets.forEach(planet => {
  planet.addEventListener('mouseover', () => {
  showTooltip(planet);
  });

  planet.addEventListener('mouseout', () => {
  tooltipTimeout = setTimeout(() => {
    hideTooltip(planet);
    }, 2000);
  });
});


// Event listeners för varje planet-element (div), som visar bild på planet. -> planetImages.js
planetImgLib.forEach(planet => {
  let planetElem = document.getElementById(planet.planet);
  planetElem.addEventListener('click', () => showPlanetImage(planet.planet));
  });