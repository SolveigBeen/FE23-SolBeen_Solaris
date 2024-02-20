const infoArr=['name','LatinName','rotation','circumference','temp','distance', 'desc', 'moons'];

const planetName = document.getElementById('planetName');
const planetLatinName = document.getElementById('planetLatinName');
const planetDesc = document.getElementById('description');
const planetOmkr = document.getElementById('omkrets');
const distSun = document.getElementById('distSun');
const maxTemp = document.getElementById('maxTemp');
const minTemp = document.getElementById('minTemp');
const planetMoons = document.getElementById('moons');

function writeInfo(data, searchPlanet){
  let planet = data.bodies.find(planet => planet.name === searchPlanet);
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
 console.log(planetLatinName);
}

  export{writeInfo}