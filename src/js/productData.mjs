import { addProductToCart } from "./product";

const productData = ''

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export function getData(category = "tents") {
  return fetch(`../json/${category}.json`)
    .then(convertToJson)
    .then((data) => data);
}

export async function findProductById(id) {
  const products = await getData();
  console.log(products)
  return products.find((item) => item.Id === id);
  
}
productDetails(productId, selector){

}

productDetailsTemplate(product){
  return  `
  <h3 id="productName">${product.Name}</h3>
  <h2 class="divider" id="productNameWithoutBrand"></h2>
  <img id="productImage" class="divider" src="${product.Image}" alt="" />
  <p class="product-card__price" id="productFinalPrice"></p>
  <p class="product__color" id="productColorName"></p>
  <p class="product__description" id="productDescriptionHtmlSimple"></p>
  <div class="product-detail__add">
  `


//   <main class="divider">
//   <section class="product-detail">
//     <h3>${product.Brand.Name}</h3>

//     <h2 class="divider">${product.Name}</h2>

//     <img
//       class="divider"
//       src="${product.Image}"
//       alt="${product.Name}"
//     />

//     <p class="product-card__price">${product.ListPrice</p>

//     <p class="product__color">Rust/Clay</p>

//     <p class="product__description">
//       Lightweight and ready for adventure, this Cedar Ridge Rimrock tent
//       boasts a weather-ready design that includes a tub-style floor and
//       factory-sealed rain fly
//     </p>

//     <div class="product-detail__add">
//       <button id="addToCart" data-id="344YJ">Add to Cart</button>
//     </div>
//   </section>
// </main>



}