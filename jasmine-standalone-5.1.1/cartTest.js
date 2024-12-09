import { addtoCart, cart } from "../cart.js";

describe ('Test Suite: addToCart', () =>{
    it ('Adds existing product to cart', () => {
        //spyOn ();
        
        addtoCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(1);
    });

    it ('Adds a new product to cart', () => {

    });
});