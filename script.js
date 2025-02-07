//products array is in the data folder
import {cart, addtoCart} from '../javascript-amazon-project/cart.js';
import {products} from '../javascript-amazon-project/data/products.js';


let productsHTML=``;//accumulator pattern

//it'll take objects in products one by one, save in product and runs the function.
products.forEach((product) =>{ 
    productsHTML += `
    <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
             src=" ${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
          ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
            ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
          $${(product.priceCents / 100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button
          js-add-to-cart
          button-primary"
          data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>
    `
    //console.log(productsHTML);
});

document.querySelector('.js-products-grid').innerHTML = productsHTML;




function updateCartQuantity(){
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  console.log (cartQuantity);
  document.getElementById('cart-value').textContent = cartQuantity;

};


document.querySelectorAll('.js-add-to-cart')
  .forEach((button) => {
    button.addEventListener('click', () =>{
      const productId = button.dataset.productId; //productId changed to camel from kebab in html above
      addtoCart(productId);
      updateCartQuantity();
     


    });
  });


