<<<<<<< HEAD
import { getLocalStorage, setLocalStorage } from "./utils.mjs";
=======
// import { getLocalStorage } from "./utils.mjs";
>>>>>>> 3297b833605185159c988b6d8b92cf1f4b11b5fd

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

<<<<<<< HEAD
export function removeProductFromCart(number) {
  const cartItems = getLocalStorage("so-cart")
  const updatedCart = cartItems.splice(number, 1)
  setLocalStorage("so-cart", updatedCart)

}

=======
// function removeProductFromCart() {}

>>>>>>> 3297b833605185159c988b6d8b92cf1f4b11b5fd
// renderCartContents();

// {
//   /* <img src="../images/x.svg"></img> */
// }
<<<<<<< HEAD
=======

import MainHeader from "./components/MainHeader.svelte";
import MainFooter from "./components/MainFooter.svelte";
import ShoppingCart from "./components/ShoppingCart.svelte";
new ShoppingCart({ target: document.querySelector("#shopping-cart") });
new MainHeader({
  target: document.querySelector("#main-header"),
  props: {
    cartCount: 99,
  },
});
new MainFooter({ target: document.querySelector("#main-footer") });
>>>>>>> 3297b833605185159c988b6d8b92cf1f4b11b5fd
