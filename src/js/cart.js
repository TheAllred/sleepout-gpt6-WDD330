// function renderCartContents() {
//   const cartItems = getLocalStorage("so-cart");
//   const cartCount = cartItems.length;
//   const htmlItems = cartItems.map((item) => cartItemTemplate(item));
//   document.querySelector(".product-list").innerHTML = htmlItems.join("");
//   document
//     .querySelector(".closeItem")
//     .addEventListener("click", removeProductFromCart);
//   // Display cart count in page heading.
//   document.querySelector("#cart-count").textContent = `: ${cartCount} Item${
//     cartCount > 1 ? "s" : ""
//   }`;
// }

// function cartItemTemplate(item) {
//   const newItem = `<li class="cart-card divider">
//   <a href="#" class="cart-card__image">
//     <img
//       src="${item.Image}"
//       alt="${item.Name}"
//     />
//   </a>
//   <a href="#">
//     <h2 class="card__name">${item.Name}</h2>
//   </a>
//   <p class="cart-card__color">${item.Colors[0].ColorName}</p>
//   <p class="cart-card__quantity">qty: 1</p>
//   <p class="cart-card__price">$${item.FinalPrice}</p>
//   <button class="closeItem" type="&#x274C;" onClick= "removeProductFromCart(${item.id})">&#x274C;</button>

// </li>`;

//   return newItem;
// }


// renderCartContents();

// {
//   /* <img src="../images/x.svg"></img> */
// }

import MainHeader from "./components/MainHeader.svelte";
import MainFooter from "./components/MainFooter.svelte";
import ShoppingCart from "./components/ShoppingCart.svelte";
import { getLocalStorage, setLocalStorage } from "./utils.mjs";

new ShoppingCart({ target: document.querySelector("#shopping-cart") });
new MainHeader({
  target: document.querySelector("#main-header"),

});
new MainFooter({ target: document.querySelector("#main-footer") });


// document.querySelector('.closeItem').addEventListener('click', removeProductFromCart())
const cartItems = getLocalStorage("so-cart");





// var buttons = document.getElementsByClassName('closeItem')
// Array.from(buttons).forEach(function(element) {
//   element.addEventListener("click", clickHandler(element));

// });
// Array.from(buttons).onclick(clickHandler(button))

// document.querySelector('.closeItem').forEach(function () {this.addEventListener('click', removeProductFromCart())});

// if I have the code in here it runs on load, refresh, 24/7

