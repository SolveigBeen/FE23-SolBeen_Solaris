const sun= document.getElementById("sun");
const rocketContainer=document.getElementById('rocket');
const headerTitles = document.querySelector('.header__titles')
const planetSystem = document.querySelectorAll('.planet')

/* Göm header och solsystem. Gör solen blå */
function planetInfoMode(){
  sun.style.backgroundColor='blue';
  rocketContainer.style.display= 'none';
  headerTitles.style.display= 'none';
  planetSystem.forEach(planet => {
    planet.style.display = 'none';
  });
}

export {planetInfoMode}