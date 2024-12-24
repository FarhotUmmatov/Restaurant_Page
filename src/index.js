import './style.css';

import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';

const contentDiv = document.getElementById('content');

// Function to clear and load new content
function loadTab(tabFunction) {
    contentDiv.innerHTML = ''; // Clear existing content
    contentDiv.appendChild(tabFunction()); // Load new content
}

// Event Listeners for Tabs
document.getElementById('home-tab').addEventListener('click', () => loadTab(loadHome));
document.getElementById('menu-tab').addEventListener('click', () => loadTab(loadMenu));
document.getElementById('contact-tab').addEventListener('click', () => loadTab(loadContact));

// Load Home tab by default on page load
loadTab(loadHome);