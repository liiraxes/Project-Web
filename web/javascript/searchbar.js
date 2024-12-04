const searchInput = document.getElementById('seachInput');
const searchBtn = document.getElementById('searchBtn');
const boxes = document.querySelectorAll('.container > div')

function search(){
    const query = searchInput.value.toLowerCase();
    boxes.forEach(box => {
        if (box.textContent.toLocaleLowerCase().includes(query)){
            box.style.display = 'block';
        } else {
            box.style.display = 'none';
        }
    });
}

searchBtn.addEventListener('click', searchContent);

// Penjelasan
// Input Handling: Nilai dari input diambil dengan searchInput.value dan diubah menjadi huruf kecil menggunakan .toLowerCase() untuk pencarian yang tidak peka huruf besar/kecil.
// Filter Konten: Semua elemen di .container dicek menggunakan includes() untuk melihat apakah teks pencarian cocok dengan konten elemen tersebut.
// Pengaturan Tampilan: Gunakan style.display untuk menyembunyikan (none) atau menampilkan (block) elemen.