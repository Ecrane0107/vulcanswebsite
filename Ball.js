const BALL_ORIGIN = new Vector2(25, 25);

//create ball and places it
function Ball(position){
  this.position = position;
}

Ball.prototype.update = function(){
  
}

Ball.prototype.draw = function(){
  Canvas.drawImage(sprites.whiteBall, this.position, BALL_ORIGIN);
}