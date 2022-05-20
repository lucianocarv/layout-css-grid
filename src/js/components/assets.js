// Functions
function createHTMLTag(element, classname, dad, id = undefined) {
  let e = document.createElement(`${element}`)
  e.classList.add(`${classname}`)
  if (id !== undefined) {
    e.setAttribute('id', `${id}`)
  } else {
  }
  return dad.appendChild(e)
}

function addClassInChildElements(element, classname) {
  element.childNodes.forEach((e) => {
    classname.forEach((cls) => {
      e.classList.add(cls)
    })
  })
}

function addSimpleClassInElements(elements, classname) {
  elements.forEach((e) => {
    classname.forEach((cls) => {
      e.classList.add(cls)
    })
  })
}

const createSeveralElements = (amount, tag, classname, dad) => {
  let arrE = []
  for (let i = 0; i < amount; i++) {
    let e = document.createElement(tag)
    e.classList.add(classname)
    arrE.push(e)
  }
  arrE.forEach((e) => {
    dad.appendChild(e)
  })
}

function addAllChilds(pai, classname, element) {
  pai.childNodes.forEach((e) => {
    let el = document.createElement(element)
    el.classList.add('bi')
    el.classList.add(classname)
    el.classList.add('adr')
    e.appendChild(el)
  })
}
