import { findProductById } from "./productData.mjs";
import { setLocalStorage, getLocalStorage } from "./utils.mjs";
import { cartCount } from "./stores.mjs";

let product = {};

export async function productDetails(productId, selector) {
  product = await findProductById(productId);
  const element = document.querySelector(selector);
  element.insertAdjacentHTML("afterBegin", productDetailsTemplate(product));
  function clickHandler() {
    addProductToCart(product);
  }
  document
    .getElementById("addProductToCart")
    .addEventListener("click", clickHandler);
}

function productDetailsTemplate(product) {
  return `

  <main class="divider">
  
  <div class="discountFlagWithTotal">
  <img id="discountFlag" src="../public/images/logos/001-tag.png">
    <p><b>You're Saving $${(product.SuggestedRetailPrice - product.FinalPrice).toFixed(2)}!</b></p>
  </div>
  <section class="product-detail">
  
    <h3>${product.Brand.Name}</h3>

    <h2 class="divider">${product.NameWithoutBrand}</h2>

    <img
      class="divider"
      src="${product.Images.PrimaryLarge}"
      alt="${product.Name}"
    />

    <div class="product-card__price"><p><b>Discounted Price: $${product.FinalPrice}</b></p>
    <p><s>Retail Price: $${product.SuggestedRetailPrice}</s></p></div>

    <p class="product__color">${product.Colors[0].ColorName}</p>

    <p class="product__description">
      ${product.DescriptionHtmlSimple}
    </p>

    <div class="product-detail__add">
      <button id="addProductToCart" data-id="${product.Id}">Add to Cart</button>
    </div>
  </section>
</main>
`;
}

function addProductToCart(product) {
  let cartIcon = document.querySelector("#cart-icon");
  console.log(cartIcon);
  cartIcon.classList.toggle("spin-animation");
  cartCount.update((n) => n + 1);
  const cartItems = [];
  if (getLocalStorage("so-cart")) {
    getLocalStorage("so-cart").forEach((element) => {
      cartItems.push(element);
    });
  }
  cartItems.push(product);
  console.log(cartItems);
  setLocalStorage("so-cart", cartItems);
}


function removeQuickView(){
  console.log('running')
  document.querySelector('#quickViewCard').remove()
}

// document.querySelector('.closeItem').addEventListener('click', removeProductFromCart)

// function removeProductFromCart() {
//   console.log(evt.target.Id)
//   const cartItems = getLocalStorage("so-cart")
//   const updatedCart = cartItems.splice(number, 1)
//   setLocalStorage("so-cart", updatedCart)
//   console.log("I am running")
// }

// function matchID(item, id){
//   return item != id
// }

// export function removeProductFromCart(id) {
//   const cartItems = getLocalStorage("so-cart")
//   const updatedCart = cartItems.filter(matchID(id))
//   setLocalStorage("so-cart", updatedCart)
//   console.log("I am running")
// }
