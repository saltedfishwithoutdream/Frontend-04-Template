let element = document.documentElement;
let contexts = new Map()
let isListeningMouse = false

element.addEventListener('mousedown', event => {
    // event.button，0/1/2分别表示左/中/右键
    let context = Object.create(null)
    contexts.set('mouse' + (1 << event.button), context)

    start(event, context)

    let mousemove = (event) => {
        let button = 1
        // move事件没有button属性，但是有buttons属性，表示按下了哪些键
        // 0  : 没有按键或者是没有初始化
        // 1  : 鼠标左键，2的0次方
        // 2  : 鼠标右键，2的1次方
        // 4  : 鼠标滚轮或者是中键，2的2次方
        // 8  : 第四按键 (通常是“浏览器后退”按键)
        // 16 : 第五按键 (通常是“浏览器前进”)
        // 按下多个键，对应的值相加即可
        // 可以看到move事件的buttons的中键和右键与down事件的button属性的中键和右键是相反的
        while (button <= event.buttons) {
            
            if (button & event.buttons) {
                let key;
                if (button === 2) {
                    key = 4
                } else if (button === 4) {
                    key = 2
                } else {
                    key = button
                }
                let context = contexts.get('mouse' + key)
                move(event, context)
            }
            
            button = button << 1
        }
        
    }

    let mouseup = (event) => {
        let context = contexts.get('mouse' + (1 << event.button))
        end(event, context)
        contexts.delete('mouse' + (1 << event.button))

        if (event.buttons === 0) {
            document.removeEventListener('mousemove', mousemove)
            document.removeEventListener('mouseup', mouseup)
            isListeningMouse = false
        }
        
    }

    if (!isListeningMouse) {
        document.addEventListener('mousemove', mousemove)
        document.addEventListener('mouseup', mouseup)
        isListeningMouse = true
    }
    
})



element.addEventListener('touchstart', event => {
    for (let touch of event.changedTouches) {
        let context = Object.create(null)
        contexts.set(touch.identifier, context)
        start(touch, context)
    }
})

element.addEventListener('touchmove', event => {
    for (let touch of event.changedTouches) {
        let context = contexts.get(touch.identifier)
        move(touch, context)
    }
})

element.addEventListener('touchend', event => {
    for (let touch of event.changedTouches) {
        let context = contexts.get(touch.identifier)
        end(touch, context)
    }
})

element.addEventListener('touchcancel', event => {
    for (let touch of event.changedTouches) {
        let context = contexts.get(touch.identifier)
        cancel(touch, context)
    }
})

// let handler;
// let startX, startY;
// let isPan = false;
// let isTap = true;
// let isPress = false;

let start = (point, context) => {
    console.log('-----start-----')
    context.startX = point.clientX
    context.startY = point.clientY
    context.points = [{
        t: Date.now(),
        x: point.clientX,
        y: point.clientY
    }]
    context.isPan = false
    context.isTap = true
    context.isPress = false

    context.handler = setTimeout(() => {
        console.log('press')
        context.isPan = false
        context.isTap = false
        context.isPress = true
        context.handler = null
    }, 500)
}

let move = (point, context) => {
    console.log('-----move-----')
    let dx = point.clientX - context.startX
    let dy = point.clientY - context.startY

    if (!context.isPan && dx ** 2 + dy ** 2 > 100) {
        context.isPan = true
        context.isTap = false
        context.isPress = false
        console.log('panstart')
        clearTimeout(context.handler)
    }

    if (context.isPan) {
        console.log('pan')
    }

    context.points = context.points.filter((point) => {
        return Date.now() - point.t < 500
    })

    context.points.push({
        t: Date.now(),
        x: point.clientX,
        y: point.clientY
    })
}

let end = (point, context) => {
    console.log('-----end-----')
    if (context.isTap) {
        dispatch('tap', {})
        clearTimeout(context.handler)
    }
    if (context.isPan) {
        console.log('panend')
    }
    if (context.isPress) {
        console.log('pressend')
    }

    context.points = context.points.filter((point) => {
        return Date.now() - point.t < 500
    })

    let d, v;

    if (!context.points.length) {
        v= 0
    } else {
        let d = Math.sqrt((point.clientX - context.points[0].x) ** 2 + 
        (point.clientY - context.points[0].y) ** 2)

        v = d / (Date.now() - context.points[0].t)
    }
    

    if (v > 1.5) {
        console.log('flick')
        context.isFlick = true
    } else {
        context.isFlick = false
    }

    
    console.log(v)
    // console.log('end', point.clientX, point.clientY)
}

let cancel = (point, context) => {
    clearTimeout(context.handler)
    console.log('cancel', point.clientX, point.clientY)
}

export function dispatch (type, properties) {
    let event = new Event(type);
    for (let name in properties) {
        event[name] = properties[name]
    }
    element.dispatchEvent(event)
}


export class Listener {
    constructor (element, recognizer) {
        
    }
}

export class Recognizer {
    constructor () {

    }
}


export function enableGesture (element) {

}