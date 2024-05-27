//! HOLDS THE WEBSITE TOGETHER (IDK HOW THOUGH)

var $content = $('header .content')
  , $blur    = $('header .overlay')
  , wHeight  = $(window).height();

$(window).on('resize', function(){
  wHeight = $(window).height();
});


function Scroller()
{
  this.latestKnownScrollY = 0;
  this.ticking            = false;
}

Scroller.prototype = {
 
  init: function() {
    window.addEventListener('scroll', this.onScroll.bind(this), false);
    $blur.css('background-image',$('header:first-of-type').css('background-image'));
  },


  onScroll: function() {
    this.latestKnownScrollY = window.scrollY;
    this.requestTick();
  },

};

//! ANIMATION INTERSECTION OBSERVER

var scroller = new Scroller();  
scroller.init();

const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
      console.log(entry)
      if (entry.isIntersecting){
        entry.target.classList.add("show");
      }
    } );
  } );
  
  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) =>observer.observe(el));


//!PROGRESS BAR ANIMATION

increase();
function increase(startAnimation) {
  // Change the variable to modify the speed of the number increasing from 0 to (ms)
  let SPEED = 15;
  // Retrieve the percentage value
  let limit = parseInt(document.getElementById("value1").innerHTML, 10);

  if (startAnimation) {
      for (let i = 0; i <= limit; i++) {
          setTimeout(function () {
              document.getElementById("value1").innerHTML = i + "%";
          }, SPEED * i);
      }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const reviewHolder = document.querySelector('.review-holder');

  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add("show");
              increase(true); // Start the animation when the class "show" is added
          } 
      });
  });

//!HEADPHONE CYCLE

  // Observe the review-holder element
  observer.observe(reviewHolder);
});

$(document).ready(function() {
  $('.color-choose input').on('click', function() {
    var headphonesColor = $(this).attr('data-image');
    $('.active').fadeOut(500).removeClass('active');
    $('.left-column img[data-image=' + headphonesColor + ']').fadeIn(250).addClass('active');
    $(this).addClass('active');
  });
});
