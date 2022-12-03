/**
 * fetch the teams from the API
 * @returns An array of team objects
 */
const getTeams = async () => {
	try {
		const res = await fetch("http://localhost:3000/team");
		const data = await res.json();

		if (!res.ok) {
			const msg = `${res.status} ${res.statusText}`;
			throw new Error(msg);
		}

		return data;
	} catch (error) {
		return error;
	}
};

export default getTeams;
