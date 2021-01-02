import HelloWorld from './HelloWorld.js'

import Vue from 'Vue'

new Vue({
    el: '#app',
    render: h => h(HelloWorld)
})