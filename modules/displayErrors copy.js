let errorMesPlaceholder= document.getElementById('errorMessagePlaceholder');

function displayErrorMessage(errorMessage) {
  const errorMes = document.createElement('p');
  errorMes.className='text';
  errorMes.textContent = errorMessage;
  errorMesPlaceholder.style.display = 'block';
  errorMesPlaceholder.appendChild(errorMes) ;

window.addEventListener('click', () => {
  errorMesPlaceholder.style.display = 'none';
  errorMesPlaceholder.removeChild(errorMes);

})
};

export {displayErrorMessage}