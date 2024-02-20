"use strict";
/*variabel deklaration */

const searchBtn = document.getElementById("searchBtn");

const planetSearchName = document.getElementById("planetSearchName");
console.log(planetSearchName);

import { planetInfoMode}  from './modules/display.js';
import{writeInfo} from './modules/planetInfo.js';

searchBtn.addEventListener('click', async function(event) {
  event.preventDefault(); // Prevent default form submission behavior
  let searchPlanet = planetSearchName.value;
  console.log(searchPlanet);
  clearInput();     /* Nollställer och förbereder drop-down för ny sökning*/
  planetInfoMode();    /* Göm header och solsystem. Gör solen blå */
  modal();
  getPlanetInfo();
  try {
    const data = await getPlanetInfo(searchPlanet);
    writeInfo(data, searchPlanet);
  } catch (error) {
    console.log('Error', error);
  }
});


/* Nollställer och förbereder drop-down för ny sökning*/
function clearInput() {
  planetSearchName.value = '';
}

//Hämta information om planeter
async function getPlanetInfo(){
  try{
  const response = await fetch ('https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies', {
    method: 'GET',
    headers: {'x-zocom': 'solaris-2ngXkR6S02ijFrTP'}
});
if (!response.ok) {
  throw new Error('Rymden är stor. Ingen planet hittades.');
}

const data = await response.json();
  console.log(data);
return(data);

        
  } catch (error) {
      console.log('Error', error);
  }
}



/* Visa info om planeter i modalt fönster*/
function modal(){
  let modalContainer = document.createElement('div');
  modalContainer.className = 'modalbackground';
  document.body.appendChild(modalContainer);

  let modal = document.getElementById('myModal');
  modal.style.display = 'block';
 
  const closeBtn =document.getElementById('close-btn');
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.removeChild(modalContainer);
    location.reload();
  });
}

