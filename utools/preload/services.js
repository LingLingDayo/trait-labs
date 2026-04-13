// 通过 window 对象向渲染进程注入 nodejs 能力
const fs = require('fs')
const path = require('path')

console.log('trait-labs Services loaded successfully')

window.services = {
}
