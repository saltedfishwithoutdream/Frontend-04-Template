function match (selector, element) {
    let selectors = selector.split(/[\s]+/)

    let l = selectors.length

    if (!matchSingle(selectors[l - 1], element)) {
        return false
    } else if (l === 1) {
        return true
    }

    let parentEle = element.parentElement

    for (let i = l - 2; i >= 0; i--) {
        if (!parentEle) {
            return false
        }

        while (!matchSingle(selectors[i], parentEle)) {
            parentEle = parentEle.parentElement
            if (!parentEle) {
                return false
            }
        }

        parentEle = parentEle.parentElement
        
    }

    return true
}

function matchSingle (selector, element) {
    let selectorReg = /[#.]?[a-zA-Z][-_\w]+/g;
    let tagName = element.tagName.toLowerCase()
    let id = element.getAttribute('id') || ''
    let className = element.getAttribute('class') || ''
    let classNames = className.split(/[\s]+/)

    let items = selector.match(selectorReg)

    for (let item of items) {
        if (item.charAt(0) === '#' && item.slice(1) !== id) {
            return false
        }

        if (item.charAt(0) === '.' && classNames.indexOf(item.slice(1)) < 0) {
            return false
        }

        if (item.charAt(0) !== '#' && item.charAt(0) !== '.' && item !== tagName) {
            return false
        }
    }

    return true

}



console.log(match('div div#id.class1.class2.class-3', document.getElementById('id')))



