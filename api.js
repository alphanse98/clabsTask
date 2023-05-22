var cities;

function getData() {
  return fetch("https://mocki.io/v1/0284e710-d376-4c46-b1fe-1a22e1b89a0f")
    .then(response => response.json())
    .then(jsonData => {
      cities = jsonData.cities;
    })
    .catch(error => {
      console.error(error);
    });
}
getData().then(() => {
  console.log( "The Promise is done")

  let displayWeather = (param) => {
    for(let i=0; i<cities.length; i++){
      if(cities[i]?.name == param){
        console.log('The current weather in London is '+ cities[i]?.weather.temperature +' temperature with partly cloud.')
      }
    }
  }
  displayWeather('London')
});