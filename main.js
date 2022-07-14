//import "./js/arrayItems.js";

const iconBurger = document.querySelector("#icon_burger");
const menu = document.querySelector("#menu");
const show = document.querySelector("#show");
const iconCerrar = document.querySelector("#icon_cerrar");
const cartClose = document.querySelector("#cart_close");
const iconCarrito = document.querySelector("#icon_carrito");
const productsContainer = document.querySelector(".Products_content");
const productsCart = document.querySelector("#carduno");
const cartPricesTotal = document.querySelector(".cart_prices-total");
const cartPricesItem = document.querySelector(".cart_prices-item")

iconBurger.addEventListener("click", function (){
    menu.classList.toggle("show__menu");
});

iconCerrar.addEventListener("click", function (){
    menu.classList.toggle("show__menu");
});

cartClose.addEventListener("click", function (){
    show.classList.toggle("show-cart");
});

iconCarrito.addEventListener("click", function (){
    show.classList.toggle("show-cart");
});

const arrayItems = [
    {
        id: 1,
        name: 'Hoddies',
        price: 14.00,
        image: './img/img/featured1.png',
        category: 'hoddies',
        quantity: 10,
        clasefilter: 'hod',
    },
    {
        id: 2,
        name: 'Shirts',
        price: 24.00,
        image: './img/img/featured2.png',
        category: 'shirts',
        quantity: 15,
        clasefilter: 'shir',
    },
    {
        id: 3,
        name: 'Sweatshirts',
        price: 24.00,
        image: './img/img/featured3.png',
        category: 'sweatshirts',
        quantity: 20,
        clasefilter: 'swea',
    },
];

const order = {};

productsCart.addEventListener("click", (event) => {
    if(event.target.classList.contains("rest")){
        const id= parseInt(event.target.parentElement.id);

        if(order[id].amount === 1) {
            const res = confirm("Seguro quieres eliminar esto?");

            if(res){
                delete order[id];
            }
        } else {
            order[id].amount--;
        }
    }
   
    if(event.target.classList.contains("sum")) {
        const id = parseInt(event.target.parentElement.id);

        if(order[id].quantity > order[id].amount) {
            order[id].amount++;
        } else {
            alert("No tenemos disponibilidad")
        }
    }

    if(event.target.classList.contains("del")){
        const id = parseInt(event.target.parentElement.id);

        const res = confirm("Seguro quieres eliminar esto?");

        if(res){
            delete order[id];
        }
    }
    printTotalItems();
   // printPrecio(order);
    printTotalPrice();
    printCart(order);
});


    
    document.addEventListener("click", function (event){
        if(event.target.classList.contains("button")){
            const idUser = event.target.dataset.iduser;

            let currentProducts = null;

            for (let i = 0; i < arrayItems.length; i++) {
                if(arrayItems[i].id === parseInt(idUser)){
                    currentProducts = arrayItems[i];
                }
            }
           
            if(order[currentProducts.id]){
                if(order[currentProducts.id].amount === order[currentProducts.id].quantity)
                {
                    alert("Ya no quedan mas productos");
                    return;
                }
                order[currentProducts.id].amount++;
            } else{
                order[currentProducts.id] = currentProducts;
                order[currentProducts.id].amount = 1;
            }


            const amount = document.querySelector("#amount");
            amount.textContent = Object.entries(order).length;
           
               
        }
        printTotalItems();
       // printPrecio(order);
        printTotalPrice();
        printCart(order);
    });

function printTotalPrice(){
    const productsArray = Object.values(order);

    let suma = 0;

    productsArray.forEach((n) => {
        suma += n.amount * n.price;
    });

    cartPricesTotal.textContent = "$" + parseFloat(suma).toFixed(2);
}

function printTotalItems(){
    const itemsArray = Object.values(order);

    let suma = 0;

    itemsArray.forEach((n) => {
        suma += n.amount;
    });

    cartPricesItem.textContent = suma + " Items";
}


function printProducts(arrayItems){

    let html = '';

    for (let i = 0; i < arrayItems.length; i++) {
        html += `<article class="Products_card ${arrayItems[i].category}">
                    <div class="Products_img">
                        <img src="${arrayItems[i].image}" alt="${arrayItems[i].name}" class="Products_img1">
                    </div>
                    <div class="Products_data">
                    <h2 class="Products_price"> ${arrayItems[i].price}
                        <span class="Products_cant">|  Stock: ${arrayItems[i].quantity}</span>
                    </h2>
                    <h3 class="products_name">${arrayItems[i].name}</h3>
                    <button class="button Products_btn" data-iduser='${arrayItems[i].id}'>
                        <p>+</p>
                    </button>
                    </div>
                </article>`;   
    }

    productsContainer.innerHTML = html;
}



function printCart(object){
    

    let html = '';
    for (const producto in object) {
          html += `<div class="conteiner"
          <div class="cart__box">
              <img src="${object[producto].image}" alt="Hoodies" class="cart__img">
          </div>
          <div class="cart__details">
              <h3 class="cart__title">${object[producto].name}</h3>
              <span class="cart__stock">
                  "Stock: ${object[producto].quantity} | "
                  <span class="cart__price">$${(object[producto].price).toFixed(2)}</span>
              </span>
              <span class="cart__subtotal">Subtotal: $${((object[producto].price)*(object[producto].amount)).toFixed(2)}</span>
              <div class="cart__amount" id="${object[producto].id}">
                  <div class="cart__amount-content" id="${object[producto].id}">
                      <span class="rest">
                          -
                      </span>
                      <span class="cart__amount-number">${object[producto].amount} units</span>
                      <span class="sum">
                              +
                      </span>
                  </div>
                  <img class="del" src="./img/img/icons8-eliminar-50.png" alt="eliminar">
              </div>
          </div>
        </div>`
        }

   productsCart.innerHTML = html; 
}

printProducts(arrayItems);



const productsPrice = document.querySelector(".cart_prices");



// function printPrecio(object){
    
//     let html = '';
//     for (const producto in object) {
//           html += `<span class="cart_prices-item">
//                     <span>${object[producto].amount} items</span>
//                     </span>
//                 <span class="cart_prices-total">$0.00</span>`
//         }

//    productsPrice.innerHTML = html;  
// }





