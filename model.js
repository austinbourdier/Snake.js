var Model = {
  handler: function (event){
    if (event.which == 37){
      Controller.moveSnake("left");
    } else if (event.which == 38){
      Controller.moveSnake("up");
    } else if (event.which == 39){
      Controller.moveSnake("right");
    } else if (event.which == 40){
      Controller.moveSnake("down");
    }
    if(Math.abs($('.snake').css("top").slice(0,-2) - $('.food').css("top").slice(0,-2)) < 10 && Math.abs($('.snake').css("left").slice(0,-2) - $('.food').css("left").slice(0,-2)) < 10){
      Controller.moveFood();
      this.increaseSnakeLength();
    }
  },
  increaseSnakeLength: function(){
    Controller.growSnake();
  }
}
