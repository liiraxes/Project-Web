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
        image: "../images/resistor10k.jpg"
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
        image: "../images/1K-ohm-05-5-percent.jpg"
    }
]