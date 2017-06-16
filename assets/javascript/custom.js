$(document).ready(function() {
  function setAsideHeight() {
    navbarOffset = 80;
    nameHeaderOffset = 75;
    footerOffset = 60;
    totalOffset = navbarOffset + nameHeaderOffset + footerOffset;

    aside = document.getElementsByClassName('aside')[0]

    aside.style.minHeight = window.outerHeight - totalOffset + 'px'
  }

  setAsideHeight()

    function setSectionBodyHeight() {
    navbarOffset = 80;
    nameHeaderOffset = 75;
    footerOffset = 60;
    totalOffset = navbarOffset + nameHeaderOffset + footerOffset;

    sectionBody = document.getElementsByClassName('section-body')[0]

    sectionBody.style.minHeight = window.outerHeight - totalOffset + 'px'
  }

  setSectionBodyHeight()
});