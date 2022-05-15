let bodyHTML = document.querySelector('#root')
let tag

// Header HTML
let headerHTML = createHTMLTag('header', 'header-layout', 'header-id')
bodyHTML.appendChild(headerHTML)

let headerContent = document.getElementById('header-id')
tag = createHTMLTag('div', 'h-content-s', 'hcontent')
headerContent.appendChild(tag)

{
  // Header Content
  let header = document.querySelector('#hcontent')
  tag = createHTMLTag('div', 'hh-left')
  header.appendChild(tag)
  tag = createHTMLTag('div', 'hh-center')
  header.appendChild(tag)
  tag = createHTMLTag('div', 'hh-right')
  header.appendChild(tag)

  addClassInChildElements('othersh', header)
}

// Hidden Content Left
tag = createHTMLTag('div', 'left-content-hidden')
bodyHTML.appendChild(tag)

// Container Page
tag = createHTMLTag('div', 'container-s')
bodyHTML.appendChild(tag)

{
  // Content Container
  let container = document.querySelector('.container-s')
  tag = createHTMLTag('div', 'c-content-s', 'c-content-box')
  container.appendChild(tag)
  let container2 = document.querySelector('#c-content-box')
  createSeveralElements(13, 'div', 'cbox-card', container2)
}

// Hidden Content Right
tag = createHTMLTag('div', 'right-content-hidden')
bodyHTML.appendChild(tag)

// Footer
tag = createHTMLTag('footer', 'footer-s')
bodyHTML.appendChild(tag)
createSeveralElements(10, 'div', 'fftest', document.querySelector('.footer-s'))
