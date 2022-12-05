import getTeams from "./getData.js";
import printTeams from "./printData.js";

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

		printTeams(await getTeams());
	} catch (error) {
		return error;
	}
};

export default postTeam;
