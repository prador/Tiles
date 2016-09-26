// scrolling

$('a[href*=#]').on('click', function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
    $(this).find(".nav-tiles").toggleClass("active");
    console.log(this);
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
