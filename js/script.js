// using css files and jquery. files can be local or URL based writted in css.

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

// array of image URLs
  var imgArr = ['http://bit.ly/2cCQ2VK','http://bit.ly/2decFOU','http://bit.ly/2d2oO6c','http://bit.ly/2cCPdMK',
  'http://bit.ly/2cCQeEz','http://bit.ly/2d2nKiS','http://bit.ly/2cYFpMe','http://bit.ly/2cL0QNn',
  'http://bit.ly/2cCPJdm','http://bit.ly/2d5V8JW','http://bit.ly/2cX6SuM','http://bit.ly/2cKLTfS',];

// jquery only example

// $(".tiles")
//   .mouseenter(function() {
//     index = $(this).attr("index");
//     var image = 'https://github.com/prador/Tiles/tree/master/images/'+index+'.jpg';
//     // use local files for images
//     $(".tile-wrapper").css('background-image','url('+image+')');
//     // Use cdn based from array
//     // $(".tile-wrapper").css('background-image','url('+imgArr[--index]+')');
//   });


// javascript only example

// function imgChange(index){
// use local files for images
//     var image = 'https://github.com/prador/Tiles/tree/master/images/'+index+'.jpg';
//     wrap.style.backgroundImage = "url("+image+")";
// Use cdn based from array
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
