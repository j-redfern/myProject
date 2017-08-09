$(document).ready(function() {
  $("img").mouseover(function() {
    $("img").fadeTo('slow', 0.5);
  });

  $("img").mouseout(function() {
    $("img").fadeTo('slow', 1);
  });
});
