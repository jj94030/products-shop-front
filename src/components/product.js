function renderProduct(product) {
    return `
    <div class="product">
        <h2 class="product_title">${product.name}</h2>
        <div>${product.price.amount}</div>
        <div class="product_description">${product.description.text}</div>
    </div>
    `;
}
