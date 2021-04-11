function Ball(context){
	
	this.context = context;
	this.x = 0;
	this.y = 0;
	this.speedX = 0;
	this.speedY = 0;
	this.color = 'black';
	this.radio = 5;
}

Ball.prototype = {
	
	update : function(){
		var ctx = this.context;

		var newX = this.x += this.speedX;
		var newY = this.y += this.speedY;

		if (newX <= this.radio || (newX > ctx.canvas.width - this.radio)) {
			this.speedX *= -1;
		}

		if (newY <= this.radio || (newY > ctx.canvas.height - this.radio)) {
			this.speedY *= -1;
		}

		this.x += this.speedX;
		this.y += this.speedY;
	},

	draw : function(){
		var ctx = this.context

		ctx.save();
		ctx.fillStyle = this.color;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radio, 0, 2* Math.PI, false);
		ctx.fill();
		ctx.restore();

	}
};