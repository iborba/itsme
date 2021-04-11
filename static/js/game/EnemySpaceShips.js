function EnemySpaceShips(context, keyboard, spaceShipImage, animation, startPosition) {
	this.context = context;
	this.keyboard = keyboard;
	this.animation = animation;
	this.speedX = 1;
	this.speedY = 1;
	this.width = 20;
	this.height = 25;
	this.x = startPosition;
	this.y = -100 // Starts before appears in screen
	this.spaceShipImage = spaceShipImage;
	this.spritesheet = new Spritesheet(this.context, this.spaceShipImage, 3, 3);
}

EnemySpaceShips.prototype = {
	update: function () {
		randomInt = this.getRandomInt(1, 400)
		// Move laterally the enemies
		if (randomInt <= 200) {
			this.x -= this.speedX;
		}
		else {
			this.x += this.speedX;
		}
		// Shoot as enemy just if a random number is higher than a random constant
		if (randomInt > 391) {
			this.shoot()
		}

		// Move ahead the enemy fleet
		this.y += this.speedY;
	},

	getRandomInt: function (min, max) {
		min = Math.ceil(min); 
		max = Math.floor(max); 

		return Math.floor(Math.random() * (max - min)) + min;
	},

	draw: function () {
		this.spritesheet.line = 2;
		this.spritesheet.column = 0;

		this.spritesheet.draw(this.x, this.y);
		this.spritesheet.nextFrame();
	},

	shoot: function () {
		var bullet = new Bullet(this.context, this, true);
		this.animation.newSprite(bullet);
	}
}