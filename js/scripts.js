$(document).ready(function() {
  $("#javascript-title").click(function() {
    $("#javascript-title").fadeToggle();
    $("#javascript-def").fadeToggle();
  });
  $("#javascript-def").click(function() {
    $("#javascript-title").fadeToggle();
    $("#javascript-def").fadeToggle();
  });
});
