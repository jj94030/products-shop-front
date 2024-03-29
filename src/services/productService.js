function getProductList() {
    const goodUrl = "https://products-shop-jj.herokuapp.com/products";

    const options = {
        mode: 'cors'
    }

    return fetch(goodUrl, options)
        .then(response => {
            return response.json();
        })
        .then(response => {
            console.log(response)
        })
        .catch(reason => {
            console.error(response);
        })
}

function getProductListDeprecated() {

    return {

        "products": [
            {
                "id": "product-id-1",
                "name": "Krzesło",
                "price": {
                    "amount": "45.99",
                    "currency": "USD"
                },
                "description": {
                    "text": "Bardzo wygodne krzesło"
                },
                "image": {
                    "url": "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
                }
            },
            {
                "id": "product-id-2",
                "name": "Notatnik",
                "price": {
                    "amount": "9.00",
                    "currency": "EUR"
                },
                "description": {
                    "text": "Notatnik w którym można pisać ołówkiem. Długopisem też."
                },
                "image": {
                    "url": "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1566&q=80"
                }
            },
            {
                "id": "product-id-3",
                "name": "Kamień",
                "price": {
                    "amount": "1000.00",
                    "currency": "GBP"
                },
                "description": {
                    "text": "Skała spoista, zwięzła bez względu na jej rodzaj genetyczny, wielkość frakcji i skład mineralogiczny."
                },
                "image": {
                    "url": "https://images.unsplash.com/photo-1447616061459-f7d9b9329bd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                }
            },
            {
                "id": "product-id-4",
                "name": "Drzewo",
                "price": {
                    "amount": "544.89",
                    "currency": "PLN"
                },
                "description": {
                    "text": "Na całym świecie rośnie obecnie około 3 bilionów 40 miliardów drzew."
                },
                "image": {
                    "url": "https://images.unsplash.com/photo-1458966480358-a0ac42de0a7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                }
            },
            {
                "id": "product-id-5",
                "name": "Kwiatek",
                "price": {
                    "amount": "22.00",
                    "currency": "PLN"
                },
                "description": {
                    "text": "Kwiatek, potrafi rosnąć."
                },
                "image": {
                    "url": "https://images.unsplash.com/photo-1507290439931-a861b5a38200?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2390&q=80"
                }
            }
        ]
    };
}