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

var scrollTopPos,demoTop,jqCssTop,jqTop,jsTop,mid1,mid2,mid3,mid4;

function getVals(){
  scrollTopPos = $(window).scrollTop();
  demoTop = $("#demo").position().top;
  jqCssTop = $("#jq-css").position().top;
  jqTop = $("#jq-only").position().top;
  jsTop = $("#js-only").position().top;
  mid1 = demoTop/2;
  mid2 = (demoTop+jqCssTop)/2;
  mid3 = (jqCssTop+jqTop)/2;
  mid4 = (jqTop+jsTop)/2;
}

$(window).resize(function() {
  var vH = $(window).height();
  getVals();
});

$(window).scroll(function(){
  getVals();
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

  // var index = 0;
  // var hovEnter;
  // var hovLeave;
  // $( ".tiles" )
  // .mouseenter(function() {
  //   $(".tile-wrapper").removeClass(hovLeave,1500,"easeInOut");
  //   index = $(this).attr("index");
  //   hovEnter = "hover-"+index;
  //   hovLeave = hovEnter;
  //   $(".tile-wrapper").addClass(hovEnter,1500,"easeInOut");
  // });

  var imgArr = ['https://s11.postimg.org/wh8cjfzwz/image.jpg','https://s11.postimg.org/esglrto5v/image.jpg',
'https://s11.postimg.org/83a2bt2tv/image.jpg','https://s11.postimg.org/96u6nrngz/image.jpg',
'https://s11.postimg.org/7t7567dlf/image.jpg','https://s11.postimg.org/o5h6vxrwz/image.jpg',
'https://s11.postimg.org/4c5338ej7/image.jpg','https://s11.postimg.org/niia6ev0z/image.jpg',
'https://s11.postimg.org/41xkjvzwz/image.jpg','https://s11.postimg.org/437idb1qr/image.jpg',
'https://s11.postimg.org/taiedk4ur/image.jpg','https://s11.postimg.org/pff0azloz/image.jpg',
'https://s11.postimg.org/7dvvd6ro3/background.jpg'];

// jquery only example

$(".tiles")
  .mouseenter(function() {
    index = $(this).attr("index");
    // var image = '../images/'+index+'.jpg';
    // $(".tile-wrapper").css({'background-image' : 'url('+image+')','background-repeat': 'no-repeat'});
    $(".tile-wrapper").css({'background-image' : 'url('+imgArr[--index]+')','background-repeat': 'no-repeat'});
  });


// javascript only example

// function imgChange(index){
//     // var image = '../images/'+index+'.jpg';
//     // wrap.style.backgroundImage = "url("+image+")";
//     wrap.style.backgroundImage = "url("+imgArr[--index]+")";
//   wrap.style.backgroundRepeat = "no-repeat";
// }
// for(i=1;i<=12;i++){
//   var tile = document.getElementsByClassName("tiles")[i];
//   var wrap = document.getElementById('tile-wrapper');
//   tile.onmouseover = function() {
//     var index = this.getAttribute('index');
//     imgChange(index);
//   };
// }

// images load in javascript

// document.onload=function(){
//   for(i=1;i<=12;i++){
//     imgChange(i);
//   }
// };

// images load in jQuery

$(document).ready(function(){
  for (var i = 1; i <= 12; i++) {
    $(".tiles[index="+i+"]").mouseenter();
  }
});
