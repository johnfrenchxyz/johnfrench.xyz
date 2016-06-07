$(document).foundation();
$(document).ready(function() {
   $('#hamburger').click(function() {
      $("nav").slideToggle("fast", function() {});
      // Icon Toggle
      if ( $('#hamburger i').text() === 'menu' ) {
         $('#hamburger i').text('clear');
      } else {
         $('#hamburger i').text('menu');
      }
   });
});
