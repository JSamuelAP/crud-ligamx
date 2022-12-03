import Table from "./main.js";

/**
 * Set the state of the Table component and render it
 * @param teams - an array of objects, each object representing a team.
 */
const printTeams = (teams) => {
	Table.setState({ teamsList: teams });
};

export default printTeams;
