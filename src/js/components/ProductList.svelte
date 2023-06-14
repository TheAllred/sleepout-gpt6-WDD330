<script>
  import { onMount } from "svelte";
  import { getData } from "../productData.mjs";
  import { getLocalStorage } from "../utils.mjs";
  export let category;


 let products = [];
  onMount(async ()=> {
     products = await getData(category);
  })

function removeQuickView(){
  console.log('running')
  if (document.querySelector('#quickViewCard') != null){
  document.querySelector('#quickViewCard').remove()
}}


function removeClickHandler(){
  removeQuickView()
}



async function runShowCard(event){
if (document.querySelector('#quickViewCard') == null){
  let division = document.createElement('div')
  let itemList = products

  let itemID = event.target.parentNode.parentNode.parentNode.getAttribute('id')

  itemList.find((item) => {
      if ((item.Id == itemID)) {
        console.log(item)
        // Even though this finds correct index, url stays for the first item
        // only shows first item like it is only getting the first index
 
        let itemIndex = itemList.indexOf(item);
        // console.log(cartItems[itemIndex])
        let card = `
  <div class="discountFlagWithTotal">
    <button class="closeItemQuickView" type="button" onclick="${removeClickHandler()}">&#x274C;</button>
  </div>
  <section class="product-detail">
  
    <h3>${itemList[itemIndex].Brand.Name}</h3>

    <h2 class="divider">${itemList[itemIndex].NameWithoutBrand}</h2>

    <img
      class="divider"
      src="${itemList[itemIndex].Images.PrimaryLarge}"
      alt="${itemList[itemIndex].Name}"
    />

    <div class="product-card__price"><p><b>Discounted Price: $${itemList[itemIndex].FinalPrice}</b></p>
    <p><s>Retail Price: $${itemList[itemIndex].SuggestedRetailPrice}</s></p></div>

    <p class="product__color">${itemList[itemIndex].Colors[0].ColorName}</p>

    <p class="product__description">
      ${itemList[itemIndex].DescriptionHtmlSimple}
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
    document.querySelector('#quickViewCard').addEventListener('click', removeClickHandler)
    }}
    
    )
    
    }
    else{
      console.log("else statement")
  // document.querySelector('#quickViewCard').remove()
  let itemList = products
  let newItemID = event.target.parentNode.parentNode.parentNode.getAttribute('id')
  console.log(newItemID)
  itemList.find((item) => {
      if ((item.Id == newItemID)) {
        let newItemIndex = itemList.indexOf(item);
        console.log(newItemIndex)
        let newcard = `
  <div class="discountFlagWithTotal">  
    <button class="closeItemQuickView" type="button" onclick="${removeClickHandler()}">&#x274C;</button>
  </div>
  <section class="product-detail">
  
    <h3>${itemList[newItemIndex].Brand.Name}</h3>

    <h2 class="divider">${itemList[newItemIndex].NameWithoutBrand}</h2>

    <img
      class="divider"
      src="${itemList[newItemIndex].Images.PrimaryLarge}"
      alt="${itemList[newItemIndex].Name}"
    />

    <div class="product-card__price"><p><b>Discounted Price: $${itemList[newItemIndex].FinalPrice}</b></p>
    <p><s>Retail Price: $${itemList[newItemIndex].SuggestedRetailPrice}</s></p></div>

    <p class="product__color">${itemList[newItemIndex].Colors[0].ColorName}</p>

    <p class="product__description">
      ${itemList[newItemIndex].DescriptionHtmlSimple}
    </p>
  </section>
            `
    document.querySelector('#quickViewCard').innerHTML = newcard
    document.querySelector('#quickViewCard').style.position = "absolute"
    document.querySelector('#quickViewCard').style.left = "10%"
    document.querySelector('#quickViewCard').style.top = "55%"
    document.querySelector('#quickViewCard').style.width = "80%"
    document.querySelector('#quickViewCard').style.height = "auto"
    document.querySelector('#quickViewCard').style.background = "white"
    document.querySelector('#quickViewCard').addEventListener('click', removeClickHandler)
      }
    else{
      return
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

