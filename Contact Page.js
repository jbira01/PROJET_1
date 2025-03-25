// Add contact form submission handler
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    this.reset();
    app.showNotification('Your message has been sent successfully!');
});

// Update CarManager class to handle new pages
class CarManager {
    // ... existing code ...

    loadPage(hash) {
        const pageId = hash.substring(1);
        this.setActivePage(pageId);
        
        switch(pageId) {
            // ... existing cases ...
            case 'contact':
            case 'about':
            case 'services':
                // Handle any dynamic content for these pages
                break;
        }
    }
}