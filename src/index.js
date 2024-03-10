function searchCity() {
  /*API integration*/
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
