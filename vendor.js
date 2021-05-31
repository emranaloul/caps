'use strict';

const events = require('./events')
let faker = require('faker');
require('./driver')


const myInterval = setInterval( () =>{
        let newOrder = {
            storeName: faker.company.companyName(), 
            orderId: faker.datatype.uuid(), 
            customerName: faker.name.findName(), 
            address: faker.address.cityName()
        }
        events.emit('pick-up', newOrder)
} , 5000);

// setTimeout(()=> {
//     clearInterval(myInterval);
// }, 5000);

events.on('delivered',(payload) =>{
 console.log(`VENDOR: thank you for delivery Order#${payload.orderId}`)
})
    

module.exports = {myInterval}