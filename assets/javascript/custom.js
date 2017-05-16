document.addEventListener('DOMContentLoaded', function() {

  function setAsideHeight() {
    width = window.innerWidth
    aside = document.getElementsByClassName('aside')[0]
    sectionBody = document.getElementsByClassName('section-body')[0]

    sectionBody.style.width = (width - 300) + 'px'
    aside.style.minHeight = sectionBody.offsetHeight + 25 + 'px'
  }

  window.setTimeout(setAsideHeight, 500)
});