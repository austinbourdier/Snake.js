$(document).ready(function(){
  Controller.initialize(Model, View);
  Controller.bindEventListeners();
  $('.enemy').each(function(){
    $(this).css("top", String((Math.round(Math.random()*40)*10)+100) + "px");
    $(this).css("left", String((Math.round(Math.random()*40)*10)+100) + "px");
  })
})
