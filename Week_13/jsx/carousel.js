import { Component } from './framework.js'

export class Carousel extends Component{
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
          console.log(pos)
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