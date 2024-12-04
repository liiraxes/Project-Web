document.addEventListener("DOMContentLoaded", function () {
    const productContainer = document.getElementById("product-container");
    const allProducts = [...products1, ...products2, ...products3];
  
    allProducts.forEach((product) => {
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
  });
  
