var View = {
  leftSnake: function(){
    $('.snake').animate({"left": "-=10px" }, "fast" );
  },
  upSnake: function(){
    $('.snake').animate({"top": "-=10px" }, "fast" );
  },
  rightSnake: function(){
    $('.snake').animate({"left": "+=10px" }, "fast" );
  },
  downSnake: function(){
    $('.snake').animate({"top": "+=10px" }, "fast" );
  },
  animateFood: function (event){
    $('.food').css("top", String(Math.round(Math.random()*50)*10) + "px");
    $('.food').css("left", String(Math.round(Math.random()*50)*10) + "px");
  },
  increaseSnakeSize: function (event){
   $('.snake').animate({"height": "+=10"}, "fast");
   $('.snake').animate({"width": "+=10"}, "fast");
  }
}

