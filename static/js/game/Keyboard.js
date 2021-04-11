var KEY_LEFT = 37;
var KEY_RIGHT = 39;
var KEY_UP = 38;
var KEY_DOWN = 40;
var SPACE = 32;

function Keyboard(element) {
	this.element = element;

	this.pressed = [];
	this.fired = [];
	this.firedFunctions = [];

	var keyboard = this;

	element.addEventListener('keydown', function (event) {
		var key = event.keyCode;

		keyboard.pressed[key] = true;

		if (keyboard.firedFunctions[key] && !keyboard.fired[key]) {
			keyboard.fired[key] = true;
			keyboard.firedFunctions[key]();
		}
	});

	element.addEventListener('keyup', function (event) {
		keyboard.pressed[event.keyCode] = false;
		keyboard.fired[event.keyCode] = false;
	});

}

Keyboard.prototype = {
	isPressed: function (key) {
		return this.pressed[key];
	},

	onFire: function (key, callback) {
		this.firedFunctions[key] = callback;
	}

};

