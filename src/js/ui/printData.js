import getTeams from "../api/getData.js";
import Table from "../components/Table.js";

/**
 * Set the state of the Table component and render it
 */
const printTeams = async () => {
	try {
		const res = await getTeams();
		Table.setState({ teamsList: res, error: "" });
	} catch (error) {
		Table.setState({ teamsList: [], error });
	}
};

export default printTeams;
