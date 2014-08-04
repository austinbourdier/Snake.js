MasterController = {
  initialize: function(){
    this.subscribe();
  },
  subscribe: function(){
    $(document).on("eat", function(){
      Controller.moveFood();
    })
    $(document).on("move", function(){
      Model.chooseEnemyDirection();
    })
  }
}

