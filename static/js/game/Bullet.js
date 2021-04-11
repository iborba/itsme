function Bullet(context, ship, isEnemy = false) {
   this.context = context;
   this.ship = ship;

   this.width = 3;
   this.height = 25;
   this.x = ship.x + 18;
   this.y = ship.y;
   this.speed = -20;

   if (isEnemy) {
      this.y = this.y + 33;
      this.speed = this.speed * -1;
      this.color = '#ff0000';
   } else {
      this.color = '#00ea00';
   }
   this.border = '1px solid #ffffff';
}

Bullet.prototype = {
   update: function () {
      this.y += this.speed;
   },
   draw: function () {
      var ctx = this.context;
      ctx.save();
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
      ctx.restore();
   }
}
