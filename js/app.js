$(document).foundation();

// Main Navigation Toggle Function
var menuToggle = function() {
   $("nav").slideToggle("fast", function() {});
   // Icon Toggle
   if ($('#hamburger i').text() === 'menu') {
      $('#hamburger i').text('clear');
   } else {
      $('#hamburger i').text('menu');
   }
};
// Main Navigation Toggle (On Mouse Click)
$('#hamburger').click(function() {
   menuToggle();
});
// Main Navigation Toggle (On Enter)
$("#hamburger").keyup(function(event) {
   if (event.keyCode == 13) {
      menuToggle();
   }
});


// Portfolio Item Toggle Function
$('.portfolio-item-header').click(function(){
   $(this).next('.portfolio-item-body').slideToggle("fast");
   // Portfolio Arrow Toggle
   if ( $(this).find('.toggle-arrow').text() === 'keyboard_arrow_down' ) {
      $(this).find('.toggle-arrow').text('keyboard_arrow_up');
   } else {
      $(this).find('.toggle-arrow').text('keyboard_arrow_down');
   }
});


// Lightbox Modal
$('.portfolio-gallery-container a').click(function(){
   var id = $(this).attr('id');
   var src = $(this).find('img').attr('src');
   $('#lightbox img').attr('src', src);
});
