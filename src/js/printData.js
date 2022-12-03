import table from "./main.js";

const printTeams = (teams) => {
	table.setState({ teamsList: teams });
	console.log(table);
};

export default printTeams;
