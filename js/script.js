function toggleHumbuger() {
  let sideNavElement = document.querySelector('.side-nav-container');
  sideNavElement.classList.toggle('active');
}

window.addEventListener('resize', function () {
  if (window.innerWidth >= 769) {
    document.querySelector('.side-nav-container').classList.remove('active');
  }
});