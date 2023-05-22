<script>
  import { getLocalStorage } from "../utils.mjs";
  import { removeProductFromCart } from "../productDetails.mjs"
  export const cartItems = getLocalStorage("so-cart");
  export const i = 0
</script>

<ul>
  {#if cartItems}
  {#each cartItems as item}
    <li class="cart-card divider">
      <p class="cart-card__color">${item.Colors[0].ColorName}</p>
      <p class="cart-card__quantity">qty: 1</p>
      <p class="cart-card__price">{item.FinalPrice}</p>
      <button
        class="closeItem"
        type="&#x274C;"
        onClick= {() => {removeProductFromCart(i)}}>&#x274C;</button
      >
    </li>
    {i += 1}
  {/each}
  {/if}
</ul>
