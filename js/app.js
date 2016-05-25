$(document).foundation();
$(document).ready(function(){
   $('#hamburger').click(function(){
      $( "nav" ).slideToggle( "fast", function() {
    // Animation complete.
  });
   });
});
