<script>
  import { getLocalStorage } from "../utils.mjs";
  import { setLocalStorage } from "../utils.mjs";
  import { cartCount } from "../stores.mjs";
  import { cartTotal } from "../stores.mjs";
  import { query_selector_all } from "svelte/internal";
  let cartItems = getLocalStorage("so-cart");





  // cartItems.forEach((element) => {
  //   cartTotal += element.FinalPrice;
  // });

  function currentCartAmount(currentID) {
    let quantity = 0
    cartItems.forEach((item) => {
      if (item.Id == currentID){
        quantity += 1
      }
      return quantity
    })
  }


  function removeProductFromCart(event) {
    let itemID = event.target.parentNode.getAttribute("specificItemId");
    console.log(itemID);
    cartItems.every((item) => {
      if ((item.Id = itemID)) {
        let itemToBeRemoved = cartItems.indexOf(item);

        console.log(itemToBeRemoved)
        cartItems.splice(itemToBeRemoved, 1); // 2nd parameter means remove one item only
        cartItems = [...cartItems];
        setLocalStorage("so-cart", cartItems);
        return
      }
      return
    });
    // cartTotal = cartTotal;
  }

  function removeItem(event) {
    let itemID = event.target.parentNode.getAttribute("specificItemId");
    console.log(itemID);

    for (const [index, item] of cartItems.entries()){
      console.log(index, item)
      if ((item.Id = itemID)) {
        console.log(index)
        cartItems.splice(index, 1); // 2nd parameter means remove one item only
        cartItems = [...cartItems];
        setLocalStorage("so-cart", cartItems);
        return
    }

  }
    // cartItems.every((item) => {
    //   if ((item.Id = itemID)) {
    //     let itemToBeRemoved = cartItems.indexOf(item);
    //     console.log(itemToBeRemoved);
    //     const filteredItems = cartItems.filter(item => item !== itemToBeRemoved)

    //     cartItems = [...filteredItems]
    //     setLocalStorage("so-cart", cartItems)
    //     return
    //   }
    //   return
    // })


}

export function clickHandler(event) {
    removeItem(event);
    console.log("running");
  }


</script>

<ul>
  {#if cartItems}
    {#each cartItems as item}
    <!-- {#if !specificItemId.item.Id} -->
      <li class="cart-card divider" specificItemId={item.Id}>
        <p class="cart-card__color">{item.Colors[0].ColorName}</p>
        {#if item.quantity}
        <p class="cart-card__quantity">{item.quantity}</p>
        {:else}
        <p class="cart-card__quantity">qty: {currentCartAmount(item.Id)}</p>
        {/if}
        <p class="cart-card__price">${item.FinalPrice}</p>
        <button class="closeItem" type="button" on:click={clickHandler}
          >&#x274C;</button
        >
      </li>
      <!-- {/if} -->
    {/each}
  {/if}
</ul>
<h2>
  Cart total cost: ${cartTotal}
  <!-- .toFixed(2) -->
</h2>
<div class="cart-card divider" />
<a class="button" href="/checkout/index.html">Check Out</a>
