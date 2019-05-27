const listingElement = document.querySelector("#listing");
console.log(listingElement);


getProductList()
.then(response => {
    response.products
        .map(product => renderProduct(product))
        .forEach(html => listingElement.innerHTML += html);
});