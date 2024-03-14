function updateWeatherInfo(response) {
  console.log(response.data);
}

function searchCity(city) {
  /*API integration*/
  let apiKey = `13a56ff39448765fetfb01ea96o19e8c`;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeatherInfo);
}

function searchEngine(event) {
  event.preventDefault();

  /*Assigning this action to activate the input field */
  let searchForm = document.querySelector(".search-input");

  /*Assigning this action to activating the transition on the h1 */
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchForm.value;
}

let searchFormElement = document.querySelector(".search-form"); //Targets to activate the entire form
searchFormElement.addEventListener("submit", searchEngine);
