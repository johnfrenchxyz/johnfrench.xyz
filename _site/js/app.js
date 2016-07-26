// Mobile Nav Toggle
//----------------
$('.toggle-overlay').click(function() {
   // Toggle Menu Arrow Direction
   if ($('.toggle-arrow').text() === 'expand_more') {
      $('.toggle-arrow').text('expand_less');
   } else {
      $('.toggle-arrow').text('expand_more');
   }
   if ( $('.small-nav-container').hasClass('is-open') ) {
      $('.small-nav-container').removeClass('is-open');
   } else {
      $('.small-nav-container').addClass('is-open');
   }
   $('.small-nav-container li a').click(function(){
      $('.small-nav-container').removeClass('is-open');
   });
});

// Mobile Nav Close on Resize
//---------------------------
$(window).resize(function() {
   if ($('.small-nav-container').hasClass('is-open') === true) {
      $('.small-nav-container').removeClass('is-open');
   }
   // Toggle Menu Arrow Direction
   if ($('.toggle-arrow').text() === 'expand_less') {
      $('.toggle-arrow').text('expand_more');
   }
});
