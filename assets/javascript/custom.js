document.addEventListener('DOMContentLoaded', function() {

  function setAsideHeight() {
    width = window.innerWidth
    aside = document.getElementsByClassName('aside')[0]
    sectionBody = document.getElementsByClassName('section-body')[0]

    // this needs to account for aside width, which is no longer fixed at 250px?
    sectionBody.style.width = (width - 250) + 'px'
    aside.style.minHeight = sectionBody.offsetHeight + 'px'
    // how do I make minHeight 100%?
  }

  window.setTimeout(setAsideHeight, 500)
});