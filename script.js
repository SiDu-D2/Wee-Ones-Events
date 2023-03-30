$(document).ready(function() {
  // Image Slider
  $('.services ul').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000
  });

  // Booking Form
  $('#booking-form').submit(function(e) {
    e.preventDefault();
    // TODO: Handle form submission
  });

  // Pop-up Modals
  $('.modal-button').click(function() {
    var modalId = $(this).attr('data-modal');
    $(modalId).addClass('modal-active');
    $('body').addClass('modal-open');
  });

  $('.modal-close').click(function() {
    $(this).closest('.modal').removeClass('modal-active');
    $('body').removeClass('modal-open');
  });
});
