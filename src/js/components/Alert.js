import Component from "../Component.js";

const Alert = new Component({
	el: "#alert",
	data: {
		message: "",
		type: "",
	},
	template: function (props) {
		if (props.type === "error") {
			return `
        <div class="text-center font-bold py-7 bg-red-100 rounded-sm border-2 border-red-200">
          <p class="text-4xl text-red-400">${props.message}</p>
        </div>
      `;
		} else if (props.type === "success") {
			return `
        <div
					class="text-center font-bold py-7 bg-green-100 rounded-sm border-2 border-green-200"
        >
          <p class="text-4xl text-green-400">${props.message}</p>
        </div>
      `;
		}
	},
});

export default Alert;
