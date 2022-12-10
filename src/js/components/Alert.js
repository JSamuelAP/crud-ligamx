import Component from "../ui/Component.js";

const Alert = new Component({
	el: "#alert",
	data: {
		message: "",
		type: "",
	},
	template: function (props) {
		if (!props.type) {
			return "";
		} else if (props.type === "error") {
			return `
        <div class="text-center font-bold py-7 bg-red-100 rounded-sm border-2 border-red-200">
					<img
						src="src/images/circle-exclamation.svg"
						alt=""
						class="h-9 inline align-baseline mr-1"
					/>
          <span class="text-4xl text-red-400">${props.message}</span>
        </div>
      `;
		} else if (props.type === "success") {
			return `
        <div class="text-center font-bold py-7 bg-green-100 rounded-sm border-2 border-green-200">
					<img
						src="src/images/circle-check.svg"
						alt=""
						class="h-9 inline align-baseline mr-1"
					/>
          <span class="text-4xl text-green-400">${props.message}</span>
        </div>
      `;
		}
	},
});

export default Alert;
