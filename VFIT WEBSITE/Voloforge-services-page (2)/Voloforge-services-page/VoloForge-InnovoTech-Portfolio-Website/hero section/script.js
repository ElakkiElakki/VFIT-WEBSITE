document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('nav ul li a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });


  var para = document.querySelector(".side-navbar");

function shownavbar() {
    para.style.left = "0";
}

function shownavbarclose() {
    para.style.left = "-60%";
}
