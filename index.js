
// Gestion des événements de navigation
document.getElementById('cars-link').addEventListener('click', function(e) {
    window.location.href = 'vehicules.html';
});

document.getElementById('rent-now').addEventListener('click', function(e) {
    window.location.href = 'vehicules.html';
});

document.getElementById('reservation-link').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Redirection vers la page de réservation');
});

document.getElementById('contact-link').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Redirection vers la page de contact');
});

// Gestion des événements de navigation
document.getElementById('reservation-link').addEventListener('click', function(e) {
    window.location.href = 'reservation.html';
});

document.getElementById('rent-now').addEventListener('click', function(e) {
    window.location.href = 'reservation.html';
});

document.getElementById('contact-link').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Redirection vers la page de contact');
});

