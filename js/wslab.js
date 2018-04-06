$(function () {
  $('#wslab-open-menu').on('click', function () {
    $('#wslab-modal-menu').show();
  })
  $('#wslab-modal-close').on('click', function () {
    $('#wslab-modal-menu').hide();
  })

  $('#wslab-scroll-contact,#wslab-top-contact').on('click', function () {
    $("html,body").animate({
      scrollTop: $('.wslab-contact').offset().top - 80
    });
  });
})