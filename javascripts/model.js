var Model = {
  handler: function (event){
    var snakeTop = eval($('.snake').css("top").slice(0,-2));
    var snakeLeft = eval($('.snake').css("left").slice(0,-2))
    $('.snake').clearQueue();
    if (event.which == 37 &&  snakeLeft > eval($('#board').css("left").slice(0,-2))+10){
      Controller.moveSnake("left")
    } else if (event.which == 38 && snakeTop > eval($('#board').css("top").slice(0,-2))+10){
      Controller.moveSnake("up");
    } else if (event.which == 39 && snakeLeft < eval($('#board').css("width").slice(0,-2))+80){
      Controller.moveSnake("right");
    } else if (event.which == 40 && snakeTop < eval($('#board').css("height").slice(0,-2))+80){
      Controller.moveSnake("down");
    }
    if(snakeTop == $('.food').css("top").slice(0,-2)  && $('.snake').css("left").slice(0,-2) == $('.food').css("left").slice(0,-2)){
      $(document).trigger("eat");
    }
    for(var enemyIndex = 0; enemyIndex < $('.enemy').size(); enemyIndex++){
      if(snakeTop == $('.enemy').eq(enemyIndex).css("top").slice(0,-2) && snakeLeft == $('.enemy').eq(enemyIndex).css("left").slice(0,-2)){
        Controller.die();
      }
    }
    $(document).trigger('move');
  },
  increaseSnakeLength: function(){
    Controller.growSnake();
  },
  chooseEnemyDirection: function(){
    var enemyIndex = 0;
    $('.enemy').each(function(){
      var direction = ['left', 'up', 'right', 'down'][Math.floor(Math.random()*4)]
      Controller.moveEnemy(direction, this, enemyIndex);
      enemyIndex++;
    })
  }
}
