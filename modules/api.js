//  Planetinfo hämtas från extern källa. API nyckel behöver skaffas. Hämtad planetinfo sparas sedan i Local Storage, där den vid kommande sökningar hämtas.

import {displayErrorMessage} from './displayErrors.js';

//Initierar hämtning av json-data med planetinfo från Local Storage. Om Local Storage tomt, så initieras hämtningen först från externa källan. API- nyckel genereras.

async function getPlanetData(){
  const storedData = localStorage.getItem('planetData');
  if (storedData) {
    // If data exists, parse and return it
    const parsedData = JSON.parse(storedData);
    console.log('Data från Local Storage: ',parsedData);
    return parsedData;
  } else {  
    try {
      const data = await getPlanetDataAPIKey();
      return data;
    } catch (error) {
      console.log("Error:");
      throw error;
    } 
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
      throw new Error (" Kunde inte hämta API-nyckel.");
    }
    const keys = await response.json();
    console.log('API key:',keys);
    let apiKey= keys.key;
    console.log(apiKey);
    return importPlanetData(apiKey);
  } catch (error) {
    console.log("Error fel i anrop av API:", error);
    displayErrorMessage("Rymden är stor. Letar efter nyckeln. Fortsätt sök.");
  }
}
//Hämtar info om planeter och sparar json-filen som sträng i Local Storage där den finns tillgänglig.
async function importPlanetData(apiKey) {
  try {
    const response = await fetch ('https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies', {
      method: 'GET',
      headers: {'x-zocom': apiKey}
    });
    if (!response.ok) {
      throw new Error("Fel i anrop för planetdata");
    }
    const data = await response.json();
    localStorage.setItem('planetData', JSON.stringify(data));
    console.log("new api data gerarted");
    return data;
  } catch (error) {
    console.log("Error:", error.message);
   displayErrorMessage("Kontakten med rymden bruten. Försök igen.");
    throw error; 
  }
}

export{getPlanetData}