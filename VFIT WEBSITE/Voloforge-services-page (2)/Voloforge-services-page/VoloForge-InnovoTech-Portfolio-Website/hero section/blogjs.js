let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slides[slideIndex - 1].classList.add("active");
}


document.addEventListener("DOMContentLoaded", function() {
    let date = new Date();
    let day = date.getDate();
    let videos = [
        "https://www.youtube.com/embed/IrS4BB459-0",
        "https://www.youtube.com/embed/iXcwfaCR-Mw",
        "https://www.youtube.com/embed/P4o8AonCFhI",
        
    ];
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].getElementsByTagName("iframe")[0].src = videos[i % videos.length];
    }
    showSlides(slideIndex);
});

function openMoreVideosPage() {
    window.location.href = 'more-videos.html';
}
