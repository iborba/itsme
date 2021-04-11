function Spritesheet(context, image, lines, columns) { 
   this.context = context; 
   this.image = image; 
   this.lines = lines; 
   this.columns = columns; 
   this.interval = 0; 
   this.line = 0; 
   this.column = 0; 
   this.endCycle = null;
} 

Spritesheet.prototype = { 
   nextFrame: function() {
      var now = new Date().getTime(); 

      // Se ainda não tem último tempo medido 
      if (! this.lastTime) this.lastTime = now; 

      // Já é hora de mudar de column? 
      if (now - this.lastTime < this.interval) return;

      if (this.column < this.columns - 1) {
         this.column++; 
      }
      else {
         this.column = 0;
         
         // Avisar que acabou um ciclo!
         if (this.endCycle) this.endCycle();
      }

      // Guardar hora da última mudança
      this.lastTime = now;
   },
   draw: function(x, y) {
      var width = this.image.width / this.columns; 
      var height = this.image.height / this.lines; 

      this.context.drawImage( 
         this.image, 
         width * this.column, 
         height * this.line, 
         width, 
         height, 
         x, 
         y, 
         width, 
         height 
      ); 
   }
}
