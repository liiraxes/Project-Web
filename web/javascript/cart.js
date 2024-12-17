let cart = [
    { id: 1, name: 'Produk A', price: 50000, quantity: 2 },
    { id: 2, name: 'Produk B', price: 30000, quantity: 1 },
    { id: 3, name: 'Produk C', price: 70000, quantity: 1 }
];

function renderCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    const totalPriceElement = document.getElementById('totalPrice');
    
    cartItemsContainer.innerHTML = '';
    
    let totalPrice = 0;
    
    cart.forEach(item => {
        const totalItemPrice = item.price * item.quantity;
        totalPrice += totalItemPrice;
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>Rp ${item.price.toLocaleString()}</td>
            <td>
                <input type="number" value="${item.quantity}" min="1" class="quantityInput" data-id="${item.id}">
            </td>
            <td>Rp ${totalItemPrice.toLocaleString()}</td>
            <td><button class="removeItemButton" data-id="${item.id}">Hapus</button></td>
        `;
        
        cartItemsContainer.appendChild(row);
    });
    
    totalPriceElement.textContent = totalPrice.toLocaleString();
}

document.getElementById('cartItems').addEventListener('click', (event) => {
    if (event.target.classList.contains('removeItemButton')) {
        const itemId = parseInt(event.target.getAttribute('data-id'));
        cart = cart.filter(item => item.id !== itemId);
        renderCart();
    }
});

document.getElementById('cartItems').addEventListener('input', (event) => {
    if (event.target.classList.contains('quantityInput')) {
        const itemId = parseInt(event.target.getAttribute('data-id'));
        const newQuantity = parseInt(event.target.value);
        
        const item = cart.find(item => item.id === itemId);
        if (item) {
            item.quantity = newQuantity;
            renderCart();
        }
    }
});

document.getElementById('clearCart').addEventListener('click', () => {
    cart = [];
    renderCart();
});

document.getElementById('checkoutButton').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Keranjang kosong! Tidak bisa checkout.');
    } else {
        alert('Proses checkout dimulai...');
    }
});

renderCart();
