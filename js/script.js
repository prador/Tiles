// scrolling

$('a[href*=#]:not(.jio)').on('click', function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1500);
});

$(".nav-tile.intro").addClass("active");

// adding current view item to navbar.

$('.nav-tile').click( function(){
    $('.nav-tile').removeClass("active");
    $(this).addClass("active");
});

// adding current view item to navbar on scrolling (scrollspy)

$(window).scroll(function(){
  var demoTop = $("#demo").position().top;
  var jqCssTop = $("#jq-css").position().top;
  var jqTop = $("#jq-only").position().top;
  var jsTop = $("#js-only").position().top;
  var scrollTopPos = $(window).scrollTop();
  var mid1 = demoTop/2;
  var mid2 = (demoTop+jqCssTop)/2;
  var mid3 = (jqCssTop+jqTop)/2;
  var mid4 = (jqTop+jsTop)/2;
  if((scrollTopPos >= 0) && (scrollTopPos <= mid1)) {
    $('.nav-tile').removeClass("active");
    $(".nav-tile.intro").addClass("active");
  } else if((scrollTopPos >= mid1) && (scrollTopPos <= mid2)) {
    $('.nav-tile').removeClass("active");
    $(".nav-tile.demo").addClass("active");
  } else if((scrollTopPos >= mid2) && (scrollTopPos <= mid3)) {
    $('.nav-tile').removeClass("active");
    $(".nav-tile.jq-css").addClass("active");
  } else if((scrollTopPos >= mid3) && (scrollTopPos <= mid4)) {
    $('.nav-tile').removeClass("active");
    $(".nav-tile.jq").addClass("active");
  } else {
    $('.nav-tile').removeClass("active");
    $(".nav-tile.js").addClass("active");
  }
});
// jQuery with css example

  var index = 0;
  var hovEnter;
  var hovLeave;
  $( ".tiles" )
  .mouseenter(function() {
    $(".tile-wrapper").removeClass(hovLeave,1500,"easeInOut");
    index = $(this).attr("index");
    hovEnter = "hover-"+index;
    hovLeave = hovEnter;
    $(".tile-wrapper").addClass(hovEnter,1500,"easeInOut");
  });

  var imgArr = ['http://bit.ly/2cCQ2VK','http://bit.ly/2decFOU','http://bit.ly/2d2oO6c','http://bit.ly/2cW8PbE',
  'http://bit.ly/2cCQeEz','http://bit.ly/2d2nKiS','http://bit.ly/2cYFpMe','http://bit.ly/2cL0QNn',
  'http://bit.ly/2cCPJdm','http://bit.ly/2d5V8JW','http://bit.ly/2cX6SuM','http://bit.ly/2cKLTfS',];

// jquery only example

// $(".tiles")
//   .mouseenter(function() {
//     index = $(this).attr("index");
//     var image = '../images/'+index+'.jpg';
//     $(".tile-wrapper").css('background-image','url('+image+')');
//     $(".tile-wrapper").css('background-image','url('+imgArr[--index]+')');
//   });


// javascript only example


// function imgChange(index){
//     // var image = '../images/'+index+'.jpg';
//     // wrap.style.backgroundImage = "url("+image+")";
//     wrap.style.backgroundImage = "url("+imgArr[--index]+")";
// }
// for(i=0;i<12;i++){
//   var tile = document.getElementsByClassName("tiles")[i];
//   var wrap = document.getElementById('tile-wrapper');
//   tile.onmouseover = function() {
//     var index = this.getAttribute('index');
//     imgChange(index);
//   };
// }
