import printTeams from "./ui/printData.js";
import postTeam from "./api/postData.js";
import putTeam from "./api/putData.js";
import deleteTeam from "./api/deleteData.js";
import Table from "./components/Table.js";
import Alert from "./components/Alert.js";

const formHeading = document.querySelector("#form-heading");
const form = document.querySelector("#form form");
const inputName = form.querySelector("#form-name");
const inputCity = form.querySelector("#form-city");
const inputTitles = form.querySelector("#form-titles");
const buttonSubmit = form.querySelector("#form-submit");
const buttonCancel = form.querySelector("#form-cancel");

let editing = false;

document.addEventListener("DOMContentLoaded", async () => {
	form.reset();

	printTeams();
});

document.addEventListener("submit", async (e) => {
	if (e.target !== form) return;
	e.preventDefault();

	const name = inputName.value.trim();
	const city = inputCity.value.trim();
	const titles = +inputTitles.value;
	let alertData = { message: undefined, type: undefined };

	// Some field is empty
	if (!name || !city) {
		console.error("Empty fields");
		return;
	}

	if (!editing) {
		// POST
		try {
			const res = await postTeam(name, city, titles);
			alertData = { message: await res, type: "success" };
		} catch (error) {
			alertData = { message: error, type: "error" };
		}
	} else {
		// PUT
		try {
			const res = await putTeam(buttonSubmit.dataset.id, name, city, titles);
			alertData = { message: await res, type: "success" };
		} catch (error) {
			alertData = { message: error, type: "error" };
		}
	}

	form.reset();
	Alert.setState({ ...alertData });
	// Remove alert after 3 seconds
	setTimeout(() => {
		Alert.setState({ message: "", type: "" });
	}, 3000);
});

document.addEventListener("click", async (e) => {
	// Click on Edit button
	if (e.target.matches(".edit-button")) {
		editing = true;

		// Get team to modify
		const teams = Table.getState().teamsList;
		const teamEditing = teams.find((team) => team.id == e.target.dataset.id);

		// Enable last disabled delete button
		// Disable only delete button sibling
		enableDeleteButton();
		e.target.nextElementSibling.disabled = true;

		// Prepare form
		formHeading.innerText = "Edita un equipo";
		inputName.value = teamEditing.name;
		inputCity.value = teamEditing.city;
		inputTitles.value = teamEditing.titles;
		buttonSubmit.dataset.id = teamEditing.id;
		buttonSubmit.classList.replace("create-icon", "update-icon");
		buttonSubmit.value = "Actualizar";
		buttonCancel.classList.remove("hidden");
		scrollTo({
			behavior: "smooth",
			top: 0,
			left: 0,
		});
		// Click on Delte button
	} else if (e.target.matches(".delete-button")) {
		const deleteConfirmed = confirm(
			`¿Estás seguro de eliminar el equipo con id ${e.target.dataset.id}?`
		);

		// DELETE
		if (deleteConfirmed) {
			try {
				const res = await deleteTeam(e.target.dataset.id);
				alert(await res);
			} catch (error) {
				alert(error);
			}
		}
	}
});

document.addEventListener("reset", (e) => {
	if (e.target !== form) return;
	editing = false;
	buttonCancel.classList.add("hidden");
	formHeading.innerText = "Registrar un equipo";
	buttonSubmit.dataset.id = "";
	buttonSubmit.classList.replace("update-icon", "create-icon");
	buttonSubmit.value = "Crear";

	enableDeleteButton();
});

/**
 * If there is a delete button that is disabled, enable it.
 */
function enableDeleteButton() {
	const buttonDisabled = document.querySelector(".delete-button[disabled]");
	if (buttonDisabled) buttonDisabled.disabled = false;
}
