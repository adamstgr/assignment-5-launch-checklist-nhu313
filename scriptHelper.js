// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
  let missionTarget = document.getElementById('missionTarget');
  missionTarget.innerHTML = 
    `
    <h2>Mission Destination</h2>
    <ol>
      <li>Name: ${name}</li>
      <li>Diameter:${diameter} </li>
      <li>Star: ${star}</li>
      <li>Distance from Earth: ${distance} </li>
      <li>Number of Moons: ${moons} </li>
    </ol>
    <img src="${imageUrl}">
    `
}
  // get the missionTarget div
  // set the inner HTML to this
  // fill in the information that is passed in
   // Here is the HTML formatting for our mission target div.
   /*
    `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
                `
   */


function validateInput(testInput) {
  if (testInput === '') {
    return 'Empty';
  } else if (isNaN(Number(testInput))) {
    return 'Not a Number'
  } else {
    return 'Is a Number'
  }
}
//check if the test Input is empty
    // if it is, return 'Empty'
  // check if it's not a number isNaN
    // return 'Not a Number'
  // else
    // return 'Is a Number'
function formSubmission(document, list, pilotValue, copilotValue, fuelLevelValue, cargoLevelValue) {
    if (validateInput(pilotValue) === 'Empty' || validateInput(copilotValue) === 'Empty' || validateInput(fuelLevelValue) === 'Empty' || validateInput(cargoLevelValue) === 'Empty') {
      alert('Please fill in all fields!');
    } else if (validateInput(fuelLevelValue) === 'Not a Number' || validateInput(cargoLevelValue) === 'Not a Number') {
      alert('Please enter a number for Fuel Level and Cargo Mass.');
    } else if (validateInput(pilotValue) === 'Is a Number' || validateInput(copilotValue) === 'Is a Number') {
      alert('Please enter a name comprised only of letters for the Pilot and Co-Pilot names.')
    } 
    list = document.getElementById('faultyItems');
    list.style.visibility = 'visible';

    let pilotStatus = document.getElementById('pilotStatus');
    pilotStatus.innerHTML = `Pilot ${pilotValue} is ready for launch`;

    let copilotStatus = document.getElementById('copilotStatus');
    copilotStatus.innerHTML = `Co-pilot ${copilotValue} is ready for launch`;

    let fuelStatus = document.getElementById('fuelStatus');
    let cargoStatus = document.getElementById('cargoStatus');
    let launchStatus = document.getElementById('launchStatus');

    if (Number(fuelLevelValue) < 10000 && Number(cargoLevelValue) > 10000) {
      fuelStatus.innerHTML = `Fuel level too low for launch`;
      cargoStatus.innerHTML = 'Cargo mass too heavy for launch';
      launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
      launchStatus.style.color = 'rgb(199, 37, 78)';
    } else if (Number(fuelLevelValue) < 10000) {
      console.log('cats');
      fuelStatus.innerHTML = `Fuel level too low for launch`;
      cargoStatus.innerHTML = 'Cargo mass low enough for launch';
      launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
      launchStatus.style.color = 'rgb(199, 37, 78)';
    } else if (Number(cargoLevelValue) > 10000) {
      console.log('dogs');
      cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
      fuelStatus.innerHTML = 'Fuel level high enough for launch';
      launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
      launchStatus.style.color = 'rgb(199, 37, 78)';
    } else {
      fuelStatus.innerHTML = 'Fuel level high enough for launch';
      cargoStatus.innerHTML = 'Cargo mass low enough for launch';
      launchStatus.innerHTML = 'Shuttle is Ready for Launch';
      launchStatus.style.color = 'rgb(65, 159, 106)';
    }
  };
  
  
  // check if any of the values are empty
    // if (validateInput(pilotValue) === 'Empty' || validateInput(copilotValue) === 'Empty')
    // alert user that they need to fill out all the fields alert('message')
  // check if fuelLevelValue and cargoLevelValue are not numbers
    // alert the user that must enter valid input


  // set the list.style.visibility = 'visible'
  // get the pilot status, update the inner HTML to say `Pilot ${pilotValue} is ready for launch`
  // get the copilot status, update the inner HTML to say `CoPilot ${copilotValue} is ready for launch`
  // check if the fuel level is less 10,000
    // change launchStatus to "Shuttle not ready for launch", and color to red
    // change the fuelStatus to "Fuel level too low for launch"

  // check if the cargo level is more than 10,000
    // change launchStatus to "Shuttle not ready for launch", and color to red
    // change the cargoStatus to "Cargo level too high for launch"

    // if both fuel and cargo are good
      // change the launchStatus to "Shuttle is Ready for Launch" and color to green
async function myFetch() {
    let planetsReturned;

  planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then(function (response) {
      return response.json()
  }).then(function (json) {
        console.log(json);
        return json;
      });

    return planetsReturned;
}

function pickPlanet(planets) {
  let planet = planets[(Math.floor(Math.random()*planets.length))];
  return planet;
}
// randomly pick a planet from the array
  // Math random for index
module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
