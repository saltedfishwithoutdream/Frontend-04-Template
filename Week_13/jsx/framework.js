export function createElement (type, attributes, ...children) {
    let ele = null
    if (typeof type === 'string') {
      ele = new ElementWrapper(type)
    } else {
      ele = new type()
    }
    for (name in attributes) {
      ele.setAttribute(name, attributes[name])
    }
    for (let child of children) {
      if (typeof child === 'string') {
        child = new TextWrapper(child)
      }
      ele.appendChild(child)
    }
    return ele
}

export class Component {
    constructor () {
    }
    
    setAttribute (name, value) {
        this.root.setAttribute(name, value)
    }
    appendChild (child) {
        child.mountTo(this.root)
    }
    mountTo (parent) {
        parent.appendChild(this.root)
    }
}
  
class ElementWrapper extends Component{
    constructor (type) {
      this.root = document.createElement(type)
    }
    
}
  
class TextWrapper extends Component{
    constructor (content) {
      this.root = document.createTextNode(content)
    }
}