<script>
  import { getLocalStorage } from "../utils.mjs";

const init = function () {
  currentItems = getLocalStorage(key);
  calculateItemSummary(currentItems);
};

let key = "so-cart"
let shipping = 10
let currentItems = [];
let itemTotal = 0;
let tax = 0;
let orderTotal = 0;
// const options = {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(payload)
// }



function calculateItemSummary(currentItems){
    currentItems.forEach(element => {
        itemTotal += element.FinalPrice
        shipping += 2
    });
    tax = itemTotal * .06
    orderTotal = itemTotal + tax
    shipping = shipping - 2
    
}

// function formDataToJSON(formElement) {
//   const formData = new FormData(formElement),
//     convertedJSON = {};


//   formData.forEach(function (value, key) {
//     convertedJSON[key] = value;
//   });

//   return convertedJSON;
// }

// function packageItems(items) {
// // convert the list of products from localStorage to the simpler form required for the checkout process. Array.map would be perfect for this.
// }

// function handleSubmit(e) {
//   // build the data object from the calculated fields, the items in the cart, and the information entered into the form
//   // remember that the form that was submitted can be found two ways...this or e.target 
//   // call the checkout method in our externalServices module and send it our data object.
//   fetch(url, options);
// }

init();

</script>

<form action="post">
    <fieldset class="shippingAddress">
    <legend>Shipping</legend><br>
    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname"><br>
    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" name="lname"><br>
    <label for="street">Street:</label><br>
    <input type="text" id="street" name="street"><br>
    <label for="city">City:</label><br>
    <input type="text" id="city" name="city"><br>
    <label for="state">Address:</label><br>
    <input required type="text" id="state" name="state"><br>
    <label for="zip">Zip Code:</label><br>
    <input required type="number" id="zip" name="zip"><br>
    </fieldset><br>

    <fieldset class="creditCardInformation">
    <legend>Credit Card Information</legend>
    <label for="cardNumber">Credit Card Number</label><br>
    <input required type="number" id="cardNumber" name="cardNumber"><br>
    <label for="expiration">Expirations</label><br>
    <input required type="number" id="expiration" name="expiration"><br>
    <label for="code">Security Code</label><br>
    <input required type="number" id="code" name="code"><br>
    </fieldset><br>

    <fieldset class="checkout-summary">
        <legend>Order Summary</legend>
        <p>Item Subtotal: ${itemTotal}</p>
        <p>Shipping Estimate: ${shipping}</p>
        <p>Tax: ${tax}</p>
        <h3>Order Total: ${orderTotal.toFixed(2)}</h3>
    </fieldset>

    <input type="submit" value="Submit">
</form>