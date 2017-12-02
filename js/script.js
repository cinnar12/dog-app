$(document).ready(function(){
  $(".wrapper").fadeIn(750);
});

$("#navicon").click(function(){
  $("nav").slideToggle();
});

$("#corgi").hover( function() {
  $("#att1").fadeToggle(300);
});

$("#pug").hover( function() {
  $("#att2").fadeToggle(300);
});

$("#husky").hover( function() {
  $("#att3").fadeToggle(300);
});

$("#shiba").hover( function() {
  $("#att4").fadeToggle(300);
});

$("#pom").hover( function() {
  $("#att5").fadeToggle(300);
});

$("#golden").hover( function() {
  $("#att6").fadeToggle(300);
});

$("#chihuahua").hover( function() {
  $("#att7").fadeToggle(300);
});
