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

$(document).ready(function(e) {
        $('img[usemap]').rwdImageMaps();
});

$('#beitou').on('click', function(){
    layer.open({
      type: 1,
      shadeClose: true,
      area: ['60vmin', '80vmin'],
      title:false,
      content: '<img class="img-fluid" src="../img/info-beitou.png">'
    });
  });

$('#shilin').on('click', function(){
  layer.open({
    type: 1,
    shadeClose: true,
    area: ['60vmin', '80vmin'],
    title:false,
    content: '<img class="img-fluid" src="../img/info-shilin.png">'
  });
});

$('#neihu').on('click', function(){
  layer.open({
    type: 1,
    shadeClose: true,
    area: ['60vmin', '80vmin'],
    title:false,
    content: '<img class="img-fluid" src="../img/info-neihu.png">'
  });
});

$('#datong').on('click', function(){
  layer.open({
    type: 1,
    shadeClose: true,
    area: ['60vmin', '80vmin'],
    title:false,
    content: '<img class="img-fluid" src="../img/info-datong.png">'
  });
});

$('#zhongshan').on('click', function(){
  layer.open({
    type: 1,
    shadeClose: true,
    area: ['60vmin', '80vmin'],
    title:false,
    content: '<img class="img-fluid" src="../img/info-zhongshan.png">'
  });
});

$('#songshan').on('click', function(){
  layer.open({
    type: 1,
    shadeClose: true,
    area: ['60vmin', '80vmin'],
    title:false,
    content: '<img class="img-fluid" src="../img/info-songshan.png">'
  });
});

$('#wanhua').on('click', function(){
  layer.open({
    type: 1,
    shadeClose: true,
    area: ['60vmin', '80vmin'],
    title:false,
    content: '<img class="img-fluid" src="../img/info-wanhua.png">'
  });
});

$('#zhongzheng').on('click', function(){
  layer.open({
    type: 1,
    shadeClose: true,
    area: ['60vmin', '80vmin'],
    title:false,
    content: '<img class="img-fluid" src="../img/info-zhongzheng.png">'
  });
});

$('#daan').on('click', function(){
  layer.open({
    type: 1,
    shadeClose: true,
    area: ['60vmin', '80vmin'],
    title:false,
    content: '<img class="img-fluid" src="../img/info-daan.png">'
  });
});

$('#xinyi').on('click', function(){
  layer.open({
    type: 1,
    shadeClose: true,
    area: ['60vmin', '80vmin'],
    title:false,
    content: '<img class="img-fluid" src="../img/info-xinyi.png">'
  });
});

$('#nangang').on('click', function(){
  layer.open({
    type: 1,
    shadeClose: true,
    area: ['60vmin', '80vmin'],
    title:false,
    content: '<img class="img-fluid" src="../img/info-nangang.png">'
  });
});

$('#wenshan').on('click', function(){
  layer.open({
    type: 1,
    shadeClose: true,
    area: ['60vmin', '80vmin'],
    title:false,
    content: '<img class="img-fluid" src="../img/info-wenshan.png">'
  });
});
