import getTeams from "./getData.js";
import printTeams from "./printData.js";

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

		printTeams(await getTeams());
		return new Promise((resolve, reject) =>
			resolve("Equipo actualizado con éxito")
		);
	} catch (error) {
		return new Promise((resolve, reject) => reject(`Error: ${error.message}`));
	}
};

export default putTeam;
