import getTeams from "./getData";
import printTeams from "./printData";
import Component from "./Component";

const table = new Component({
	el: "#teams-table tbody",
	data: {
		teamsList: [],
	},
	template: function (props) {
		let teams = props.teamsList
			.map(
				(team) => `
          <tr class="border-b">
            <td class="p-4 whitespace-nowrap">${team.nombre}</td>
            <td class="p-4 whitespace-nowrap text-slate-500">${team.ciudad}</td>
            <td class="p-4 text-slate-500">${team.titulos}</td>
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
		return teams;
	},
});

document.addEventListener("DOMContentLoaded", async () => {
	const teams = await getTeams();
	printTeams(teams);
});

export default table;
