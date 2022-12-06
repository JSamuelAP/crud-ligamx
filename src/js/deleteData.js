import getTeams from "./getData.js";
import printTeams from "./printData.js";

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

		printTeams(await getTeams());
	} catch (error) {
		return error;
	}
};

export default deteleTeam;
