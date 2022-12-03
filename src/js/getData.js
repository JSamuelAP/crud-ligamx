const getTeams = async () => {
	try {
		const res = await fetch("http://localhost:3000/equipos");
		const data = await res.json();

		if (!res.ok) {
			const msg = `${res.status} ${res.statusText}`;
			throw new Error(msg);
		}

		return data;
	} catch (error) {
		console.error(error);
	}
};

export default getTeams;
