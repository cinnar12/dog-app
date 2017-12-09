$(document).ready(function(){
  $(".wrapper").fadeIn(750);
});

$("#navicon").click(function(){
  $("nav").slideToggle();
});

function showAll() {
  $("#corgi").fadeIn();
  $("#pug").fadeIn();
  $("#husky").fadeIn();
  $("#shiba").fadeIn();
  $("#pom").fadeIn();
  $("#golden").fadeIn();
  $("#german").fadeIn();
  $("#chihuahua").fadeIn();
  $("#dachshund").fadeIn();
  $("#samoyed").fadeIn();
}

function hideAll() {
  $("#corgi").fadeOut();
  $("#pug").fadeOut();
  $("#husky").fadeOut();
  $("#shiba").fadeOut();
  $("#pom").fadeOut();
  $("#golden").fadeOut();
  $("#german").fadeOut();
  $("#chihuahua").fadeOut();
  $("#dachshund").fadeOut();
  $("#samoyed").fadeOut();
}

//Category filters
$('select').change(function () {
  hideAll();
    if ($(this).find('option:selected').val() == "null") {
      showAll();
    }
    else if ($(this).find('option:selected').val() == "size1") {
      $("#corgi").fadeIn();
      $("#pom").fadeIn();
      $("#chihuahua").fadeIn();
      $("#dachshund").fadeIn();
    }
    else if ($(this).find('option:selected').val() == "size2") {
      $("#pug").fadeIn();
      $("#shiba").fadeIn();
    }
    else if ($(this).find('option:selected').val() == "size3") {
      $("#husky").fadeIn();
      $("#golden").fadeIn();
      $("#german").fadeIn();
      $("#samoyed").fadeIn();
    }
    else if ($(this).find('option:selected').val() == "family") {
      $("#corgi").fadeIn();
      $("#golden").fadeIn();
      $("#husky").fadeIn();

    };
});


//click
$("#corgi").click(function() {
  $("#corgifacts").slideToggle();
});

$("#corgiclose").click(function() {
  $("#corgifacts").slideToggle();
});

$("#pug").click(function() {
  $("#pugfacts").slideToggle();
});

$("#pugclose").click(function() {
  $("#pugfacts").slideToggle();
});

$("#husky").click(function() {
  $("#huskyfacts").slideToggle();
});

$("#huskyclose").click(function() {
  $("#huskyfacts").slideToggle();
});

$("#shiba").click(function() {
  $("#shibafacts").slideToggle();
});

$("#shibaclose").click(function() {
  $("#shibafacts").slideToggle();
});

$("#pom").click(function() {
  $("#pomfacts").slideToggle();
});

$("#pomclose").click(function() {
  $("#pomfacts").slideToggle();
});

$("#golden").click(function() {
  $("#goldenfacts").slideToggle();
});

$("#goldenclose").click(function() {
  $("#goldenfacts").slideToggle();
});

$("#german").click(function() {
  $("#germanfacts").slideToggle();
});

$("#germanclose").click(function() {
  $("#germanfacts").slideToggle();
});

$("#chihuahua").click(function() {
  $("#chihuahuafacts").slideToggle();
});

$("#chihuahuaclose").click(function() {
  $("#chihuahuafacts").slideToggle();
});

$("#dachshund").click(function() {
  $("#dachshundfacts").slideToggle();
});

$("#dachshundclose").click(function() {
  $("#dachshundfacts").slideToggle();
});

$("#samoyed").click(function() {
  $("#samoyedfacts").slideToggle();
});

$("#samoyedclose").click(function() {
  $("#samoyedfacts").slideToggle();
});
