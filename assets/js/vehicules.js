document.addEventListener('DOMContentLoaded', function() {
    const vehicles = [
        {
            id: 1,
            name: 'Renault Clio',
            category: 'compact',
            image: 'img/clio.png',
            pricePerDay: 35,
            features: ['GPS', 'Climatisation', '5 portes']
        },
        {
            id: 2,
            name: 'VOLKSWAGEN TOUAREG',
            category: 'berline',
            image: 'img/VOL.png',
            pricePerDay: 70,
            features: ['GPS', 'Bluetooth', 'Sièges cuir']
        },
        {
            id: 3,
            name: 'BMW Série 3',
            category: 'luxe',
            image: 'img/bmw.png',
            pricePerDay: 100,
            features: ['Cuir', 'GPS', 'Premium Sound']
        },
        {
            id: 4,
            name: 'Dacia Duster',
            category: 'suv',
            image: 'img/duster.png',
            pricePerDay: 55,
            features: ['4x4', 'GPS', 'Grand coffre']
        },
        {
            id: 5,
            name: 'Peugeot 308',
            category: 'berline',
            image: 'img/peugeot.png',
            pricePerDay: 50,
            features: ['Climatisation', 'Bluetooth', 'Régulateur']
        },
        {
            id: 6,
            name: 'Mercedes Classe C',
            category: 'luxe',
            image: 'img/mercedes.png',
            pricePerDay: 120,
            features: ['Cuir', 'GPS', 'Toit ouvrant']
        }
    ];

    const vehicleGrid = document.getElementById('vehicleGrid');
    const filterButtons = document.querySelectorAll('.filter-btn');

    function createVehicleCard(vehicle) {
        return `
            <div class="col-md-4 mb-4 vehicle-card" data-category="${vehicle.category}">
                <div class="card vehicle-preview-card text-center h-100">
                    <img src="${vehicle.image}" class="card-img-top" alt="${vehicle.name}">
                    <div class="card-body">
                        <h3 class="card-title">${vehicle.name}</h3>
                        <p class="card-text">
                            ${vehicle.features.map(feature => `<span class="badge bg-secondary me-1">${feature}</span>`).join('')}
                        </p>
                        <p class="price">${vehicle.pricePerDay}€/jour</p>
                        <a href="reservation.html?vehicleId=${vehicle.id}" class="btn btn-dark">Réserver</a>
                    </div>
                </div>
            </div>
        `;
    }

    function displayVehicles(category = 'all') {
        vehicleGrid.innerHTML = vehicles
            .filter(vehicle => category === 'all' || vehicle.category === category)
            .map(createVehicleCard)
            .join('');
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            displayVehicles(this.dataset.category);
        });
    });

    // Active the current page link
    document.getElementById('cars-link').classList.add('active');

    // Initial display of all vehicles
    displayVehicles();
});