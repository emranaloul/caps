'use strict';

const events = require('./events');
let faker = require('faker');
require('./vendor');
require('./driver')

events.on('pick-up', (payload)=>{
    console.log('Event{ event: pick-up');
    console.log('time: ', faker.date.recent())
    console.log('payload')
    console.log(payload)
})

events.on('in-transit', (payload)=>{
    console.log('Event{ event: in-transit');
    console.log('time: ', faker.date.recent())
    console.log('payload')
    console.log(payload)
})

events.on('delivered', (payload)=>{
    console.log('Event{ event: delivered');
    console.log('time: ', faker.date.recent())
    console.log('payload')
    console.log(payload)
})

