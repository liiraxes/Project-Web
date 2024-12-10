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
        name: "Arduino UNO R3 ATMEGA328P SMD CH340 ATMEGA328P TYPE-C",
        price: formatToRupiah(50000),
        rawPrice: 50000,
        description: "Arduino R3 ini menggunakan IC ATMEGA328PB type SMD yang disupport IC driver FT232 yang lebih ekonomis namun tetap handal.",
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
            "Mikrokontroler",
            "Pemrosesan sensor dan transducer",
            "Kontrol Aktuator",
            "Pemrosesan data",
            "Robotik",
            "Industrial"
        ],
        image: "/web/images/arduino uno r3.jpg"
    },


    {
        id: 2,
        name: "DHT22 AM2302 TEMPERATURE HUMIDITY SENSOR SUHU MODULE FOR ARDUINO",
        price: formatToRupiah(25500),
        rawPrice: 25500,
        description: "Module DHT-22 ini sudah berbentuk module, jadi ini bisa langsung dipakai, tidak perlu penambahan komponen lainnya seperti resistor ataupun kapasitor. Harga ini sudah include kabel jumper sebanyak 3 pin jenis Female-to Female sepanjang 20 cm.",
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
            "Controler Incubator",
            "Controler Suhu dan Kelembaban ruangan Obat",
            "Controler Suhu dan Kelembaban Alat penetas telur",
            "Controler Suhu dan Kelembaban ruangan Tanaman Jamur dll"
        ],
        image: "/web/images/sensor_suhu.jpg"
    },
 
    {
        id: 3,
        name: "INFRARED BARRIER OBSTACLE SENSOR HALANGAN RINTANGAN MODULE",
        price: formatToRupiah(4500),
        rawPrice: 4500,
        description: "INFRARED BARRIER OBSTACLE SENSOR ini merupakan sebuah sensor pendeteksi halangan, dengan konsep pemantulan cahaya infrared pada jarak tertentu maka pantulannya akan diterima oleh photodioda yang ada pada module ini. Outputnya sendiri merupakan output logik digital high dan low , jadi lebih mudah dalam memakainya.",
        specifications: [
            "Tegangan kerja: 3-5V",
            "Output: Digital",
            "Jarak deteksi: 2 ~ 30cm",
            "Akurasi dan Kestabilan: Tinggi",
            "Ukuran/size: 3.1CM * 1.5CM",
            "IC yang dipakai: comparators LM393, stable;"
                        
        ],
        applications: [
            "Sensor jarak",
            "Pendeteksi benda",
            "Sensor counter pada conveyor",
            "Untuk robot penghidar rintangan"
        ],
        image: "/web/images/sensor_halangan.jpg"
    },
    {
        id: 4,
        name: "SENSOR DAYA INA219 I2C CJMCU-219 POWER METER ARUS DAN TEGANGAN",
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
            "Mengukur konsumsi daya lampu LED",
            "Sistem manajemen baterai lithium-ion pada kendaraan listrik",
            "Mengukur konsumsi energi sensor IoT di lingkungan luar",
            "dll"
        ],
        image: "/web/images/sensor_daya.jpg"
    },
    {
        id: 5,
        name: "RELAY 5V LDR LAMPU OTOMATIS MODULE PHOTOSENSITIVE RESISTANCE LIGHT DETECTION",
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
            "Sistem penerangan jalan",
            "Proyek IoT atau smarthome",
            "dll"
        ],
        image: "/web/images/sensor_cahaya.jpg"
    },
];
