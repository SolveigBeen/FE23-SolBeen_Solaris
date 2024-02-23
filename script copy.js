"use strict";
/*variabel deklaration */

const searchBtn = document.getElementById("searchBtn");

// Get all planets  for tooltips
const planets = document.querySelectorAll('.planet');

const planetNames = [];   /*used in getAvailablePlanetNames*/


import {PlanetStoredData} from './modules/api.js';
import {planetInfoMode}  from './modules/display.js';
import {modal} from './modules/display.js';
import {writeInfo} from './modules/planetInfo.js';
import {displayErrorMessage} from './modules/displayErrors.js';
import{showTooltip} from './modules/tooltip.js';
import{hideTooltip} from './modules/tooltip.js';


searchBtn.addEventListener('click', async function(event) {
  event.preventDefault(); // Prevent default form submission behavior
  checkIfPlanetDataIsAvailable();
  const planetSearchName = document.getElementById("planetSearchName").value;
  console.log('rocket',planetSearchName);
 

    try {
      // Fetch planet data from the Local Storage
      const data = await PlanetStoredData();  
      // Get available planet names in array.
      getAvailablePlanetNames(data);
  
     if( checkSearchPlanetIsAvailable(planetNames,planetSearchName.value)){
        modal();  // Open and create modal window
        writeInfo(data, planetSearchName);  // Write planet information to the modal window
        planetInfoMode();  // Hide header and solar system elements
        clearInput();  // Clear search input field
      } else {
       throw new Error(data.message);
      }
    } catch (error) {
      // Handle any errors that occur during the process
      console.log('Error', error.message);
      displayErrorMessage("Rymden är stor. Ingen planet hittades.");
    }
    });


function checkIfPlanetDataIsAvailable(){
  const storedData = localStorage.getItem('planetData');
  if (storedData) {
    // If data exists, parse and return it
    console.log(storedData);
    console.log('Funkar,testar ny funktion');
    return JSON.parse(storedData);
    
          
         } else {  
          console.log('testar ny funktion');
}
}


 

/* Nollställer och förbereder drop-down för ny sökning*/
function clearInput() {
  planetSearchName.value = '';
}


function getAvailablePlanetNames(data) {
  for (const planet of data.bodies) {
    planetNames.push(planet.name);
  }
  return planetNames;
}

function checkSearchPlanetIsAvailable() {
  let status = planetNames.includes(planetSearchName.value);
console.log('sdfsf' ,planetSearchName.value)
console.log('gfgfg',planetNames);
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