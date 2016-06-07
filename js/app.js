$(document).foundation();
$(document).ready(function() {
   $('#hamburger').click(function() {
      $("nav").slideToggle("fast", function() {});
      $("#hamburger").replaceWith('<a id="hamburger"><i class="material-icons hamburger-icon">clear</i></a>');
   });
});
