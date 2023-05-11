<script>
    import { getData } from "../productData.mjs";
    export let category;
    export let allowed = ["880RR","985RF","985PR","344YJ"]
    let tentsJson = getData(category);
</script>
    
    <h1>Top products: {category}</h1>
    {#await tentsJson}
    Loading
    {:then products}
    <ul class="product-list">
    {#each products as product}
    {#if allowed.includes(product.Id)}
        <li class="product-card">
          <a href="product_pages/index.html?product={product.Id}">
            <img
              src="{product.Image}"
              alt="{product.Name}"
            />
            <h3 class="card__brand">{product.Brand.Name}</h3>
            <h2 class="card__name">{product.Name}</h2>
            <p class="product-card__price">{product.FinalPrice}</p></a
          >
        </li>
    {/if}
    {/each}
    </ul>
    {/await}


