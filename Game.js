function Game(){
  
}

Game.prototype.init = function(){

  this.gameWorld = new GameWorld();
}

Game.prototype.start = function(){
  PoolGame.init();

  PoolGame.mainLoop();
}

Game.prototype.mainLoop = function (){
  Canvas.clear();//preps for update
  PoolGame.gameWorld.update(); // pulls new data requests
  PoolGame.gameWorld.draw(); // draws it :)
  Mouse.reset(); // resets mouse
  requestAnimationFrame(PoolGame.mainLoop);
}

let PoolGame = new Game();