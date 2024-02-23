
import {displayErrorMessage} from './displayErrors.js';

async function PlanetStoredData(){
  try {
         // Check if data exists in local storage
         const storedData = localStorage.getItem('planetData');
         if (storedData) {
           // If data exists, parse and return it
           console.log(storedData);
           return JSON.parse(storedData);
          
         } else {  
    const apiKey = await getPlanetDataAPIKey();
    const data = await getPlanetInfo(apiKey);
    localStorage.setItem('planetData', JSON.stringify(data));
    console.log("new api data gerarted", data);
    return(data);
   }
   
  } catch (error) {
    console.log("Error:", error.message);
    console.log("Local Storage", storedData);
    displayErrorMessage("Kunde inte hämta planetdata. Försök igen senare.");
        throw error; // Rethrow the error for further handling
  }
}

async function getPlanetDataAPIKey() {
  try{
    const response = await fetch(
      "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys",
      {
        method: "POST"
      }
    );

    if (!response.ok) {
      throw new Error("Nätverksfel: Kunde inte hämta API-nyckel.");
  }

    const keys = await response.json();
    console.log('API key:',keys);
    let apiKey= keys.key;
    return apiKey;
  } catch (error) {
    console.log("Error:", error.message);
    displayErrorMessage("Rymden är stor. Letar efter nyckeln. Fortsätt sök.");
    throw error;
  }
}

async function getPlanetInfo(apiKey) {
  try {
    
    const response = await fetch ('https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies', {
      method: 'GET',
      headers: {'x-zocom': apiKey}
    });

    if (!response.ok) {
      throw new Error("Nätverksfel 2: Kunde inte hämta planetdata.");
      
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("Error:", error.message);
    displayErrorMessage("Kontakten med rymden bruten. Försök igen.");
    throw error; 
  }
}

export{PlanetStoredData}