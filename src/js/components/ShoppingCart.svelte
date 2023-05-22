<script>
  import { getLocalStorage } from "../utils.mjs";
  export const cartItems = getLocalStorage("so-cart");
</script>

<ul>
  {#each cartItems as item}
    <li class="cart-card divider">
      <img src={item.Image} alt={item.Name} />
      <h2 class="card__name">{item.Name}</h2>
      <p class="cart-card__color">{item.Colors[0].ColorName}</p>
      <p class="cart-card__quantity">qty: 1</p>
      <p class="cart-card__price">{item.FinalPrice}</p>
      <button
        class="closeItem"
        type="&#x274C;"
        onClick="removeProductFromCart({item.id})">&#x274C;</button
      >
    </li>
  {/each}
</ul>
