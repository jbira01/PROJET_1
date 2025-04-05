
// Navigation and Event Handling
document.getElementById('cars-link').addEventListener('click', function(e) {
    window.location.href = 'vehicules.html';
});

document.getElementById('rent-now').addEventListener('click', function(e) {
    window.location.href = 'reservation.html';
});

document.getElementById('reservation-link').addEventListener('click', function(e) {
    window.location.href = 'reservation.html';
});

document.getElementById('contact-link').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Redirection vers la page de contact');
});
