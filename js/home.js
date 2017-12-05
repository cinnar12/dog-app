$(document).ready(function(){
  $(".wrapper").fadeIn(750);
});

//attribution
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

//barking
$("#corgi").click(function() {
  new Audio("audio/barks1.mp3").play();
});

$("#pug").click(function() {
  new Audio("audio/barks2.mp3").play();
});

$("#husky").click(function() {
  new Audio("audio/barks3.mp3").play();
});

$("#shiba").click(function() {
  new Audio("audio/barks4.mp3").play();
});

$("#pom").click(function() {
  new Audio("audio/barks5.mp3").play();
});

$("#golden").click(function() {
  new Audio("audio/barks6.mp3").play();
});

$("#chihuahua").click(function() {
  new Audio("audio/barks7.mp3").play();
});
