import getTeams from "./getData.js";
import printTeams from "./printData.js";
import postTeam from "./postData.js";

const form = document.querySelector("#form form");
const inputName = form.querySelector("#form-name");
const inputCity = form.querySelector("#form-city");
const inputTitles = form.querySelector("#form-titles");

document.addEventListener("DOMContentLoaded", async () => {
	const teams = await getTeams();
	printTeams(teams);
});

document.addEventListener("submit", async (e) => {
	if (e.target !== form) return;
	e.preventDefault();

	const name = inputName.value.trim();
	const city = inputCity.value.trim();
	const titles = +inputTitles.value;

	// Some field is empty
	if (!name || !city) {
		console.error("Empty fields");
		return;
	}

	// POST
	await postTeam(name, city, titles);

	form.reset();
});
