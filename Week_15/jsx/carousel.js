import { Component, STATE, ATTRIBUTE  } from './framework.js'
import { enableGesture } from './gesture.js'
import { Animation, Timeline } from './animation.js'
import { ease } from './ease.js'

export { STATE, ATTRIBUTE } from './framework.js'




export class Carousel extends Component{
  constructor () {
    super()
  }
  
  render () {
    this.root = document.createElement('div')
    this.root.classList.add('carousel')
    let index = 0
    
    for (let record of this[ATTRIBUTE].src) {
      let child = document.createElement('div')
      child.style.backgroundImage = `url(${record.img})`
      child.innerText = index++
      child.style.color = 'red'
      child.style.fontSize = '30px'
      this.root.appendChild(child)
    }

    enableGesture(this.root)
    let timeline = new Timeline()
    timeline.start()

    let handler = null

    let children = this.root.children
    
    let t = 0
    let ax = 0

    this[STATE].position = 0

    this.root.addEventListener('start', event => {
      timeline.pause()
      clearInterval(handler)
      let progress = (Date.now() - t) / 500
      ax = ease(progress) * 500 - 500
    })

    this.root.addEventListener('tap', event => {
      this.triggerEvent('click', {
        data: this[ATTRIBUTE].src[this[STATE].position],
        position: this[STATE].position
      })
    })


    this.root.addEventListener('pan', event => {
        let x = event.clientX - event.startX - ax
       
        let current = this[STATE].position - (x - x % 500) / 500

        for (let offset of [-1, 0, 1]) { // 前一个，当前，后一个元素 
          let pos = current + offset
          
          pos = (pos % children.length + children.length) % children.length
          
          children[pos].style.transition = 'none'
          children[pos].style.transform = `translateX(${-pos * 500 + offset * 500 + x % 500}px)`
        }
    })

    this.root.addEventListener('panend', event => {

      timeline.reset()
      timeline.start()

      handler = setInterval(nextPic, 3000)
      
      let x = event.clientX - event.startX - ax
       
      let current = this[STATE].position - (x - x % 500) / 500

      let direction = Math.round((x % 500) / 500)


      if (event.isFlick) {
        if (event.velocity < 0) {
          direction = Math.ceil((x % 500) / 500)
        } else {
          direction = Math.floor((x % 500) / 500)
        }
      }

      for (let offset of [-1, 0, 1]) { // 前一个，当前，后一个元素 
        let pos = current + offset
        
        pos = (pos % children.length + children.length) % children.length
        
        // children[pos].style.transition = 'none'
        // children[pos].style.transform = `translateX(${- pos * 500 + offset * 500 + direction * 500}px)`
        timeline.add(new Animation(children[pos].style, 'transform', 
          - pos * 500 + offset * 500 + x % 500, 
          - pos * 500 + offset * 500 + direction * 500, 
          500, 0, ease, v => `translateX(${v}px)`))
      }
      
      this[STATE].position = this[STATE].position - ((x - x % 500) / 500) - direction

      this[STATE].position = (this[STATE].position % children.length + children.length) % children.length

      this.triggerEvent('Change', {position: this[STATE].position})
     
    })

    let nextPic = () => {
      let children = this.root.children
      
      let nextPosition = (this[STATE].position + 1) % children.length

      let current = children[this[STATE].position]
      let next = children[nextPosition]
      

      t = Date.now()

      timeline.add(new Animation(current.style, 'transform', - this[STATE].position * 500, -500 - this[STATE].position * 500, 500, 0, ease, v => `translateX(${v}px)`))

      timeline.add(new Animation(next.style, 'transform', 500 - nextPosition * 500, - nextPosition * 500, 500, 0, ease, v => `translateX(${v}px)`))

      this[STATE].position = nextPosition
      this.triggerEvent('change', {position: this[STATE].position})
    }

    
    handler = setInterval(nextPic, 3000)

    /*
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
    **/


    // 自动轮播
    /*
    let currentIndex = 0
    setInterval(() => {
      let children = this.root.children

      let nextIndex = (currentIndex + 1) % children.length

      let current = children[currentIndex]
      let next = children[nextIndex]

      next.style.transition = 'none'
      next.style.transform = `translateX(${100 - nextIndex * 100}%)`

      setTimeout(() => {
        next.style.transition = ''
        current.style.transform = `translateX(${-100-currentIndex * 100}%)`
        next.style.transform = `translateX(${-nextIndex * 100}%)`
        currentIndex = nextIndex
      }, 16)
    }, 2000)
    **/

    return this.root
  }
  
  // mountTo (parent) {
  //   parent.appendChild(this.render())
  // }
}