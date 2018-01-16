//with navshadow spy included
jQuery(document).ready(function() {
  var a = 220,
      b = 400;
  jQuery(window).scroll(function() {
    jQuery(this).scrollTop() > a ? jQuery(".back-to-top").fadeIn(b) : jQuery(".back-to-top").fadeOut(b)
  }), jQuery(".back-to-top").click(function(a) {
    return a.preventDefault(), jQuery("html, body").animate({
      scrollTop: 0
    }, b), !1
  })
});

$(window).scroll(function() {
  var y = $(window).scrollTop();
  if (y > 0) {
    $(".nav-customize").addClass('--not-top');
  } else {
    $(".nav-customize").removeClass('--not-top');
  }
});
