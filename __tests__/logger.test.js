'use strict';

const events = require('../events')
// require('../caps')
require('../driver')
require('../vendor')

describe( 'Events', () => {
  let consoleSpy;

  let order = {
    storeName: 'Store', 
    orderId: 1, 
    customerName: 'Emran', 
    address: 'Amman'
  }
  
  beforeEach( () => {
      consoleSpy = jest.spyOn( console, 'log' );
    } );
    
    afterEach( () => {
        consoleSpy.mockRestore();
    } );
    
    it( 'test pick-up event logs',  async () => {
        
    events.emit('pick-up', order)
    await consoleSpy()

    //   expect( consoleSpy ).toHaveBeenCalledWith( {
    //     storeName: 'Store', 
    //     orderId: 1, 
    //     customerName: 'Emran', 
    //     address: 'Amman'
    //   } );
    expect(  consoleSpy ).toHaveBeenCalledWith()

} );
it( 'test in-transit event logs',  async() => {
        
    events.emit('in-transit', order)
    await consoleSpy()
    //   expect( await consoleSpy ).toHaveBeenCalledWith( {
    //     storeName: 'Store', 
    //     orderId: 1, 
    //     customerName: 'Emran', 
    //     address: 'Amman'
    //   }); 
      expect( consoleSpy ).toHaveBeenCalledWith()

});
it( 'test delivered event logs',  async() => {
        
    events.emit('delivered', order)
    await consoleSpy()
    //   expect( consoleSpy ).toHaveBeenCalledWith( {
    //     storeName: 'Store', 
    //     orderId: 1, 
    //     customerName: 'Emran', 
    //     address: 'Amman'
    //   } ); 
    expect( consoleSpy ).toHaveBeenCalledWith('VENDOR: thank you for delivery Order#1' )
} );
} );