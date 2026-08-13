const category = document.querySelector("#category");
const productsDiv = document.querySelector("#products");

// Show all products when page loads
showAllProducts();

function showAllProducts() {

    fetch("https://fakestoreapi.com/products")

        .then(function (response) {
            return response.json();
        })

        .then(function (products) {

            productsDiv.innerHTML = "";

            products.forEach(function (product) {

                productsDiv.innerHTML += `
                    <div onclick="showProduct(${product.id})">
                        <img src="${product.image}" width="150">
                        <h3>${product.title}</h3>
                        <p>$${product.price}</p>
                    </div>
                    <hr>
                `;

            });

        });

}

// Filter by category
category.addEventListener("change", function () {

    if (category.value === "all") {

        showAllProducts();

    } else {

        fetch(`https://fakestoreapi.com/products/category/${category.value}`)

            .then(function (response) {
                return response.json();
            })

            .then(function (products) {

                productsDiv.innerHTML = "";

                products.forEach(function (product) {

                    productsDiv.innerHTML += `
                        <div onclick="showProduct(${product.id})">
                            <img src="${product.image}" width="150">
                            <h3>${product.title}</h3>
                            <p>$${product.price}</p>
                        </div>
                        <hr>
                    `;

                });

            });

    }

});

// Show single product on the same page
function showProduct(id) {

    fetch(`https://fakestoreapi.com/products/${id}`)

        .then(function (response) {
            return response.json();
        })

        .then(function (product) {

            productsDiv.innerHTML = `
                <button onclick="showAllProducts()">⬅ Back</button>

                <br><br>

                <img src="${product.image}" width="250">

                <h2>${product.title}</h2>

                <h3>$${product.price}</h3>

                <p>${product.description}</p>

                <h4>Category: ${product.category}</h4>

                <h4>Rating: ${product.rating.rate}</h4>

                <h4>Reviews: ${product.rating.count}</h4>
            `;

        });

}