'use strict';

const events = require('./events')
let faker = require('faker');
require('./driver')


let O = 1;
const myInterval = setInterval( () =>{
        let newOrder = {
            storeName: faker.company.companyName(), 
            orderId: O, 
            customerName: faker.name.findName(), 
            address: faker.address.cityName()
        }
        events.emit('pick-up', newOrder)
        O++
} , 5000);

// setTimeout(()=> {
//     clearInterval(myInterval);
// }, 5000);

events.on('delivered',(payload) =>{
 console.log(`VENDOR: thank you for delivery Order#${payload.orderId}`)
})
    

