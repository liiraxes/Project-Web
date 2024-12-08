function formatToRupiah(amount) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0, 
        maximumFractionDigits: 0,
    }).format(amount);
}

const products2 = [
    {
        id: 6,
        name: "Resistor 10K Ohm (10 Pcs)",
        price: formatToRupiah(2500),
        description: "Resistor 10K Ohm 10 K 1/4W Metal Film 1/4 W watt - 10KOhm 5% 10 pcs",
        specifications: [
            "Resistance Model : 10KΩ Ohm",
	        "Voltage : 1/4 Watt",
	        "Resistance Tolerance : ±5%",
	        "Main Material : Flame Retardant Coating",
	        "Lead Free & RoHS Compliant",

        ],
        applications: [

        ],
        image: "/web/images/resistor10k.jpg"
    },

    {
        id: 7,
        name: "Resistor 1K Ohm 10 Pcs",
        price: formatToRupiah(1000),
        description: "Resistor 10K Ohm 10 K 1/4W Metal Film 1/4 W watt - 10KOhm 5% 10 pcs",
        specifications: [
            "Resistance : 1 kOhm",
            "Power Rating : 250 mW (1/4 W)",
            "Tolerance : 0.1 %",
            "Temperature Coefficient : 15 PPM / C",
            "Voltage Rating : 250 V",
            "Operating Temperature Range : - 55 C to + 155 C",
            "Length : 7.1 mm",
            "Diameter : 2.3 mm",
        ],
        applications:[

        ],
        image: "/web/images/1K-ohm-05-5-percent.jpg"
    },

    {
        id: 8,
        name: "Kapasitor Elektrolit Elko 10UF/25V",
        price: formatToRupiah(300),
        description: "CAPACITOR ELECTROLYTIC ELCO KAPASITOR ELEKTROLIT ELKO 100UF 100U 25V",
        specifications: [
            "Capacitance :10 uF",
            "Voltage Rating DC : 25 VDC",
            "Tolerance : 20 %",
            "Ripple Current : 455 mA",
            "Maximum Operating Temperature : + 105 C",
            "Diameter: 5 mm",
            "Length: 11 mm",
            "Lead Spacing : 2.5 mm",
        ],
        applications: [

        ],
        image: "/web/images/34120462_c4e1cb14-9ef1-45bb-95cc-e96b230f4bec_500_500.jpeg"
    },

    {
    id: 9,
    name: "Kapasitor Elektrolit Elko 10UF/50V",
    price: formatToRupiah(150),
    description: "CAPACITOR ELECTROLYTIC ELCO KAPASITOR ELEKTROLIT ELKO 10UF 10UF/50V",
    specifications: [
        "Capacitance :10 uF",
        "Voltage Rating DC : 50 VDC",
        "Tolerance : 20 %",
        "Ripple Current : 455 mA",
        "Maximum Operating Temperature : + 105 C",
        "Diameter: 5 mm",
        "Length: 11 mm",
        "Lead Spacing : 2.5 mm",
    ],
    applications: [

    ],
    image: "/web/images/0_fc9e2a22-1815-49e7-9a8a-eefab85837d6_700_700.jpg"
    },

    {
    id: 10,
    name: "Kapasitor Elektrolit Elko 100UF/25V",
    price: formatToRupiah(200),
    description: "CAPACITOR ELECTROLYTIC ELCO KAPASITOR ELEKTROLIT ELKO 100UF 100U 25V",
    specifications: [
        "Capacitance : 100 uF",
        "Voltage Rating DC : 25 VDC",
        "Tolerance : 20 %",
        "Ripple Current : 455 mA",
        "Maximum Operating Temperature : + 105 C",
        "Diameter: 6 mm",
        "Length: 12 mm",
        "Lead Spacing : 2.5 mm",
    ],
    applications: [

    ],
    image: "/web/images/100uF.jpg"
    },
        
]