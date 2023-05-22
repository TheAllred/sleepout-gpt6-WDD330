<script>
  import { getLocalStorage } from "../utils.mjs";
  import { removeProductFromCart } from "../cart.js"
  export const cartItems = getLocalStorage("so-cart");
  export const i = 0
  console.log("TEST");
</script>

<ul>
  {#each cartItems as item}
    <li class="cart-card divider">
      <a href="product_pages/index.html?product={item.Id}" class="cart-card__image">
        <img src="${item.Image}" alt="${item.Name}" />
      </a>
      <a href="product_pages/index.html?product={item.Id}">
        <h2 class="card__name">${item.Name}</h2>
      </a>
      <p class="cart-card__color">${item.Colors[0].ColorName}</p>
      <p class="cart-card__quantity">qty: 1</p>
      <p class="cart-card__price">$${item.FinalPrice}</p>
      <button
        class="closeItem"
        type="&#x274C;"
        onClick={removeProductFromCart(i)}>&#x274C;        
      </button>
    </li>
    {i += 1}
  {/each}
</ul>
