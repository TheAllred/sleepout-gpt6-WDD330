productDetails(productId, selector){
    selector.innerHTML(productDetailsTemplate(productId));

};

productDetailsTemplate(product){
  return  `
  <main class="divider">
  <section class="product-detail">
    <h3>${product.Brand.Name}</h3>

    <h2 class="divider">${product.Name}</h2>

    <img
      class="divider"
      src="${product.Image}"
      alt="${product.Name}"
    />

    <p class="product-card__price">${product.ListPrice}</p>

    <p class="product__color">${product.Colors[0].ColorName}</p>

    <p class="product__description">
      ${product.DescriptionHtmlSimple}
    </p>

    <div class="product-detail__add">
      <button id="addToCart" data-id="344YJ">Add to Cart</button>
    </div>
  </section>
</main>
`;};