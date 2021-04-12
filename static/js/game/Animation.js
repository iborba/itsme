function Animation(context) {
	this.context = context
	this.sprites = [];
	this.elements = []
	this.isPlaying = false;
	this.snow()
}

Animation.prototype = {
	newSprite: function (sprite) {
		this.sprites.push(sprite);
	},

	snow: function () {
		const num = 100;
		const size = 1;

		for (let i = 0; i < num; i++) {
			this.elements[i] = {
				x: Math.ceil(Math.random() * width),
				y: Math.ceil(Math.random() * height),
				size: Math.random() * size,
			};
		}

		context.clearRect(0, 0, width, height);
		for (let i = 0; i < num; i++) {
			var e = this.elements[i];
			context.beginPath();
			context.fillStyle = '#FFFFFF';
			context.arc(e.x, e.y, e.size, 0, 2 * Math.PI);
			context.fill();
		}
	},

	play: function () {
		this.isPlaying = true;
		this.nextFrame();
	},

	pause: function () {
		this.isPlaying = false;
	},

	stop: function() {
		this.pause();
		// TODO: Shows a resume of match
		// TODO: Save in sqlite the progress in game
	},
	
	nextFrame: function () {
		if (!this.isPlaying) {
			return;
		}

		this.snow();

		for (var i in this.sprites) {
			this.sprites[i].update();
		}

		for (var i in this.sprites) {
			this.sprites[i].draw();
		}

		var animation = this;
		requestAnimationFrame(function () {
			animation.nextFrame();
		});
	}
}