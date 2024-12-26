import './style.css';
import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';
const contentDiv = document.getElementById('content');
function loadTab(tabFunction) {
    contentDiv.innerHTML = ''; // Clear existing content
    contentDiv.appendChild(tabFunction()); // Load new content
}
document.getElementById('home-tab').addEventListener('click', () => loadTab(loadHome));
document.getElementById('menu-tab').addEventListener('click', () => loadTab(loadMenu));
document.getElementById('contact-tab').addEventListener('click', () => loadTab(loadContact));
loadTab(loadHome);