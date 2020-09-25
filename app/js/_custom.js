document.addEventListener("DOMContentLoaded", function() {



  $('.header__hamburger').on('click', function() {
    $(this).toggleClass('header__hamburger_active')
    if ($('.header__hamburger').hasClass('header__hamburger_active')) {
      $('.header__content').css('transform', 'translateX(0)')
    } else {
      $('.header__content').css('transform', 'translateX(-100%)')
    }
  });

});
