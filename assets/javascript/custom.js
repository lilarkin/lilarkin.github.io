document.addEventListener('DOMContentLoaded', function() {
  function setAsideHeight() {
    navbarOffset = 80;
    nameHeaderOffset = 75;
    footerOffset = 60;
    totalOffset = navbarOffset + nameHeaderOffset + footerOffset;

    aside = document.getElementsByClassName('aside')[0]

    aside.style.minHeight = window.outerHeight - totalOffset + 'px'
  }

  setAsideHeight()
});