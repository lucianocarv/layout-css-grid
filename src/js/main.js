let bodyHTML = document.querySelector('#root')
let divHTML = document.createElement('div')
let spanHTML = document.createElement('span')
let pHTML = document.createElement('p')
let buttonHTML = document.createElement('button')

function createTAG(element, sclass, id = undefined) {
  let elem = document.createElement(`${element}`)
  elem.classList.add(`${sclass}`)

  if (id !== undefined) {
    elem.setAttribute('id', `${id}`)
  } else {
  }

  return elem
}

// Header HTML
let headerHTML = createTAG('header', 'header-layout', 'header-id')
bodyHTML.appendChild(headerHTML)

let headerContent = document.getElementById('header-id')
divHTML = createTAG('div', 'h-content-s')
headerContent.appendChild(divHTML)

// Hidden Content Left
divHTML = document.createElement('div')
bodyHTML.appendChild(divHTML).classList.add('left-content-hidden')

// Container Page
divHTML = document.createElement('div')
bodyHTML.appendChild(divHTML).classList.add('container-s')

const container = document.querySelector('.container-s')
divHTML = document.createElement('div')
container.appendChild(divHTML).setAttribute('id', 'c-content-box')

// Hidden Content Right
divHTML = document.createElement('div')
bodyHTML.appendChild(divHTML).classList.add('right-content-hidden')

// Footer
divHTML = document.createElement('div')
bodyHTML.appendChild(divHTML).classList.add('footer-s')
