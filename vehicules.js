
// Données des véhicules
const vehicles = [
    {
        id: 1,
        name: "Renault Clio",
        category: "compact",
        image: "/api/placeholder/250/200",
        pricePerDay: 35,
        details: "Citadine économique parfaite pour la ville"
    },
    {
        id: 2,
        name: "Peugeot 308",
        category: "berline",
        image: "/api/placeholder/250/200",
        pricePerDay: 50,
        details: "Berline confortable et élégante"
    },
    {
        id: 3,
        name: "Dacia Duster",
        category: "suv",
        image: "/api/placeholder/250/200",
        pricePerDay: 55,
        details: "SUV robuste idéal pour les voyages"
    },
    {
        id: 4,
        name: "Mercedes Classe A",
        category: "luxe",
        image: "/api/placeholder/250/200",
        pricePerDay: 85,
        details: "Voiture de luxe moderne et sophistiquée"
    },
    {
        id: 5,
        name: "Citroën C3",
        category: "compact",
        image: "/api/placeholder/250/200",
        pricePerDay: 40,
        details: "Compacte et confortable"
    },
    {
        id: 6,
        name: "BMW Série 3",
        category: "berline",
        image: "/api/placeholder/250/200",
        pricePerDay: 75,
        details: "Berline premium avec performances exceptionnelles"
    }
];

// Fonction pour générer les cartes de véhicules
function displayVehicles(category = 'all') {
    const grid = document.getElementById('vehicleGrid');
    grid.innerHTML = '';

    const filteredVehicles = category === 'all' 
        ? vehicles 
        : vehicles.filter(vehicle => vehicle.category === category);

    filteredVehicles.forEach(vehicle => {
        const card = document.createElement('div');
        card.classList.add('vehicle-card');
        card.innerHTML = `
            <img src="${vehicle.image}" alt="${vehicle.name}">
            <div class="vehicle-info">
                <h3>${vehicle.name}</h3>
                <p>${vehicle.details}</p>
                <div class="vehicle-details">
                    <span class="price">${vehicle.pricePerDay}€/jour</span>
                    <i class="fas fa-car"></i>
                </div>
                <a href="#" class="reserve-btn" data-id="${vehicle.id}">Réserver</a>
            </div>
        `;
        grid.appendChild(card);
    });

    // Ajout des événements de réservation
    document.querySelectorAll('.reserve-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const vehicleId = this.getAttribute('data-id');
            alert(`Réservation du véhicule ${vehicleId} - Fonctionnalité à développer`);
        });
    });
}

// Initialisation des filtres
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Réinitialiser l'état des boutons
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        // Filtrer les véhicules
        const category = this.getAttribute('data-category');
        displayVehicles(category);
    });
});

// Afficher tous les véhicules au chargement
displayVehicles();

// Gestion de la navigation
document.getElementById('home-link').addEventListener('click', function(e) {
    window.location.href = 'index.html';
});

document.getElementById('reservation-link').addEventListener('click', function(e) {
    window.location.href = 'reservation.html';
});

document.getElementById('contact-link').addEventListener('click', function(e) {
    window.location.href = 'contact.html';
});
