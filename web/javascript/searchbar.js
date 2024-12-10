document.addEventListener("DOMContentLoaded", function () {
    const productContainer = document.getElementById("product-container");
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchBtn");
    const sortOptions = document.getElementById("sortOptions");
    const allProducts = [...products1, ...products2]; // Gabungkan semua produk
    let displayedProducts = [...allProducts]; // Produk yang ditampilkan saat ini

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
        displayedProducts = allProducts.filter((product) =>
            product.name.toLowerCase().includes(query) // Filter berdasarkan nama produk
        );
        handleSort(); // Terapkan sorting setelah pencarian
    }

    // Fungsi untuk menangani sorting
    function handleSort() {
        const sortValue = sortOptions.value;
        if (sortValue === "priceLowHigh") {
            displayedProducts.sort((a, b) => parseFloat(a.rawPrice) - parseFloat(b.rawPrice)); // Harga rendah ke tinggi
        } else if (sortValue === "priceHighLow") {
            displayedProducts.sort((a, b) => parseFloat(b.rawPrice) - parseFloat(a.rawPrice)); // Harga tinggi ke rendah
        } else if (sortValue === "nameAZ") {
            displayedProducts.sort((a, b) => a.name.localeCompare(b.name)); // Nama A-Z
        } else if (sortValue === "nameZA") {
            displayedProducts.sort((a, b) => b.name.localeCompare(a.name)); // Nama Z-A
        }
        displayProducts(displayedProducts); // Tampilkan hasil sorting
    }

    // Event listener untuk tombol pencarian
    searchButton.addEventListener("click", handleSearch);

    // Event listener untuk input saat pengguna mengetik
    searchInput.addEventListener("input", handleSearch);

    // Event listener untuk dropdown sorting
    sortOptions.addEventListener("change", handleSort);

});
