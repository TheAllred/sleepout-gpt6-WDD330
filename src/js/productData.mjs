const baseURL = "http://server-nodejs.cit.byui.edu:3000/"
  // import.meta.env.VITE_SERVER_URL

function convertToJson(res) {
  console.log(res)
  let response = JSON.stringify(res)
  console.log(response)
  if (res.ok) {
    return res.json();
  } else {
    throw { name: 'servicesError', message: response.body };
    
  }
}

// export function getData(category = "tents") {
//   return fetch(`../json/${category}.json`)
//     .then(convertToJson)
//     .then((data) => data);
// }

export async function findProductById(id) {
  const response = await fetch(baseURL + `product/${id}`);
  const product = await convertToJson(response);
  return product.Result;
  
}

export async function getData(category) {
  console.log(baseURL)
  const response = await fetch(baseURL + `products/search/${category}`);
  const data = await convertToJson(response);
  return data.Result;
}

export async function Checkout(payload){
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  
  }
  
  return await fetch(baseURL + "checkout/", options).then(convertToJson)
  }