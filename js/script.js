$(function() {
$(document).scroll(function () {
		var $nav = $(".navbar-fixed-top");
		$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
 	
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('section.ok').offset().top }, 'slow');
      return false;
    });
  });

$(document).ready(function () {
    AOS.init({
        duration: 1200,
        once: false,
        disable: 'mobile'
    });
});