//När en planet i solsystemet klickas visas en jpg-bild. Den stängs om användaren klickar antingen på en annan planet, eller nån annastans.


const planetImgLib = [
  {planet:'merkurius',  src:'./images/merkur.jpg'},
  {planet:'venus', src:'./images/venus2.jpg'},
  {planet:'tellus', src:'./images/tellus.jpg'},
  {planet:'mars', src:'./images/mars.jpg'},
  {planet:'jupiter', src:'./images/jupiter.jpg'},
  {planet:'saturnus', src:'./images/saturnus5r.jpg'},
  {planet:'uranus', src:'./images/Uranus.jpg'},
  {planet:'neptunus', src:'./images/neptune.jpg'},
]

function showPlanetImage(planetId) {
  let planetElem = document.getElementById(planetId);
  
  //Om det redan finns en planetbild på skärmen, ska denna stängas innan ny bild visas:
  let existingImagePlaceElem = document.querySelectorAll('.imagePlaceClass');
  console.log(existingImagePlaceElem);

  if (existingImagePlaceElem.length > 0) {
    existingImagePlaceElem.forEach(existingImagePlaceElem => {
      existingImagePlaceElem.remove();
    });
  }

 // För att visa bild på planet skapas nya DOM-element i <div> för planeten (planetElem)
  let imagePlaceElem = document.createElement('div');
  imagePlaceElem.className = 'imagePlaceClass';
  imagePlaceElem.style.display = 'block';

//koppla vald planet till -jpg bil i objekt-array.
  let imageSrc = planetImgLib.find(planet => planet.planet === planetId)?.src;
 
  let newImageTag = document.createElement('img');
  newImageTag.className='imageTag';
  newImageTag.src = imageSrc;

  // Animera bilden så att den skalar upp vid visning. 
  newImageTag.style.height = '10';    
  void imagePlaceElem.offsetWidth;
  newImageTag.style.animation = 'growImage 1s forwards';

  imagePlaceElem.appendChild(newImageTag);
  planetElem.appendChild(imagePlaceElem);
  
//planetbild stängs när användaren klickar nånstans
document.body.addEventListener('click',(event) =>{
  let clickedElement = event.target;
  if (!clickedElement.classList.contains('planet')) {
    let existingImagePlaceElem = document.querySelector('.imagePlaceClass');
    if (existingImagePlaceElem) {
      existingImagePlaceElem.remove();
    }
  }
});
}




export {showPlanetImage, planetImgLib}