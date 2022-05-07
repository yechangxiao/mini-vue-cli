import { add } from '@/utils/add'
import '@/styles/index.scss'
import Vue from 'vue'

// import 'core-js/stable';
// import 'regenerator-runtime/runtime';

const img = require('@/assets/images/test.png')
console.log('DefinePlugin', process.env.NODE_ENV, VueApp);


const node = document.createElement('img')
node.src = img
document.body.appendChild(node)
import App from '@/App.vue'

console.log('我是main.js', add(1, 2))
// console.log(1)
new Promise(resolve => {
  setTimeout(() => {
    resolve()
  }, 0);
}).then(() => {
  console.log('1111', [1,2,3,4].at(-2));
  // Array.at
})

Promise.allSettled([])

new Vue({
  render: h => h(App)
}).$mount('#app')
