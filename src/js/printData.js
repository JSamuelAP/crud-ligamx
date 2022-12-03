import Table from "./main.js";

const printTeams = (teams) => {
	Table.setState({ teamsList: teams });
};

export default printTeams;
