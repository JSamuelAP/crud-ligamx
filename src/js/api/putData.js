import printTeams from "../ui/printData.js";

/**
 * It sends a PUT request with the data of the team to be updated
 * @param {Number} id - The id of the team to update
 * @param {String} name - The name of the team
 * @param {String} city - The city where the team is based
 * @param {Number} titles - number of titles won by the team
 * @returns A promise with a string of the result
 */
const putTeam = async (id, name, city, titles) => {
	try {
		const options = {
			method: "PUT",
			headers: { "Content-type": "application/json; charset=utf-8" },
			body: JSON.stringify({ name, city, titles }),
		};

		const res = await fetch(`http://localhost:3000/teams/${id}`, options);

		if (!res.ok) {
			const msg = `${res.status} ${res.statusText}`;
			throw new Error(msg);
		}

		printTeams();
		return new Promise((resolve, reject) =>
			resolve("Equipo actualizado con éxito")
		);
	} catch (error) {
		return new Promise((resolve, reject) => reject(`Error: ${error.message}`));
	}
};

export default putTeam;
