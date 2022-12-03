import getTeams from "./getData";
import printTeams from "./printData";
import Component from "./Component";

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

document.addEventListener("DOMContentLoaded", async () => {
	const teams = await getTeams();
	printTeams(teams);
});

export default Table;
