let bodyHTML = document.querySelector('#root')

// Header HTML
createHTMLTag('header', 'header-layout', bodyHTML, 'header-id')

let headerContent = document.querySelector('#header-id')
createHTMLTag('div', 'h-content-s', headerContent, 'hcontent')

{
  // Header Content
  let header = document.querySelector('#hcontent')
  createHTMLTag('div', 'hh-left', header)
  createHTMLTag('div', 'hh-center', header)
  createHTMLTag('div', 'hh-right', header)

  addClassInChildElements('othersh', header)
}

// Hidden Content Left
createHTMLTag('div', 'left-content-hidden', bodyHTML)

// Container Page
createHTMLTag('div', 'container-s', bodyHTML)

{
  // Content Container
  let container = document.querySelector('.container-s')
  createHTMLTag('div', 'c-content-s', container, 'c-content-box')
  let container2 = document.querySelector('#c-content-box')
  createSeveralElements(13, 'div', 'cbox-card', container2)
}

// Hidden Content Right
createHTMLTag('div', 'right-content-hidden', bodyHTML)

// Footer
createHTMLTag('footer', 'footer-s', bodyHTML)
createSeveralElements(10, 'div', 'fftest', document.querySelector('.footer-s'))
