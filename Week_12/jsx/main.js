import { Component, createElement } from './framework.js'

class Carousel extends Component{
  constructor () {
    super()
    this.attribute = Object.create(null)
  }
  setAttribute (name, value) {
    this.attribute[name] = value
  }
  mountTo (parent) {
    parent.appendChild(this.render())
  }
  render () {
    this.root = document.createElement('div')
    this.root.classList.add('carousel')
    let index = 1
    for (let record of this.attribute.src) {
      let child = document.createElement('div')
      child.style.backgroundImage = `url(${record})`
      child.innerText = index++
      child.style.color = 'red'
      child.style.fontSize = '30px'
      this.root.appendChild(child)
    }

    let position = 0

    this.root.addEventListener('mousedown', (event) => {

      let children = this.root.children
      let startX = event.clientX

      let move = e => {
        let x = e.clientX - startX
       
        let current = position - (x - x % 500) / 500

        for (let offset of [-1, 0, 1]) { // 前一个，当前，后一个元素 
          let pos = current + offset
          
          pos = (pos + children.length) % children.length
          children[pos].style.transition = 'none'
          children[pos].style.transform = `translateX(${-pos * 500 + offset * 500 + x % 500}px)`
        }

        
      }

      let up = e => {
        let x = e.clientX - startX
        position = position - Math.round(x / 500)
        
        for (let offset of [0, -Math.sign(Math.round(x / 500) - x + 250 * Math.sign(x))]) { 

          let pos = position + offset
          pos = (pos + children.length) % children.length
          children[pos].style.transition = ''
          children[pos].style.transform = `translateX(${-pos * 500 + offset * 500}px)`
        }
        document.removeEventListener('mousemove', move)
        document.removeEventListener('mouseup', up)
      }

      document.addEventListener('mousemove', move)
      document.addEventListener('mouseup', up)

    })



    // 自动轮播
    // let currentIndex = 0
    // setInterval(() => {
    //   let children = this.root.children

    //   let nextIndex = (currentIndex + 1) % children.length

    //   let current = children[currentIndex]
    //   let next = children[nextIndex]

    //   next.style.transition = 'none'
    //   next.style.transform = `translateX(${100 - nextIndex * 100}%)`

    //   setTimeout(() => {
    //     next.style.transition = ''
    //     current.style.transform = `translateX(${-100-currentIndex * 100}%)`
    //     next.style.transform = `translateX(${-nextIndex * 100}%)`
    //     currentIndex = nextIndex
    //   }, 16)
    // }, 2000)

    return this.root
  }

}

let d = [
  'https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg',
  'https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg',
  'https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg',
  'https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg'
]

let a = <Carousel src={d}>
</Carousel>

// document.body.appendChild(a)

a.mountTo(document.body)



