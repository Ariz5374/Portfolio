const category = document.querySelector("#category");
const productsDiv = document.querySelector("#products");
const API = "https://fakestoreapi.com/products";

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, function (ch) {
        return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
    });
}

function showLoading() {
    productsDiv.innerHTML = '<p class="status" role="status">Loading products…</p>';
}

// Friendly message + retry button instead of a blank page when the API is down
function showError(retryFn) {
    productsDiv.innerHTML =
        '<div class="status" role="alert">' +
        "<p>Sorry, products couldn't be loaded. Check your connection and try again.</p>" +
        '<button type="button" id="retryBtn">Try again</button></div>';
    document.querySelector("#retryBtn").addEventListener("click", retryFn);
}

function getJSON(url) {
    return fetch(url).then(function (response) {
        if (!response.ok) throw new Error("Request failed: " + response.status);
        return response.json();
    });
}

function renderProducts(products) {
    if (!products.length) {
        productsDiv.innerHTML = '<p class="status">No products found in this category.</p>';
        return;
    }
    productsDiv.innerHTML = products.map(function (product) {
        return `
            <div class="product" tabindex="0" role="button" data-id="${Number(product.id)}">
                <img src="${escapeHTML(product.image)}" alt="${escapeHTML(product.title)}" width="150">
                <h3>${escapeHTML(product.title)}</h3>
                <p>$${escapeHTML(product.price)}</p>
            </div>
            <hr>
        `;
    }).join("");
}

function loadProducts() {
    showLoading();
    const url = category.value === "all"
        ? API
        : API + "/category/" + encodeURIComponent(category.value);

    getJSON(url)
        .then(renderProducts)
        .catch(function () { showError(loadProducts); });
}

function showProduct(id) {
    showLoading();
    getJSON(API + "/" + id)
        .then(function (product) {
            productsDiv.innerHTML = `
                <button type="button" id="backBtn">⬅ Back</button>
                <br><br>
                <img src="${escapeHTML(product.image)}" alt="${escapeHTML(product.title)}" width="250">
                <h2>${escapeHTML(product.title)}</h2>
                <h3>$${escapeHTML(product.price)}</h3>
                <p>${escapeHTML(product.description)}</p>
                <h4>Category: ${escapeHTML(product.category)}</h4>
                <h4>Rating: ${escapeHTML(product.rating.rate)}</h4>
                <h4>Reviews: ${escapeHTML(product.rating.count)}</h4>
            `;
            document.querySelector("#backBtn").addEventListener("click", loadProducts);
        })
        .catch(function () { showError(function () { showProduct(id); }); });
}

// Open a product from a click or keyboard (Enter / Space)
productsDiv.addEventListener("click", function (event) {
    const card = event.target.closest(".product");
    if (card) showProduct(card.dataset.id);
});
productsDiv.addEventListener("keydown", function (event) {
    const card = event.target.closest(".product");
    if (card && (event.key === "Enter" || event.key === " ")) {
        event.preventDefault();
        showProduct(card.dataset.id);
    }
});

category.addEventListener("change", loadProducts);

loadProducts();
