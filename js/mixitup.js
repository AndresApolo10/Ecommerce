import {arrayItems} from "./arrayItems.js";

console.log(arrayItems);

const contentProducts = document.querySelector("#contentProducts");

let html = "";

arrayItems.forEach(({id, name, price, image, category, quantity, clasefilter}) => {
    html += `<article class="Products_card ${clasefilter}  ${category}">
    <div class="Products_img">
        <img src="${image}" alt="${name}" class="Products_img1">
    </div>
    <div class="Products_data">
    <h2 class="Products_price"> ${price}
        <span class="Products_cant">|  Stock: ${quantity}</span>
    </h2>
    <h3 class="products_name">${name}</h3>
    <button class="button Products_btn" data-iduser='${id}'>
        <p>+</p>
    </button>
    </div>
</article>`;
    
});

contentProducts.innerHTML = html;

mixitup(".Products_content", {
    selectors: {
        target: ".Products_card"
    },
    animation: {
        duration: 300
    }
}).filter("all");