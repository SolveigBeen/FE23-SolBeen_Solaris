
import {displayErrorMessage} from './displayErrors.js';

async function PlanetStoredData(){
  try {
    const apiKey = await getPlanetDataAPIKey();
    const data = await getPlanetInfo(apiKey);
    console.log(data);
    return(data);
  } catch (error) {
    console.log("Error:", error.message);
    // Handle the error here
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

    const keys = await response.json();
    console.log('API key:',keys);
    let apiKey= keys.key;
    return apiKey;
  } catch (error) {
    displayErrorMessage("Rymden är stor. Letar efter nyckeln. Fortsätt sök.");
    throw new Error("Rymden är stor. Letar efter nyckeln. Fortsätt sök.");
  }
}

async function getPlanetInfo(apiKey) {
  try {
    
    const response = await fetch ('https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies', {
      method: 'GET',
      headers: {'x-zocom': apiKey}
    });

    if (!response.ok) {
      displayErrorMessage('Rymden är stor. Kontakten med raketen bruten.');
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    displayErrorMessage("Kontakten med rymden bruten. Försök igen.");
  }
}

export{PlanetStoredData}