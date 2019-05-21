function renderProduct(product) {
    return `
    <div class="product">
        <img class="product_image" src="${product.image.url}">
        <div class="product_info">
            <h2 class="product_title">${product.name}</h2>
            <div>${formatPrice(product.price)}</div>
            <div class="product_description">${product.description.text}</div>
        </div>
    </div>
    `;
}

function formatPrice(price) {
    switch (price.currency) {
        case "EUR":
            return '\u20ac ' + formatAmount(price.amount);
        case "USD":
            return '\u0024 ' + formatAmount(price.amount);
        case "GBP":
            return '\u00a3 ' + formatAmount(price.amount);
        case "PLN":
            return formatAmount(price.amount) + ' zł';
        default:
            return formatAmount(price.amount) + ` ${price.currency}`;
    }
}

function formatAmount(amount) {
    return amount.replace(".", ",");
}