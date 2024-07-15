// Function to load content dynamically
function loadPage(page) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `${page}.html`, true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById('content').innerHTML = xhr.responseText;
        } else {
            document.getElementById('content').innerHTML = '<p>Sorry, an error occurred while loading the page.</p>';
        }
    };
    xhr.onerror = function() {
        document.getElementById('content').innerHTML = '<p>Sorry, an error occurred while loading the page.</p>';
    };
    xhr.send();
}

// Search functionality
document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value;
    if (query) {
        alert('Searching for: ' + query);
    } else {
        alert('Please enter a search query.');
    }
});

// Toggle popup menu
function togglePopup() {
    const popupMenu = document.getElementById('popup-menu');
    popupMenu.style.display = (popupMenu.style.display === 'block') ? 'none' : 'block';
}

// Close popup menu when clicking outside
window.addEventListener('click', function(event) {
    const popupMenu = document.getElementById('popup-menu');
    if (!popupMenu.contains(event.target) && !event.target.closest('.left')) {
        popupMenu.style.display = 'none';
    }
});

// Load the home page initially
window.onload = function() {
    loadPage('home');
}

// Function to toggle dropdown menu visibility
function toggleDropdown(event, dropdownId) {
    event.preventDefault(); // Prevent the default link behavior
    const dropdown = document.getElementById(dropdownId);
    const allDropdowns = document.querySelectorAll('.dropdown-content');

    // Close all dropdowns
    allDropdowns.forEach(content => {
        if (content !== dropdown) {
            content.style.display = 'none';
        }
    });

    // Toggle the clicked dropdown
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
}

// Close dropdown if clicked outside
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn')) {
        const allDropdowns = document.querySelectorAll('.dropdown-content');
        allDropdowns.forEach(content => {
            if (content.style.display === 'block') {
                content.style.display = 'none';
            }
        });
    }
}
