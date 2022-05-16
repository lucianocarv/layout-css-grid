// Functions
function createHTMLTag(element, classname, father, id = undefined) {
  let e = document.createElement(`${element}`)
  e.classList.add(`${classname}`)
  if (id !== undefined) {
    e.setAttribute('id', `${id}`)
  } else {
  }
  return father.appendChild(e)
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
  console.log(arrE)
}
