function formatToRupiah(amount) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0, 
        maximumFractionDigits: 0,
    }).format(amount);
}

const products3 = [
    {
        id: 11,
        name: "MULTIMETER DIGITAL",
        price: formatToRupiah(70000),
        rawPrice: 70000,
        description: "Multimeter digital ini dilengkapi dengan LCD dan hadir dengan design yang ringan dan kecil sehingga dapat Anda bawa kemana saja.",
        specifications: [
            "Material : ABS",
            "Dimension : 67.5 x 30 x 130 mm",
            "Baterai : 6F22 9 V",
            "layar : LCD",
            
        ],
        applications: [
            "Mengukur tegangan",
            "Mengukur arus",
            "Mengukur hambatan",
            "Memeriksa koneksi dan kabel",
            "Memeriksa dioda dan transistor",
            "Mengecek baterai"
        ],
        image: "../images/avometer.jpg"
    },
    {
        id: 12,
        name: "Breadboard",
        price: formatToRupiah(10000),
        rawPrice: 10000,
        description: "Breadboard ini digunakan untuk prototyping atau pengetesan sebelum dibuat langsung ke rangkaian.",
        specifications: [
            "Solderless Breadboard 830 titik",
            "Re-usable",
            "Low static",
            "Bisa dimasuki kabel berukuran 20-29AWG",
            "Size: 165mm (L) x 55mm (W)",
            
        ],
        applications: [
            "Prototyping Rangkaian Elektronik",
            "Pengujian Komponen",
            "Pengembangan dan Percobaan dengan Mikrokontroler",
            "Membangun Rangkaian Analog dan Digital",
            "Sistem Kontrol dan Otomatisasi"
        ],
        image: "../images/breadboard.jpg"
    },
    {
        id: 13,
        name: "Jumper Cable",
        price: formatToRupiah(10000),
        rawPrice: 10000,
        description: "Kabel jumper untuk digunakan menghubungkan dua titik dalam rangkaian elektronik, terutama di breadboard atau pada perangkat elektronik.",
        specifications: [
            "Jumlah: 40pcs",
            "Panjang : 20cm",
            "Tipe : MALE TO FEMALE",
            "Pitch : 2.54mm pin header",
                        
        ],
        applications: [
            "Prototyping dan Pengujian Rangkaian",
            "Penghubung Mikrokontroler dengan Komponen Lain",
            "Pengujian dan Perbaikan Rangkaian Elektronik",
            "Sambungan Tegangan dan Ground"
        ],
        image: "../images/jumper cable.jpg"
    },
    {
        id: 14,
        name: "SOLDER",
        price: formatToRupiah(80000),
        rawPrice: 80000,
        description: "Solder adalah alat yang digunakan untuk menyambung atau menghubungkan dua atau lebih komponen elektronik secara permanen dengan menggunakan teknik pemanasan. ",
        specifications: [
            "Voltage : 220 V",
            "Daya : 60 Watt",
            "Panjang Alat : 200 mm (+/-)",
            "Lebar Mata Solder : 10 mm (+/-)",
            "Tinggi Mata : 250 mm (+/-)",
           
        ],
        applications: [
            "Penyolderan Komponen Elektronik",
            "Perbaikan Elektronik",
            "Industri Elektronik dan Manufaktur",
            "Perbaikan dan Pengelasan Kabel",
            "Solder dalam Pengelasan Kecil",
            "Pembuatan Alat-alat Elektronik",
        ],
        image: "../images/solder.jpg"
    },
    {
        id: 15,
        name: "MCB (Miniature Circuit Breaker)",
        price: formatToRupiah(40000),
        rawPrice: 40000,
        description: "MCB atau Miniature Circuit Breaker adalah komponen listrik yang berfungsi untuk memutus aliran listrik secara otomatis saat terjadi gangguan.",
        specifications: [
            "Poles description : 1P",
            "Number of protected poles : 1",
            "Network type : AC",
            "Curve code : C",
            "Breaking capacity : 6000 A conforming to IEC 60898-1 - 230 V AC 50 Hz",
            "network frequency : 50 Hz",
            "Comb busbar and distribution block compatibility : YES",
            "9 mm pitches : 2",
            "Colour : White",
        ],
        applications: [
            "Pembangkit Listrik dan Distribusi Energi",
            "Pemasangan di Rumah Tangga",
            "Sistem Kelistrikan Komersial dan Perkantoran",
            "Industri dan Pabrik",
            "Sistem Tenaga Surya (Solar)",
            "Sistem Listrik Kendaraan dan Otomotif",
            "Pembangunan dan Konstruksi Bangunan",
            "Pemasangan pada Sistem HVAC (Heating, Ventilation, Air Conditioning)",
            "Kendali Otomatis dan Sistem Keamanan",
            "Sistem Penyedia Listrik untuk Jaringan Telekomunikasi",
        ],
        image: "../images/mcb.jpg"
    },
];
