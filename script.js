"use strict";
/*variabel deklaration */
const planetSearchName = document.getElementById("planetSearchName");
const searchBtn = document.getElementById("searchBtn");

const sun= document.getElementById("sun");
const rocketContainer=document.getElementById('rocket');
const headerTitles = document.querySelector('.header__titles')
const planetSystem = document.querySelectorAll('.planet')

searchBtn.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default form submission behavior
  let searchPlanet=planetSearchName.value;
  console.log(searchPlanet);
  clearInput();     /* Nollställer och förbereder drop-down för ny sökning*/
  planetInfoMode();    /* Göm header och solsystem. Gör solen blå */
  modal()
});


/* Nollställer och förbereder drop-down för ny sökning*/
function clearInput() {
  planetSearchName.value = '';
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


//Hämta information om planeter
 fetch('https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies', {
    method: 'GET',
    headers: {'x-zocom': 'solaris-2ngXkR6S02ijFrTP'}
})
.then(res =>{
  if (res.ok){
    console.log('Success')
  }else{
    console.log('Rymden är stor. Ingen planet hittades.')
  }
  return res.json()
}) 

.then (data => console.log(data))
.catch(error => console.log('Error'))




/* Visa info om planeter i modalt fönster*/
function modal(){
  let modalContainer = document.createElement('div');
  modalContainer.className = 'modalbackground';
  document.body.appendChild(modalContainer);

  let modal = document.getElementById('myModal');
  let modalImage = document.getElementById('modalImage');
  let span = document.getElementsByClassName('close')[0];

  modal.style.display = 'block';
  

  span.onclick = function() {
    modal.style.display = 'none';
    document.body.removeChild(modalContainer);
  }
}

