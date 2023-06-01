<script>
  import { getLocalStorage } from "../utils.mjs";
  import { setLocalStorage } from "../utils.mjs";
  let cartItems = getLocalStorage("so-cart");
;
function removeProductFromCart(event) {
  let itemID = event.target.parentNode.getAttribute('specificItemId')
  console.log(itemID)
  cartItems.forEach(item => {
    if (item.Id = itemID){
      let itemToBeRemoved = cartItems.indexOf(item)
      console.log(itemToBeRemoved)
      if (itemToBeRemoved > -1) { // only splice array when item is found
        cartItems.splice(itemToBeRemoved, 1); // 2nd parameter means remove one item only
        cartItems = [...cartItems]
        setLocalStorage("so-cart", cartItems)
        return
        }
    }
  });
}

export function clickHandler(event) {
  removeProductFromCart(event);
  console.log('running')
}

export function changeWindow(){
  window.open('../checkout/index.html')
}

</script>

<ul>
  {#if cartItems}
  {#each cartItems as item}
    <li class="cart-card divider" specificItemId = {item.Id}>
      <p class="cart-card__color">${item.Colors[0].ColorName}</p>
      <p class="cart-card__quantity">qty: 1</p>
      <p class="cart-card__price">{item.FinalPrice}</p>
      <button
        class="closeItem"
        type="button"
        on:click={clickHandler}
      >&#x274C;</button
      >
    </li>
  {/each}
  {/if}
</ul>

// if i have the code in here it doesn't actually run