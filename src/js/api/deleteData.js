import printTeams from "../ui/printData.js";

/**
 * It sends a DELETE request with the id of the team to be deleted
 * @param {Number} id - The id of the team to delete
 * @returns A promise with a string of the result
 */
const deteleTeam = async (id) => {
	try {
		const options = {
			method: "DELETE",
			headers: { "Content-type": "application/json; charset=utf-8" },
		};

		const res = await fetch(`http://localhost:3000/teams/${id}`, options);

		if (!res.ok) {
			const msg = `${res.status} ${res.statusText}`;
			throw new Error(msg);
		}

		printTeams();

		return new Promise((resolve, reject) =>
			resolve("Equipo eliminado con éxito")
		);
	} catch (error) {
		return new Promise((resolve, reject) => reject(`Error: ${error.message}`));
	}
};

export default deteleTeam;
