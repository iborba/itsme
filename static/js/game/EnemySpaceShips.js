function EnemySpaceShips(context, keyboard, spaceShipImage, animation, startPosition, enemyName) {
	this.context = context;
	this.keyboard = keyboard;
	this.animation = animation;
	this.enemyName = enemyName;
	this.spaceShipImage = spaceShipImage;
	this.speedX = 1;
	this.speedY = this.getRandomInt(0.7, 7);
	this.width = 20;
	this.height = 25;
	this.x = startPosition * this.getRandomInt(1, this.enemyName)
	this.y = -100 // Starts before appears in screen
	this.spritesheet = new Spritesheet(this.context, this.spaceShipImage, 3, 3);
	this.hitsCount = 0
	this.hits = []
	this.maxHits = 3
}

EnemySpaceShips.prototype = {
	update: function () {
		for (var i = 0; i < alliedShoots.length; i++) {
			alliedShoots[i].y += alliedShoots[i].speed;

			if ((alliedShoots[i].x >= this.x - this.width && alliedShoots[i].x <= this.x + this.width) && (alliedShoots[i].y >= this.y - this.height && alliedShoots[i].y <= this.y + this.height)) {
				this.hitsCount += 1;
				this.hits[this.enemyName] = { 'hits': this.hitsCount }
				alliedShoots.splice(i, 1)

				if (this.hits[this.enemyName]['hits'] === this.maxHits) {
					// Kill the enemy
					this.killed(this.enemyName)
				}
			}
		}

		// Move laterally the enemies
		if (this.enemyName % 2 === 0) {
			// hit the limit of screen (ships to the left)
			if (this.x + this.width <= this.width / 2) {
				this.speedX = this.speedX * -1; // INVERT DIRECTION
			}

			this.x -= this.speedX; // TO LEFT ORIGINALLY
		}
		else {
			// hit the limit of screen (ships to the right)
			if (this.x + this.width >= this.context.canvas.clientWidth - this.width / 2) {
				this.speedX = this.speedX * -1; // INVERT DIRECTION
			}

			this.x += this.speedX; // TO RIGHT ORIGINALLY
		}

		// Shoot as enemy just if a random number is higher than a random constant
		let randomNumber = this.getRandomInt(1, 400)
		if (randomNumber > 391) {
			// this.shoot()
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

	killed: function (enemyName) {
		// TODO: Implement the explosion
		for (var i = 0; i < this.animation.sprites.length; i++) {
			if (this.animation.sprites[i].enemyName === enemyName) {
				this.animation.sprites.splice(i, 1)
			}
		}
	},

	shoot: function () {
		var bullet = new Bullet(this.context, this, true);
		enemyShoots[enemyShoots.length] = { 'x': this.x, 'y': this.y, 'speed': bullet.speed, 'enemyName': this.enemyName }

		this.animation.newSprite(bullet);
	}
}