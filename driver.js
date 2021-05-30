'user strict';

const events = require("./events");
let faker = require('faker');

require('./vendor')

events.on('pick-up', (payload)=>{
    setImmediate(()=>{
    console.log(`DRIVER: picked up order#${payload.orderId}`)
    events.emit('in-transit',  payload)
    },1000)
    setImmediate(()=>{
        console.log(`DRIVER: delivered up Order#${payload.orderId}`)
        events.emit('delivered', payload)
        },3000)
})



