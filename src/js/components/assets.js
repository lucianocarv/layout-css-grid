// Functions
function createHTMLTag(element, classname, id = undefined) {
  let e = document.createElement(`${element}`)
  e.classList.add(`${classname}`)
  if (id !== undefined) {
    e.setAttribute('id', `${id}`)
  } else {
  }
  return e
}

function addClassInChildElements(classname, elements) {
  elements.childNodes.forEach((e) => {
    e.classList.add(`${classname}`)
  })
}

const createSeveralElements = (amount, tag, classname, father) => {
  let arrE = []
  for (let i = 0; i < amount; i++) {
    let e = document.createElement(tag)
    e.classList.add(classname)
    arrE.push(e)
  }
  arrE.forEach((e) => {
    father.appendChild(e)
  })
}
