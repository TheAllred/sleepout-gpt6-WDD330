import { getLocalStorage } from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  const cartCount = cartItems.length;
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
  document
    .querySelector(".closeItem")
    .addEventListener("click", removeProductFromCart);
  // Display cart count in page heading.
  document.querySelector("#cart-count").textContent = `: ${cartCount} Item${
    cartCount > 1 ? "s" : ""
  }`;
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
  <button class="closeItem" type="&#x274C;" onClick= "removeProductFromCart(${item.id})">&#x274C;</button>

</li>`;

  return newItem;
}

function removeProductFromCart() {}

renderCartContents();

{
  /* <img src="../images/x.svg"></img> */
}
