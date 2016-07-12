// Mobile Nav Toggle
//----------------
$('.toggle-overlay').click(function() {
   // Toggle Menu Arrow Direction
   if ($('.toggle-arrow').text() === 'expand_more') {
      $('.toggle-arrow').text('expand_less');
   } else {
      $('.toggle-arrow').text('expand_more');
   }
   // Toggle Menu
   // $('.small-nav-container').slideToggle("fast", function() {
   //    // Animation Complete
   //    $(this).toggleClass('is-open');
   //    if ($(this).is(':visible'))
   //      $(this).css('display','flex');
   // });
   if ( $('.small-nav-container').hasClass('is-open') ) {
      $('.small-nav-container').removeClass('is-open');
   } else {
      $('.small-nav-container').addClass('is-open');
   }
});
// Mobile Nav Close on Resize
//---------------------------
$(window).resize(function() {
   if ($('.small-nav-container').hasClass('is-open') === true) {
      $('.small-nav-container').hide();
      $('.small-nav-container').removeClass('is-open');
   }
   // Toggle Menu Arrow Direction
   if ($('.toggle-arrow').text() === 'expand_less') {
      $('.toggle-arrow').text('expand_more');
   }
});
