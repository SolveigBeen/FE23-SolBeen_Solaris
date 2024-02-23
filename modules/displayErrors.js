//Display errors. Funktioner som visar fel-information för användaren: API-nyckel som inte hittas, överföring av planet-info som misslyckas, eller att användaren söker info om planeet som inte finns tillgänglig.

const errorMesPlaceholder = document.getElementById("errorMessagePlaceholder");
let errorMes;

// Olika User-error meddelanden visas under raketen. Nytt DOM element skapas i placeholdern.
function displayErrorMessage(errorMessage) {
  errorMes = document.createElement("p");
  errorMes.className = "text";
  errorMes.textContent = errorMessage;
  errorMesPlaceholder.style.display = "block";
  errorMesPlaceholder.appendChild(errorMes);
}

// User-error meddelande stängs med klick. 
errorMesPlaceholder.addEventListener("click", hideErrorMessage);

function hideErrorMessage() {
  if (errorMes && errorMes.parentNode === errorMesPlaceholder) {
    errorMesPlaceholder.removeChild(errorMes);
    errorMesPlaceholder.style.display = "none";
    errorMes = null; // Reset the error message reference
  }
}

export { displayErrorMessage, hideErrorMessage };