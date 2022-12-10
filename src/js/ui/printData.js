import Table from "../components/Table.js";

/**
 * Set the state of the Table component and render it
 * @param teams - an array of teams or a Error
 */
const printTeams = (teams) => {
	if (teams instanceof Error) {
		Table.setState({ teamsList: [], error: teams });
		return;
	}

	Table.setState({ teamsList: teams, error: "" });
};

export default printTeams;
