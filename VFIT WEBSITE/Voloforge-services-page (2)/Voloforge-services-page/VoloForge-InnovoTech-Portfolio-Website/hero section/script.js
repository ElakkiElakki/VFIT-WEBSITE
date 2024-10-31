let slideIndex = 0;
showSlide(slideIndex);

function changeSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  let slides = document.getElementsByClassName("slide");
  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex = n;
  }
  
  // Hide all slides
  for (let slide of slides) {
    slide.classList.remove("active");
  }
  
  // Show the current slide
  slides[slideIndex].classList.add("active");
}

function openMoreVideosPage() {
  window.location.href = "https://www.youtube.com/"; // Redirect to the page with more videos
}
