/*Declaration of DOM-elements in the Modal-Fakta*/
const planetName = document.getElementById('planetName');
const planetLatinName = document.getElementById('planetLatinName');
const planetDesc = document.getElementById('description');
const planetOmkr = document.getElementById('omkrets');
const distSun = document.getElementById('distSun');
const maxTemp = document.getElementById('maxTemp');
const minTemp = document.getElementById('minTemp');
const planetMoons = document.getElementById('moons');



/* Populera Modal-Fakta med planet-info*/
function writeInfo(data, planetSearchName){
  let planet = data.bodies.find(planet => planet.name === planetSearchName);
 console.log(planet);

 planetName.innerText = planet.name;
 planetLatinName.innerText = planet.latinName;
 planetDesc.innerText = planet.desc;
 distSun.innerText = planet.distance;
 planetOmkr.innerText = planet.circumference;
 maxTemp.innerText = planet.temp.day;
 minTemp.innerText = planet.temp.night;
 const moonsString = planet.moons.toString(); 
 const moonsArray = moonsString.split(',');
 const moonsWithSpaces = moonsArray.join(', ');
 planetMoons.innerText = moonsWithSpaces;

}





  export{writeInfo}
 /*export {checkSearchPlanetIsAvailable} */ 