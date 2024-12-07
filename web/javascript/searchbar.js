document.addEventListener("DOMContentLoaded", function () {
    const productContainer = document.getElementById("product-container");
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchBtn");
    const allProducts = [...products1, ...products2, ...products3]; // Gabungkan semua produk

    // Fungsi untuk menampilkan produk berdasarkan array tertentu
    function displayProducts(products) {
        productContainer.innerHTML = ""; // Kosongkan container produk
        products.forEach((product) => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");

            // Tambahkan ID produk sebagai atribut data
            productCard.setAttribute("data-product-id", product.id);

            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Harga: ${product.price}</p>
            `;

            // Tambahkan event listener untuk navigasi ke halaman detail
            productCard.addEventListener("click", function () {
                localStorage.setItem("productId", product.id); // Simpan ID produk
                window.location.href = "productdetail.html"; // Pindah ke halaman detail
            });

            productContainer.appendChild(productCard);
        });
    }

    // Tampilkan semua produk saat halaman dimuat
    displayProducts(allProducts);

    // Fungsi untuk menangani pencarian
    function handleSearch() {
        const query = searchInput.value.toLowerCase(); // Ambil nilai input dan ubah ke huruf kecil
        const filteredProducts = allProducts.filter((product) =>
            product.name.toLowerCase().includes(query) // Filter berdasarkan nama produk
        );
        displayProducts(filteredProducts); // Tampilkan produk hasil pencarian
    }

    // Event listener untuk tombol pencarian
    searchButton.addEventListener("click", handleSearch);

    // Event listener untuk input saat pengguna mengetik
    searchInput.addEventListener("input", handleSearch);
});
