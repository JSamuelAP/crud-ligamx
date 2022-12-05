import getTeams from "./getData.js";
import printTeams from "./printData.js";
import Component from "./Component.js";
import postTeam from "./postData.js";

const Table = new Component({
	el: "#teams-info",
	data: {
		teamsList: [],
		error: "",
	},
	template: function (props) {
		if (props.error) {
			return `
        <div class="text-center font-bold py-7 bg-red-100 rounded-sm border-2 border-red-200">
          <p class="text-4xl text-red-400">${props.error}</p>
        </div>
      `;
		}

		if (props.teamsList.length === 0) {
			return `
        <div class="text-center font-bold py-5">
          <p class="text-4xl text-slate-500">Aun no hay equipos aquí</p>
          <p class="text-3xl text-slate-400">Comienza a registrar</p>
        </div>
      `;
		}

		let teamsRows = props.teamsList
			.map(
				(team) => `
          <tr class="border-b">
            <td class="p-4 whitespace-nowrap">${team.name}</td>
            <td class="p-4 whitespace-nowrap text-slate-500">${team.city}</td>
            <td class="p-4 text-slate-500">${team.titles}</td>
            <td class="p-4 whitespace-nowrap">
              <button
                class="bg-sky-500 hover:bg-sky-600 py-1 px-4 rounded-sm text-white mr-4"
              >Editar</button>
              <button
                class="bg-red-500 hover:bg-red-700 py-1 px-4 rounded-sm text-white"
              >Eliminar</button>
            </td>
          </tr>
    `
			)
			.join("");

		const teamsTable = `
      <table class="table-auto w-full text-left">
        <thead class="bg-slate-50 rounded-t-sm">
          <tr class="border-b">
            <th scope="col" class="p-4 min-w-max">Nombre</th>
            <th scope="col" class="p-4 min-w-max">Ciudad</th>
            <th scope="col" class="p-4 min-w-max">Titulos</th>
            <th scope="col" class="p-4 min-w-max">Acciones</th>
          </tr>
        </thead>
        <tbody>${teamsRows}</tbody>
      </table>
    `;

		return teamsTable;
	},
});

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

export default Table;
