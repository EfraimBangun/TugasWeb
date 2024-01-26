
let cart = [];
function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    cartTotal.textContent = total.toFixed(2);
}

function openSearch() {
    document.getElementById('searchModal').style.display = 'block';
}

function closeSearch() {
    document.getElementById('searchModal').style.display = 'none';
}

function openCart() {
    updateCart();
    document.getElementById('cartModal').style.display = 'block';
}

function closeCart() {
    document.getElementById('cartModal').style.display = 'none';
}

function checkout() {
    // Implement the checkout process (e.g., payment, order confirmation) here
    alert('Thank you for your purchase!');
    cart = [];
    updateCart();
    closeCart();
}
