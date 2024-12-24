import restaurantImage from "./restaurant.jpg";
import logoImg from "./logo.png";
const logo = document.createElement("img");
    logo.src = logoImg;
    logo.alt = "LogoOfRestaurant";
    logo.classList.add("logoImage");
    const logoDiv = document.getElementById("logo"); 
    logoDiv.appendChild(logo);

export default function loadHome() {
    const contentPage = document.createElement('div');

    const headline = document.createElement("h1");
    headline.innerHTML = "Welcome to Culinary Delights!";
    contentPage.appendChild(headline);
    const imgContainer = document.createElement("div");
    imgContainer.setAttribute("id", "img-container");
    contentPage.appendChild(imgContainer);

    const image = document.createElement("img"); 
    image.src = restaurantImage; 
    image.alt = "Delicious Food";
    imgContainer.appendChild(image);

    const paragraph = document.createElement("p");
    paragraph.innerHTML = "Welcome to Culinary Delights, where every dish is a celebration of flavors! Our chefs use the freshest ingredients to create culinary masterpieces that will tantalize your taste buds. Whether you're here for a casual meal or a special occasion, we're dedicated to making your dining experience unforgettable. Come and enjoy a delicious journey with us!"
    contentPage.appendChild(paragraph);
    return contentPage;
    
}