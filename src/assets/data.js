const trips = [
    {
        id: 1,
        title: "Avventura in Islanda",
        description: "Un viaggio tra geyser, cascate e paesaggi mozzafiato.",
        image: "islanda.jpg",
        start_date: "2025-09-10",
        end_date: "2025-09-20",
        price: 1800,
        highlighted: true,
        destination: "Islanda",
        available_seats: 12,
        companions_id: [1,2,3]

    },
    {
        id: 2,
        title: "Tour delle città d’arte italiane",
        description: "Scopri le meraviglie di Roma, Firenze e Venezia.",
        image: "italia.jpg",
        start_date: "2025-10-05",
        end_date: "2025-10-15",
        price: 1200,
        highlighted: false,
        destination: "Italia",
        available_seats: 20,
        companions_id: [5,4,3]

    },
    {
        id: 3,
        title: "Safari in Kenya",
        description: "Vivi l’emozione della natura selvaggia africana.",
        image: "kenya.jpg",
        start_date: "2025-11-01",
        end_date: "2025-11-12",
        price: 2500,
        highlighted: true,
        destination: "Kenya",
        available_seats: 8,
        companions_id: [2,1,5]

    },
    {
        id: 4,
        title: "Relax alle Maldive",
        description: "Spiagge bianche e mare cristallino per una vacanza da sogno.",
        image: "maldive.jpg",
        start_date: "2025-12-20",
        end_date: "2025-12-27",
        price: 3000,
        highlighted: false,
        destination: "Maldive",
        available_seats: 6,
        companions_id: [1,2,3]

    },
    {
        id: 5,
        title: "Trekking sulle Dolomiti",
        description: "Escursioni tra le montagne più belle d’Italia.",
        image: "dolomiti.jpg",
        start_date: "2025-09-15",
        end_date: "2025-09-22",
        price: 900,
        highlighted: true,
        destination: "Dolomiti",
        available_seats: 15,
        companions_id: [1,2,3]

    }
];

const companions = [
    {
        id: 1,
        name: "Luca",
        surname: "Rossi",
        image: "luca.jpg",
        age: 28,
        nationality: "Italiana",
        interests: ["Trekking", "Fotografia"]
    },
    {
        id: 2,
        name: "Sara",
        surname: "Bianchi",
        image: "sara.jpg",
        age: 32,
        nationality: "Italiana",
        interests: ["Arte", "Cucina"]
    },
    {
        id: 3,
        name: "David",
        surname: "Smith",
        image: "david.jpg",
        age: 35,
        nationality: "Inglese",
        interests: ["Safari", "Natura"]
    },
    {
        id: 4,
        name: "Maria",
        surname: "Garcia",
        image: "maria.jpg",
        age: 27,
        nationality: "Spagnola",
        interests: ["Spiaggia", "Yoga"]
    },
    {
        id: 5,
        name: "Giulia",
        surname: "Verdi",
        image: "giulia.jpg",
        age: 30,
        nationality: "Italiana",
        interests: ["Montagna", "Escursioni"]
    }
];