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

export const STATE = Symbol('state')
export const ATTRIBUTE = Symbol('attribute')

export class Component {
    constructor () {
      this[ATTRIBUTE] = Object.create(null)
      this[STATE] = Object.create(null)
    }
    
    setAttribute (name, value) {
        this[ATTRIBUTE][name] = value
    }
    appendChild (child) {
        child.mountTo(this.root)
    }
    mountTo (parent) {
        if (!this.root) {
          this.render()
        }
        parent.appendChild(this.root)
    }

    render () {
      return this.root
    }

    triggerEvent (type, args) {
      this[ATTRIBUTE]['on' + type.replace(/^[\S\s]/, s => s.toUpperCase())](new CustomEvent(type, {detail: args}))
    }
}
  
class ElementWrapper extends Component{
    constructor (type) {
      super()
      this.root = document.createElement(type)
    }

   
    
}
  
class TextWrapper extends Component{
    constructor (content) {
      super()
      this.root = document.createTextNode(content)
    }


}