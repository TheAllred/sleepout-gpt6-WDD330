import { getLocalStorage, setLocalStorage } from "./utils.mjs";
import { findProductById } from "./productData.mjs";

function addProductToCart(product) {
  const cartItems = [];
  if (getLocalStorage("so-cart")) {
    getLocalStorage("so-cart").forEach((element) => {
      cartItems.push(element);
    });

    // getLocalStorage("so-cart");
  }
  cartItems.push(product);

  console.log("Trigger 1");
  console.log(cartItems);
  setLocalStorage("so-cart", cartItems);
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await findProductById(e.target.dataset.id);
  console.log(product);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
