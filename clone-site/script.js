$(document).ready(function () {
    $("img").hover(
      function () {
      $(this).animate({
        width: "+=15px",
        height: "+=15px"
      });
    },
      function () {
        $(this).animate({
          width: "-=15px",
          height: "-=15px"
        })
      })
  });
