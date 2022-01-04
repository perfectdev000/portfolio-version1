(function ($) {
  "use strict";

  // Back to top button
  $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
          $('.back-to-top').fadeIn('slow');
      } else {
          $('.back-to-top').fadeOut('slow');
      }
  });
  $('.back-to-top').click(function () {
      $('html, body, main').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
      return false;
  });
    
  // Smooth scrolling on the navbar links
  $(".nav-item").on('click', function (event) {
    console.log("nav-item clicked")
      if (this.hash !== "") {
          event.preventDefault();
          
          $('html, body, main').animate({
              scrollTop: $(this.hash).offset().top - 70
          }, 1500, 'easeInOutExpo');
          
          if ($(this).parents('.navbar-nav').length) {
              $('.navbar-nav .active').removeClass('active');
              $(this).closest('a').addClass('active');
          }
      }
  });  
  
})(jQuery);

