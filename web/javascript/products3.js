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
        image: "../images/avometer.jpg",
        link: "https://shopee.co.id/MULTIMETER-DIGITAL-PROFESIONAL-AUTO-AC-DC-VOLTAGE-ORIGINAL-i.174663407.27065693377?sp_atk=c5bd31e9-4109-46f0-918a-154ae7cfb190&xptdk=c5bd31e9-4109-46f0-918a-154ae7cfb190"
    },
    {
        id: 12,
        name: "Breadrboard",
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
        image: "../images/breadboard.jpg",
        link: "https://shopee.co.id/Breadboard-MB-102-MB102-830-Point-Solderless-Bread-PCB-Project-Board-i.118074836.23378890370?sp_atk=bac72704-ac8e-4e9b-b650-6a5022994ad8&xptdk=bac72704-ac8e-4e9b-b650-6a5022994ad8"
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
        image: "../images/jumper cable.jpg",
        link:"https://shopee.co.id/40PCS-JUMPER-CABLE-KABEL-20CM-MALE-TO-FEMALE-DUPONT-FOR-BREADBOARD-i.62956347.1063975553?sp_atk=8a58204c-b915-439f-a5ff-aaec4038d078&xptdk=8a58204c-b915-439f-a5ff-aaec4038d078"
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
        image: "../images/solder.jpg",
        link: "https://shopee.co.id/Solder-Murah-Dekko-60-Watt-Original-i.339765736.5777172059?sp_atk=96d2ea89-2a29-4c72-b10d-207a0eff09c1&xptdk=96d2ea89-2a29-4c72-b10d-207a0eff09c1"
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
        image: "../images/mcb.jpg",
        link: "https://shopee.co.id/BROCO-MCB-2-4-6-10-16-20-25-32-40-AMPERE-SNI-KUALITAS-BAGUS-ORIGINAL-i.1078184592.24203924732?sp_atk=e9d4197e-70be-4b10-a15c-c7d2ebeb75cc&xptdk=e9d4197e-70be-4b10-a15c-c7d2ebeb75cc"

    },
];
