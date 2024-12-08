import {cart} from '../cart.js';
import {getProduct} from './products.js';
import {getDeliveryOption} from './deliveryoptions.js'


export function renderPaymentSummary(){
    let productPriceCents = 0;
    let shippingPriceCents = 0;

    cart.forEach((cartItem) => {
        const product = getProduct(cartItem.productId);
        productPriceCents += (product.priceCents * cartItem.quantity)/100;

        const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
        shippingPriceCents += (deliveryOption.priceCents)/100;
    });
    console.log(productPriceCents);
    console.log(shippingPriceCents);

        const totalBeforeTaxCents = (productPriceCents + shippingPriceCents).toFixed(2);
        console.log(totalBeforeTaxCents);

        const taxCents = (totalBeforeTaxCents*0.1).toFixed(2);
        console.log(taxCents);

        const itemTotal = parseFloat(totalBeforeTaxCents);
        const taxTotal = parseFloat(taxCents);
        const totalCents = (itemTotal + taxTotal).toFixed(2);

        console.log(totalCents);
 


let paymentSummaryHTML = '';

paymentSummaryHTML += `

          <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (3):</div>
            <div class="payment-summary-money">$${(productPriceCents).toFixed(2)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${shippingPriceCents}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${totalBeforeTaxCents}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${taxCents}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${totalCents}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>

`;

document.querySelector('.js-total').innerHTML = paymentSummaryHTML;









};