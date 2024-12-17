function formatToRupiah(amount) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0, 
        maximumFractionDigits: 0,
    }).format(amount);
}

const products1 = [
    {
        id: 1,
        name: "Arduino UNO R3 SMD CH340 TYPE-C",
        price: formatToRupiah(50000),
        rawPrice: 50000,
        description: "Arduino R3 ini menggunakan IC ATMEGA328PB type SMD yang disupport IC driver FT232.",
        specifications: [
            "USB PORT : TYPE C",
            "Microcontroller : ATmega328 SMD",
            "Operating Voltage : 5V",
            "Input Voltage (recommended) : 7-12V",
            "Digital I/O Pins : 14  (of which 6 provide PWM output)",
            "Analog Input Pins : 6",
            "Flash Memory : 32 KB (ATmega328PB) of which 0.5 KB used by bootloader",
            "SRAM : 2 KB (ATmega328PB)",
            "EEPROM : 1 KB (ATmega328PB)",
            "Clock Speed : 16 MHz",
        ],
        applications: [
            "Platform mikrokontroler untuk pengembangan embedded system",
            "Pemrosesan data dari sensor dan transduser",
            "Pengontrol aktuator untuk sistem otomatisasi",
            "Pengolahan dan pemrosesan data real-time",
            "Sistem robotika dan otomasi"
        ],
        image: "/web/images/arduino uno r3.jpg",
        link: "https://id.shp.ee/wj8N7PV" 
    },

    {
        id: 2,
        name: "TEMPERATURE HUMIDITY SENSOR",
        price: formatToRupiah(25500),
        rawPrice: 25500,
        description: "Sensor dengan tipe Module DHT22/AM2302. Harga ini sudah include kabel jumper sebanyak 3 pin jenis Female-to Female sepanjang 20 cm.",
        specifications: [
            "Type: DHT22/AM2302.",
            "Accuracy resolution:0.1",
            "Humidity range:0-100%RH",
            "Temperature range:-Humidity measurement precision:2%RH",
            "Temperature measurement precision",
            "3-pin package",
            "Ultra-low power",
            "No additional components",
            "Excellent long-term stability",
            "All calibration, digital output",
            "Completely interchangeable",
            "Long distance signal transmission",
            "Relative humidity and temperature measurement",
            "Voltage : 5V"
        ],
        applications: [
          "Alat pengukur suhu dan kelembaban",
          "Pengontrol suhu dan kelembaban pada inkubator",
          "Pengontrol suhu dan kelembaban ruangan penyimpanan obat",
          "Pengontrol suhu dan kelembaban alat penetas telur",
          "Pengontrol suhu dan kelembaban ruangan budidaya tanaman seperti jamur"
        ],
        image: "/web/images/sensor_suhu.jpg",
        link: "https://id.shp.ee/ovbvsfj"
    },
 
    {
        id: 3,
        name: "INFRARED BARRIER SENSOR",
        price: formatToRupiah(4500),
        rawPrice: 4500,
        description: "Infrared Barrier Sensor adalah sensor pendeteksi halangan yang bekerja berdasarkan prinsip pemantulan cahaya infra red. Sensor ini memancarkan sinar infra red melalui pemancar (IR LED), dan jika ada objek atau halangan di depannya, cahaya tersebut akan dipantulkan kembali. Pantulan cahaya infra red tersebut kemudian diterima oleh photodioda sebagai penerima. Sensor ini efektif untuk mendeteksi objek dalam jarak tertentu.",
        specifications: [
            "Tegangan kerja: 3-5V",
            "Output: Digital",
            "Jarak deteksi: 2 ~ 30cm",
            "Akurasi dan Kestabilan: Tinggi",
            "Ukuran/size: 3.1CM * 1.5CM",
            "IC yang dipakai: comparators LM393, stable;"
                        
        ],
        applications: [
            "Sensor jarak untuk mendeteksi objek pada jarak tertentu",
            "Pendeteksi keberadaan benda",
            "Sensor penghitung (counter) pada sistem konveyor",
            "Sensor navigasi untuk robot penghindar rintangan"
        ],
        image: "/web/images/sensor_halangan.jpg",
        link: "https://id.shp.ee/4jfebwq"
    },
    {
        id: 4,
        name: "INA219 I2C Power Meter - Arus dan Tegangan",
        price: formatToRupiah(31000),
        rawPrice: 31000,
        description: "SENSOR DAYA INA219 I2C CJMCU-219 adalah modul sensor untuk mengukur arus, tegangan, dan daya pada sebuah perangkat atau sirkuit.",
        specifications: [
            "Dapat mengukur tegangan, arus dan daya listrik pada beban",
            "Interface i2C (SDA SCL)",
            "Dapat diubah i2c addressnya (available 16 address)",
            "Dapat diparalel hingga 16 address berbeda dalam 1 komunikasi",
            "Akurasi pengukuran sangat bagus (miss 0.5%)",
            "Power supply : 3.3v - 5v",
            "Data level : 3.3v-5v",
            "Pengukuran tegangan : 0 ~ +26V DC",
            "Pengukuran arus : 0 ~ 3.2A"
           
        ],
        applications: [
            "Mengukur konsumsi daya pada lampu LED",
            "Sistem manajemen baterai lithium-ion untuk kendaraan listrik",
            "Pengukur konsumsi energi pada sensor IoT di lingkungan luar"
        ],
        image: "/web/images/sensor_daya.jpg",
        link: "https://id.shp.ee/uW6iRjv"
    },
    {
        id: 5,
        name: "Relay 5V LDR - Modul Lampu Otomatis dengan Deteksi Cahaya",
        price: formatToRupiah(24000),
        rawPrice: 24000,
        description: "modul yang menggabungkan Relay, LDR (Light Dependent Resistor), dan circuit control untuk mendeteksi cahaya secara otomatis",
        specifications: [
            "Power supply DC5V - DC12V",
            "Quiescent current 12mA 15mA 12mA",
            "Maximum power consumption 72mA 45mA 28mA",
            "Relay load capacity: 250V 10A (AC) 30V 10A (DC)",
            "Ambient temperature: <80 degrees",
            "Delay range: plug in S2. Delay 1-20 seconds adjustable, not inserted S2, 1-200 seconds",
            "Module size: 63.5x38.5x18.5mm Module net weight: 28g"
        ],
        applications: [
            "Sistem penerangan jalan otomatis",
            "Proyek IoT dan smart home untuk pengendalian cahaya",
            "Aplikasi otomatisasi lainnya"
        ],
        image: "/web/images/sensor_cahaya.jpg",
        link: "https://id.shp.ee/AwxkF3E"
    },
];
