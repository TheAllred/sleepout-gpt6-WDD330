<script>
  import { onMount } from "svelte";
  import { getData } from "../productData.mjs";
  export let category;
 let products = [];
  onMount(async ()=> {
     products = await getData(category);
  })

 let screenSize;

</script>

<svelte:window bind:innerWidth={screenSize} />

<h1>Top products: {category}</h1>

  <ul class="product-list">
    {#each products as product}
        <li class="product-card">
          <a href="../product_pages/index.html?product={product.Id}">
            {#if screenSize > 1024}
            <img src={product.Images.PrimaryExtraLarge} alt={product.Name} />
            {:else if screenSize > 640}
            <img src={product.Images.PrimaryLarge} alt={product.Name} />
            {:else if screenSize > 320}
            <img src={product.Images.PrimaryMedium} alt={product.Name} />
            {:else}
            <img src={product.Images.PrimarySmall} alt={product.Name} />
            {/if}
            <h3 class="card__brand">{product.Brand.Name}</h3>
            <h2 class="card__name">{product.Name}</h2>
            <div class="product-cardPrices">
              <p class="product-card__price"><s>${product.SuggestedRetailPrice}</s></p>
              <p class="product-card__price"><b>${product.FinalPrice}</b></p>
            </div>
            </a>
        </li>
    {/each}
  </ul>

