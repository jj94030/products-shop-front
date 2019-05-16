const listingElement = document.querySelector("#listing");
console.log(listingElement);


const response = getProductList();

const productsHtml = response.products.map((product) => {
    return renderProduct(product);
}).forEach((productHtml) => {
    listingElement.innerHTML += productHtml;
});

console.log(productsHtml);