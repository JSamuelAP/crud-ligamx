import Spinner from "../components/Spinner.js";

/**
 * fetch the teams from the API
 * @returns An array of team objects
 */
const getTeams = async () => {
	Spinner.setState({ active: true });
	try {
		const res = await fetch("http://localhost:3000/teams");
		const data = await res.json();

		if (!res.ok) {
			const msg = `${res.status} ${res.statusText}`;
			throw new Error(msg);
		}

		return new Promise((resolve, reject) => resolve(data));
	} catch (error) {
		return new Promise((resolve, reject) => reject(error));
	} finally {
		Spinner.setState({ active: false });
	}
};

export default getTeams;
