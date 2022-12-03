/**
 * Create a component
 * @class
 * @classdesc Class to create a reactive component.
 * @param {Object} options
 * @type {String} el Element ID
 * @type {Object} data State
 * @type {function} template Function to create the inner HTML element
 * @example
 *  new Component({
 *    el: "#button",
 *    data: {value: 'Show'},
 *    template: function (props) {
 *      return `<span>${props.value}</span>`
 *    }
 *  })
 */
const Component = (function () {
	/**
	 * @constructs
	 * @param {Object} options
	 */
	const Constructor = function (options) {
		this.el = options.el;
		this.data = options.data;
		this.template = options.template;
	};

	/**
	 * Embed the HTML template inside the element
	 * @method
	 */
	Constructor.prototype.render = function () {
		const $el = document.querySelector(this.el);

		if (!$el) return;

		$el.innerHTML = this.template(this.data);
	};

	/**
	 * Update the State and render
	 * @method
	 * @param {Object} obj New values of the State
	 */
	Constructor.prototype.setState = function (obj) {
		for (let key in obj) {
			if (this.data.hasOwnProperty(key)) {
				this.data[key] = obj[key];
			}
			this.render();
		}
	};

	/**
	 * Get the State
	 * @method
	 */
	Constructor.prototype.getState = function () {
		return JSON.parse(JSON.stringify(this.data));
	};

	return Constructor;
})();

export default Component;
