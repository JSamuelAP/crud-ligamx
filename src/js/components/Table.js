import Component from "../Component.js";

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
                class="edit-button bg-sky-500 hover:bg-sky-600 py-1 px-4 rounded-sm text-white mr-4"
                data-id="${team.id}"
              >
                <img
                  src="src/images/pen.svg"
                  alt=""
                  class="h-4 inline align-baseline mr-1"
                />
                Editar
              </button>
              <button
                class="delete-button bg-red-500 hover:bg-red-700 py-1 px-4 rounded-sm text-white disabled:bg-red-300"
                data-id="${team.id}"
              >
                <img
                  src="src/images/trash.svg"
                  alt=""
                  class="h-4 inline align-baseline mr-1"
                />
              Eliminar
              </button>
            </td>
          </tr>
    `
			)
			.join("");

		const teamsTable = `
      <table class="table-auto w-full text-left">
        <thead class="bg-slate-50 rounded-t-sm">
          <tr class="border-b">
            <th scope="col" class="p-4 min-w-max">
              Nombre
              <img
                src="src/images/shield.svg"
                alt=""
                class="h-4 inline align-baseline ml-1"
              />
            </th>
            <th scope="col" class="p-4 min-w-max">
              Ciudad
              <img
                src="src/images/location-dot.svg"
                alt=""
                class="h-4 inline align-baseline ml-1"
              />
            </th>
            <th scope="col" class="p-4 min-w-max">
              Titulos
              <img
                src="src/images/trophy.svg"
                alt=""
                class="h-4 inline align-baseline ml-1"
              />
            </th>
            <th scope="col" class="p-4 min-w-max">Acciones</th>
          </tr>
        </thead>
        <tbody>${teamsRows}</tbody>
      </table>
    `;

		return teamsTable;
	},
});

export default Table;
