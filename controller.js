var Controller = {
  initialize: function(model, view){
    this.model = model;
    this.view = view;
    this.snake = Snake;
  },
  bindEventListeners: function(){
    $(document).on('keyup', this.model.handler);
  },
  moveSnake: function(direction){
    if (direction == "left"){
      this.view.leftSnake();
    } else if (direction == "up"){
      this.view.upSnake();
    } else if (direction == "right"){
      this.view.rightSnake();
    } else if (direction == "down"){
      this.view.downSnake();
    }
  },
  growSnake: function(){
    this.snake.length++;
    this.view.increaseSnakeSize(this.snake.length);
  },
  moveFood: function(){
    this.view.animateFood();
  }
}
