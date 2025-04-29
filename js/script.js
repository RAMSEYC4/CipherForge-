
// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  menuToggle.addEventListener('click', function () {
    navMenu.classList.toggle('active');
  });

  // Close menu when clicking outside
  document.addEventListener('click', function (event) {
    if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
      navMenu.classList.remove('active');
    }
  });
});