import {Timeline, Animation} from './animation.js'

let el = document.getElementById('el')
let pauseBtn = document.getElementById('pause-btn')
let resumeBtn = document.getElementById('resume-btn')
let resetBtn = document.getElementById('reset-btn')

let tl = new Timeline()
let animation = new Animation(el.style, 'transform', 0, 500, 5000, 0, null, (v) => {
    return `translateX(${v}px)`
})

pauseBtn.addEventListener('click', () => {
    tl.pause()
})

resumeBtn.addEventListener('click', () => {
    tl.resume()
})

resetBtn.addEventListener('click', () => {
    tl.reset()
})

window.tl = tl
window.animation = animation


tl.start()

tl.add(animation)