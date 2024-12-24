export default function loadMenu() {
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');
    menuDiv.innerHTML = `
        <h2>Our Menu</h2>
        <ul>
            <li>Palov</li>
            <li>Döner</li>
            <li>Pasta</li>
            <li>Pizza</li>
        </ul>
    `;
    return menuDiv;
}
