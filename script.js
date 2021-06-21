let addBtn = document.querySelector('#btnAdd')
let menuList = document.querySelector('#menuList')

addBtn.addEventListener('click', addNewElementsLi)
menuList.addEventListener('click', getElements)

function addNewElementsLi(event) {
    let newLi = document.createElement('li');
    let elementsLi = document.getElementsByTagName('li')
    newLi.textContent = `пункт ${++elementsLi.length}`
    menuList.append(newLi);
}

function getElements(event) {
    if (event.target.tagName == 'LI') {
        if (event.target.getAttribute('data-symbol')) {
            return false
        } else {
            event.target.setAttribute('data-symbol', 'symbol');
            let targ = event.target.textContent;
            event.target.textContent = `${targ}!`
        }
    }

}

