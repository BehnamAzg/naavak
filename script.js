
// Smooth scrolling
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

// change navbar background color on scroll
$(document).ready(function(){
  $(window).scroll(function(){
      if($(window).scrollTop() > 148){
          $(".navbar").css({"background-color":"white"});   
      }
      else{
          $(".navbar").css({"background-color":""});
      }

  })
});

// navbar disappear on scroll 
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-74px";
  }
  prevScrollpos = currentScrollPos;
};


// disappear button at top
window.addEventListener('scroll', e => {
  document.getElementById("goToTop").style.bottom = window.scrollY > 20 ? '20px' : '-60px';
});


// close Bootstrap navbar by clicking outside of navbar elements
$(document).ready(function () { 
  $(document).click(function () {
     // if($(".navbar-collapse").hasClass("in")){
       $('.navbar-collapse').collapse('hide');
     // }
  });
});

// type main title sentence and backspace what it's typed
var typed = new Typed(".auto-type", {
  strings: ["در مسیر رشد و توسعه", "لورم ایپسوم متن ساختگی", "متن ساختگی دو"],
  typeSpeed: 150,
  startDelay: 500,
  backSpeed: 150,
  backDelay: 2000,
  loop: true
});



// initialize bootstrap popovers
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
// card swiper section
let activeIndex = 0;
const groups = document.getElementsByClassName("card-group-wrapper");
const handleNextClick = () => {
  // Bump active index
  const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;
  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
        nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
  // Active group becomes after
  currentGroup.dataset.status = "after";
  // Next group becomes active
  nextGroup.dataset.status = "becoming-active-from-before";
    setTimeout(() => {
    nextGroup.dataset.status = "active";
    activeIndex = nextIndex;
  });
}

const handlePreviousClick = () => {
  const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : groups.length - 1;
  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
  nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
  currentGroup.dataset.status = "before";
  nextGroup.dataset.status = "becoming-active-from-after";
  setTimeout(() => {
    nextGroup.dataset.status = "active";
    activeIndex = nextIndex;
  });
} 





// scroll on drag
// const slider = document.querySelector('.post-row-wrapper');
// let isDown = false;
// let startX;
// let scrollLeft;

// slider.addEventListener('mousedown', (e) => {
//   isDown = true;
//   slider.classList.add('active');
//   startX = e.pageX - slider.offsetLeft;
//   scrollLeft = slider.scrollLeft;
// });
// slider.addEventListener('mouseleave', () => {
//   isDown = false;
//   slider.classList.remove('active');
// });
// slider.addEventListener('mouseup', () => {
//   isDown = false;
//   slider.classList.remove('active');
// });
// slider.addEventListener('mousemove', (e) => {
//   if(!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - slider.offsetLeft;
//   const walk = (x - startX) * 3; //scroll-fast
//   slider.scrollLeft = scrollLeft - walk;
//   console.log(walk);
// });




// Swiper
const swiper = new Swiper('.swiper', {
  centeredSlides: true,
  simulateTouch: false,
  loop: true,
  speed: 6000,
  waitForTransition: false,
  slidesPerView: 4,
  spaceBetween: 30,
  freeMode: true,
  grabCursor: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: true
  },
  freeModeMomentum: false
});



// $(".swiper").each(function(elem, target){
//   var test = target.swiper;
//   $(this).hover(function() {
//       test.setProgress(0, 0);
//   }, function() {
//       test.setProgress(0, 5000);
//   });
// });


// Tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// preloader
let loader = document.getElementById("preloader");
window.addEventListener("load", function(){
  loader.style.display = "none";
});
