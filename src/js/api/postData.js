import printTeams from "../ui/printData.js";

/**
 * It sends a POST request with the data of the team to be created
 * @param {String} name - The name of the team
 * @param {String} city - The city where the team is based
 * @param {Number} titles - number of titles won by the team
 * @returns A promise with a string of the result
 */
const postTeam = async (name, city, titles) => {
	try {
		const options = {
			method: "POST",
			headers: { "Content-type": "application/json; charset=utf-8" },
			body: JSON.stringify({ name, city, titles }),
		};

		const res = await fetch("http://localhost:3000/teams", options);

		if (!res.ok) {
			const msg = `${res.status} ${res.statusText}`;
			throw new Error(msg);
		}

		printTeams();
		return new Promise((resolve, reject) =>
			resolve("Equipo registrado con éxito")
		);
	} catch (error) {
		return new Promise((resolve, reject) => reject(`Error: ${error.message}`));
	}
};

export default postTeam;
