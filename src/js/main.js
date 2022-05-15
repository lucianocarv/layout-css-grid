let bodyHTML = document.querySelector('#root')
let divHTML = document.createElement('div')
let spanHTML = document.createElement('span')
let pHTML = document.createElement('p')
let buttonHTML = document.createElement('button')

function createHTMLTag(element, sclass, id = undefined) {
  let e = document.createElement(`${element}`)
  e.classList.add(`${sclass}`)

  if (id !== undefined) {
    e.setAttribute('id', `${id}`)
  } else {
  }

  return e
}

// Header HTML
let headerHTML = createHTMLTag('header', 'header-layout', 'header-id')
bodyHTML.appendChild(headerHTML)

let headerContent = document.getElementById('header-id')
divHTML = createHTMLTag('div', 'h-content-s')
headerContent.appendChild(divHTML)

// Hidden Content Left
divHTML = createHTMLTag('div', 'left-content-hidden')
bodyHTML.appendChild(divHTML)

// Container Page
divHTML = createHTMLTag('div', 'container-s')
bodyHTML.appendChild(divHTML)

{
  // Content Container
  const container = document.querySelector('.container-s')
  divHTML = createHTMLTag('div', 'c-content-s', 'c-content-box')
  container.appendChild(divHTML)
}

// Hidden Content Right
divHTML = createHTMLTag('div', 'right-content-hidden')
bodyHTML.appendChild(divHTML)

// Footer
divHTML = createHTMLTag('footer', 'footer-s')
bodyHTML.appendChild(divHTML)
