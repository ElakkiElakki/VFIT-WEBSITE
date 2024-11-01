document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for navigation links
  document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default anchor behavior
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth' // Scroll smoothly to the target section
      });
    });
  });
});

// Selecting the side-navbar element
var sideNavbar = document.querySelector(".side-navbar");

// Function to show the side navbar
function shownavbar() {
  sideNavbar.style.display = "block"; // Show navbar by changing display to block
  sideNavbar.style.left = "0"; // Move the navbar to the visible area
}

// Function to hide the side navbar
function shownavbarclose() {
  sideNavbar.style.left = "-100%"; // Hide navbar by moving it off-screen
  setTimeout(() => {
    sideNavbar.style.display = "none"; // After animation, hide it completely
  }, 300); // Match the transition duration in CSS (if set to 0.3s)
}
