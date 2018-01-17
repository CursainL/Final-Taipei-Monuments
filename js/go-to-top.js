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



function geolocation(){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(geo_success, geo_error, geo_options);
    } else{
        console.log('Geolocation is not support by this browser');
    }
}
function geo_success(position){
    var crd = position.coords;
    console.log('latitude: ' + crd.latitude);
    console.log('longitude: ' + crd.longitude);
    getReverseGeocodingData(crd.latitude, crd.longitude);

}
function geo_error(err){
    console.warn('ERROE(' + err.code + '): ' + err.message)
}
var geo_options = {
    enableHighAccuracy: true,
    maxmumAge:60000,
    timeout:10000
};


function getReverseGeocodingData(lat, lng) {
    var latlng = new google.maps.LatLng(lat, lng);
    // This is making the Geocode request
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'latLng': latlng }, function (results, status) {
        if (status !== google.maps.GeocoderStatus.OK) {
            alert(status);
        }
        // This is checking to see if the Geoeode Status is OK before proceeding
        if (status == google.maps.GeocoderStatus.OK) {
            console.log(results);
            var address = (results[0].formatted_address);
            var userArea = (results[0]["address_components"][3]["short_name"])
            console.log(userArea);
            jumpToArea(userArea);
        }
    });
}

function jumpToArea(areaName){
  alert("您的位置在"+areaName);
  switch (areaName) {
    case "大安區":
      document.location.href="./html/daan.html"
      break;
    case "中正區":
      document.location.href="./html/zhongzheng.html"
      break;
    case "大同區":
      document.location.href="./html/datong.html"
      break;
    case "中山區":
      document.location.href="./html/zhongshan.html"
      break;
    case "松山區":
      document.location.href="./html/songshan.html"
      break;
    case "萬華區":
      document.location.href="./html/wanhua.html"
      break;
    case "信義區":
      document.location.href="./html/xinyi.html"
      break;
    case "士林區":
      document.location.href="./html/shilin.html"
      break;
    case "北投區":
      document.location.href="./html/beitou.html"
      break;
    case "內湖區":
      document.location.href="./html/neihu.html"
      break;
    case "南港區":
      document.location.href="./html/nangang.html"
      break;
    case "文山區":
      document.location.href="./html/wenshan.html"
      break;
    default:
      alert("無法判斷您的所在區域或不在台北市內！")
      break;

  }
}
