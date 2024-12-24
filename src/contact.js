export default function loadContact() {
    const contactDiv = document.createElement('div');
    contactDiv.innerHTML = `
        <h2>Contact Us</h2> <br>
        <p>Email: contact@restaurant.com</p> <br>
        <p>Phone: +123-456-7890</p>
    `;
    return contactDiv;
}
