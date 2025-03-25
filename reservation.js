// Données des véhicules
const vehicles = [
    {
        id: 1,
        name: "Renault Clio",
        image: "/api/placeholder/250/150",
        pricePerDay: 35
    },
    {
        id: 2,
        name: "Peugeot 308",
        image: "/api/placeholder/250/150",
        pricePerDay: 50
    },
    {
        id: 3,
        name: "Dacia Duster",
        image: "/api/placeholder/250/150",
        pricePerDay: 55
    },
    {
        id: 4,
        name: "Mercedes Classe A",
        image: "/api/placeholder/250/150",
        pricePerDay: 85
    }
];

// Générer les cartes de véhicules
function generateVehicleCards() {
    const vehicleSelection = document.getElementById('vehicleSelection');
    vehicleSelection.innerHTML = '';

    vehicles.forEach(vehicle => {
        const card = document.createElement('div');
        card.classList.add('vehicle-card');
        card.setAttribute('data-id', vehicle.id);
        card.innerHTML = `
            <img src="${vehicle.image}" alt="${vehicle.name}">
            <h4>${vehicle.name}</h4>
            <p>${vehicle.pricePerDay}€/jour</p>
        `;
        card.addEventListener('click', selectVehicle);
        vehicleSelection.appendChild(card);
    });
}

// Sélection du véhicule
function selectVehicle(e) {
    const cards = document.querySelectorAll('.vehicle-card');
    cards.forEach(card => card.classList.remove('selected'));
    e.currentTarget.classList.add('selected');
    updatePriceSummary();
}

// Mettre à jour le récapitulatif du prix
function updatePriceSummary() {
    const selectedCard = document.querySelector('.vehicle-card.selected');
    const startDate = document.getElementById('startDate');
    const duration = document.getElementById('rentalDuration');
    const vehiclePriceSpan = document.getElementById('selectedVehiclePrice');
    const durationDisplay = document.getElementById('rentalDurationDisplay');
    const totalPriceSpan = document.getElementById('totalPrice');

    if (selectedCard && startDate.value && duration.value) {
        const vehicleId = selectedCard.getAttribute('data-id');
        const vehicle = vehicles.find(v => v.id == vehicleId);
        const durationValue = parseInt(duration.value);

        vehiclePriceSpan.textContent = `${vehicle.pricePerDay}€/jour`;
        durationDisplay.textContent = `${durationValue} jour(s)`;
        
        const totalPrice = vehicle.pricePerDay * durationValue;
        totalPriceSpan.textContent = totalPrice;
    }
}

// Gestion de la soumission du formulaire
document.getElementById('reservationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const selectedCard = document.querySelector('.vehicle-card.selected');
    
    if (!selectedCard) {
        alert('Veuillez sélectionner un véhicule');
        return;
    }

    const vehicleId = selectedCard.getAttribute('data-id');
    const vehicle = vehicles.find(v => v.id == vehicleId);
    const formData = {
        vehicle: vehicle.name,
        pickupLocation: document.getElementById('pickupLocation').value,
        startDate: document.getElementById('startDate').value,
        duration: document.getElementById('rentalDuration').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        totalPrice: document.getElementById('totalPrice').textContent
    };

    alert(`Réservation confirmée !\n\nDétails :\n${JSON.stringify(formData, null, 2)}`);
});

// Écouteurs d'événements pour mettre à jour le prix
document.getElementById('startDate').addEventListener('change', updatePriceSummary);
document.getElementById('rentalDuration').addEventListener('change', updatePriceSummary);

// Initialisation
generateVehicleCards();