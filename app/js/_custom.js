document.addEventListener("DOMContentLoaded", function() {


  $(window).on('resize', function() {
    let width = $(window).width();
    if (width > 992) {
      $('.header__content').css('transform', 'translateX(0)')
    } else {
      $('.header__content').css('transform', 'translateX(-100%)')
    }
  })
  $('.header__hamburger').on('click', function() {
    $(this).toggleClass('header__hamburger_active')
    if ($('.header__hamburger').hasClass('header__hamburger_active')) {
      $('.header__content').css('transform', 'translateX(0)')
    } else {
      $('.header__content').css('transform', 'translateX(-100%)')
    }
  });

});
