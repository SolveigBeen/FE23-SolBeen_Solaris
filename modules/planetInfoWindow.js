
/*Declaration of DOM-elements in the Modal-Fakta*/
const planetName = document.getElementById('planetName');
const planetLatinName = document.getElementById('planetLatinName');
const planetDesc = document.getElementById('description');
const planetOmkr = document.getElementById('omkrets');
const distSun = document.getElementById('distSun');
const maxTemp = document.getElementById('maxTemp');
const minTemp = document.getElementById('minTemp');
const planetMoons = document.getElementById('moons');

const sun= document.getElementById("sun");
const rocketContainer=document.getElementById('rocket');
const headerTitles = document.querySelector('.header__titles')
const planetSystem = document.querySelectorAll('.planet')


function openInfoWindowForPlanet(data, planetSearchName){
  modal(); 
  writeInfo(data, planetSearchName);
  planetInfoMode();
  clearInput();
}


/* Skapa modalt fönster för att visa info om planeter */
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


/* Populera Modal-Fakta med planet-info*/
function writeInfo(data, planetSearchName){
 let planet = data.bodies.find(planet => planet.name === planetSearchName);
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

/* Göm header och solsystem. Gör solen blå */
function planetInfoMode(){
  sun.style.backgroundColor='blue';
  rocketContainer.style.display= 'none';
  headerTitles.style.display= 'none';
  planetSystem.forEach(planet => {
    planet.style.display = 'none';
  });
}


/* Nollställer och förbereder drop-down för ny sökning*/
function clearInput() {
  planetSearchName.value = '';
}

export {openInfoWindowForPlanet}