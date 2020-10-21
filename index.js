const track = document.querySelector('.carousel__track');

const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');

const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

//console.log(slideWidth);

//arrange the slides next to one another

/*slides[0].style.left = slideWidth * 0 + 'px';
slides[1].style.left = slideWidth *1 + 'px';
slides[2].style.left = slideWidth * 2 + 'px';*/

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
}
//when I click left, move slides to the left

prevButton.addEventListener('click', e =>{
  const currentSlide = track.querySelector('.current-slide');
  const prevSlide = currentSlide.previousElementSibling;

  moveToSlide(track, currentSlide, prevSlide);
})

//when I click right, move slides to the right

nextButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;

  moveToSlide(track, currentSlide, nextSlide);

})

// when I click on the nav indicators, move to the selected slide





/*
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 10000);
}

var slideIndextext = 0;
showSlidestext();

function showSlidestext() {
  var i;
  var slides = document.getElementsByClassName("mySlidestext");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndextext++;
  if (slideIndextext > slides.length) {slideIndextext = 1}
  slides[slideIndextext-1].style.display = "block";
  setTimeout(showSlidestext, 10000);
} 

*/