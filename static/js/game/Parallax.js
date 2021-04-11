function Parallax(context, image, canvas) {
   this.context = context;
   this.image = image;
   this.speed = 0;
   this.joinPosition = 0;
   this.canvas = canvas;
}

Parallax.prototype = {
   update: function() {
      this.joinPosition += this.speed;
      
      if (this.joinPosition > this.image.height)
         this.joinPosition = 0;
   },
   draw: function() {
      var img = this.image;
      var y = this.joinPosition - this.canvas.height;

      this.context.drawImage(img, 0, y, this.canvas.width, this.canvas.height);
      
      y = this.joinPosition;
      this.context.drawImage(img, 0, y, this.canvas.width, this.canvas.height);
   }
}

