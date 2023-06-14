<script>
  import { getLocalStorage } from "../utils.mjs";
  import { setLocalStorage } from "../utils.mjs";
  import { cartCount } from "../stores.mjs";
  import { cartTotal } from "../stores.mjs";
  let cartItems = getLocalStorage("so-cart");

  let uniqueItems = []
    cartItems.forEach((item) => {
      if (!uniqueItems.includes(item)){
        console.log("Item not in list")
        console.log(item)
        uniqueItems.push(item)
      }
    })








  // cartItems.forEach((element) => {
  //   cartTotal += element.FinalPrice;
  // });


  function removeProductFromCart(event) {
    let itemID = event.target.parentNode.getAttribute("specificItemId");
    console.log(itemID);

    cartItems.find((item) => {
      if ((item.Id == itemID)) {
        let itemToBeRemoved = cartItems.indexOf(item);
    
        if (itemToBeRemoved > -1) {
          // only splice array when item is found
          cartItems.splice(itemToBeRemoved, 1); // 2nd parameter means remove one item only
          cartItems = [...cartItems];
          setLocalStorage("so-cart", cartItems);
          return;
        }

        return
      }
      return
    });
    cartTotal = cartTotal;
  }

  function removeItem(event) {
    let itemID = event.target.parentNode.getAttribute("specificItemId");
    console.log(itemID);
    cartItems.every((item) => {
      if ((item.Id = itemID)) {
        let itemToBeRemoved = cartItems.indexOf(item, 0);
        console.log(itemToBeRemoved);
        const filteredItems = cartItems.filter(item => item !== itemToBeRemoved)

        cartItems = [...filteredItems]
        setLocalStorage("so-cart", cartItems)
        return
      }
      return
    })


}

export function clickHandler(event) {
    removeProductFromCart(event);
    console.log("running");
  }

function currentCartAmount(currentID) {
  let quantity = 0
  let i = 0
  cartItems.forEach((item) => {
    if (item.Id == currentID){
      quantity += 1
    }
    i += 1
  })
  return quantity
}

function checkRendered(currentID){
  let list = document.querySelectorAll('cart-card')
  console.log(list)

  list.forEach((item) => {
    let id = item.getAttribute('specificItemId')
    console.log(id)
    if (id == currentID)
    return true
  })


}

let quantity = 0
</script>

<ul>
  {#if cartItems}
    {#each cartItems as item}
    <!-- needs to check if item already is rendered -->
      <li class="cart-card divider" specificItemId={item.Id}>
        <p class="cart-card__color">{item.Colors[0].ColorName}</p>
        <p class="cart-card__quantity">qty: {currentCartAmount(item.Id)}</p>
        <p class="cart-card__price">${item.FinalPrice}</p>
        <button class="closeItem" type="button" on:click={clickHandler}
          >&#x274C;</button
        >
      </li>
    {/each}
  {/if}
</ul>
<h2>
  Cart total cost: ${cartTotal}
  <!-- .toFixed(2) -->
</h2>
<div class="cart-card divider" />
<a class="button" href="/checkout/index.html">Check Out</a>
