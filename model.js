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
    if($('.snake').css("top").slice(0,-2) <= $('.food').css("top").slice(0,-2) && $('.food').css("top").slice(0,-2) <= (eval($('.snake').css("height").slice(0,-2)) + eval($('.food').css("top").slice(0,-2))) && $('.snake').css("left").slice(0,-2) <= $('.food').css("left").slice(0,-2) && $('.food').css("left").slice(0,-2) <= eval($('.snake').css("width").slice(0,-2)) + eval($('.food').css("left").slice(0,-2))){
      Controller.moveFood();
      Model.increaseSnakeLength();
    }
  },
  increaseSnakeLength: function(){
    Controller.growSnake();
  }
}
