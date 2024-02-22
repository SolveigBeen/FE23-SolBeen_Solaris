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


export {planetInfoMode}
export {modal}