<script>
  import { onMount } from "svelte";
  import { getData } from "../productData.mjs";
  import { getLocalStorage } from "../utils.mjs";
  export let category;


 let products = [];
  onMount(async ()=> {
     products = await getData(category);
  })





function runShowCard(event){
if (document.querySelector('#quickViewCard') == null){
  let division = document.createElement('div')
  let cartItems = getLocalStorage("so-cart")
  let itemID = event.target.parentNode.parentNode.parentNode.getAttribute('id')
  console.log(itemID)
  cartItems.every((item) => {
      if ((item.Id = itemID)) {
        let itemIndex = cartItems.indexOf(item);
        // console.log(cartItems[itemIndex])
        let card = `
  <div class="discountFlagWithTotal">
    <button class="closeItemQuickView" type="button" onclick="removeQuickView()">&#x274C;</button>
  </div>
  <section class="product-detail">
  
    <h3>${cartItems[itemIndex].Brand.Name}</h3>

    <h2 class="divider">${cartItems[itemIndex].NameWithoutBrand}</h2>

    <img
      class="divider"
      src="${cartItems[itemIndex].Images.PrimaryLarge}"
      alt="${cartItems[itemIndex].Name}"
    />

    <div class="product-card__price"><p><b>Discounted Price: $${cartItems[itemIndex].FinalPrice}</b></p>
    <p><s>Retail Price: $${cartItems[itemIndex].SuggestedRetailPrice}</s></p></div>

    <p class="product__color">${cartItems[itemIndex].Colors[0].ColorName}</p>

    <p class="product__description">
      ${cartItems[itemIndex].DescriptionHtmlSimple}
    </p>
  </section>
            `
    division.setAttribute('id', 'quickViewCard')
    division.innerHTML = card
    division.style.position = "absolute"
    division.style.left = "10%"
    division.style.top = "55%"
    division.style.width = "80%"
    division.style.height = "auto"
    division.style.background = "white"
    document.querySelector('main').prepend(division)
    }
    })
    }
    else{
      console.log("else statement")
  // document.querySelector('#quickViewCard').remove()
  let cartItems = getLocalStorage("so-cart")
  let newItemID = event.target.parentNode.parentNode.parentNode.getAttribute('id')
  console.log(newItemID)
  cartItems.every((item) => {
      if ((item.Id = newItemID)) {
        let newItemIndex = cartItems.indexOf(item);
        let newcard = `
  <div class="discountFlagWithTotal">  
    <button class="closeItemQuickView" type="button" onclick="removeQuickView()">&#x274C;</button>
  </div>
  <section class="product-detail">
  
    <h3>${cartItems[newItemIndex].Brand.Name}</h3>

    <h2 class="divider">${cartItems[newItemIndex].NameWithoutBrand}</h2>

    <img
      class="divider"
      src="${cartItems[newItemIndex].Images.PrimaryLarge}"
      alt="${cartItems[newItemIndex].Name}"
    />

    <div class="product-card__price"><p><b>Discounted Price: $${cartItems[newItemIndex].FinalPrice}</b></p>
    <p><s>Retail Price: $${cartItems[newItemIndex].SuggestedRetailPrice}</s></p></div>

    <p class="product__color">${cartItems[newItemIndex].Colors[0].ColorName}</p>

    <p class="product__description">
      ${cartItems[newItemIndex].DescriptionHtmlSimple}
    </p>
  </section>
            `
    document.querySelector('#quickViewCard').innerHTML = newcard

    document.querySelector('#quickViewCard').setAttribute('id', 'quickViewCard')
    document.querySelector('#quickViewCard').innerHTML = card
    document.querySelector('#quickViewCard').style.position = "absolute"
    document.querySelector('#quickViewCard').style.left = "10%"
    document.querySelector('#quickViewCard').style.top = "55%"
    document.querySelector('#quickViewCard').style.width = "80%"
    document.querySelector('#quickViewCard').style.height = "auto"
    document.querySelector('#quickViewCard').style.background = "white"
      }
    })
}
}

function showCard(event){
  // document.querySelector('.product-list').style.display = "none"
  runShowCard(event)
  
}

</script>

<h1>Top products: {category}</h1>

  <ul class="product-list">
    {#each products as product}
        <li class="product-card" id={product.Id}>
          <a href="../product_pages/index.html?product={product.Id}">
            <img src={product.Images.PrimaryMedium} alt={product.Name} />
            <h3 class="card__brand">{product.Brand.Name}</h3>
            <h2 class="card__name">{product.Name}</h2>
          </a>
            <div class="productBottom">
            <a href="../product_pages/index.html?product={product.Id}">
              <div class="product-cardPrices">
                <p class="product-card__price"><s>${product.SuggestedRetailPrice}</s></p>
                <p class="product-card__price"><b>${product.FinalPrice}</b></p>
              </div>
            </a>
            <button class="nodisplay" on:click={showCard}><img class="quickView" src="..\public\images\logos\QuickView_30234.png" alt="Quick View Logo"></button>
          </div>
        </li>
    {/each}
  </ul>

