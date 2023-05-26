<script>
  import { onMount } from "svelte";
  import { getData } from "../productData.mjs";
  export let category;
 let products = [];
  onMount(async ()=> {
     products = await getData(category);

  })

</script>

<h1>Top products: {category}</h1>

  <ul class="product-list">
    {#each products as product}
        <li class="product-card">
          <a href="product_pages/index.html?product={product.Id}">
            <img src={product.Image} alt={product.Name} />
            <h3 class="card__brand">{product.Brand.Name}</h3>
            <h2 class="card__name">{product.Name}</h2>
            <p class="product-card__price">{product.FinalPrice}</p></a
          >
        </li>
    {/each}
  </ul>

