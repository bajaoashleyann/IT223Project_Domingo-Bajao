let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})
let checkoutBtn = document.querySelector('.checkoutBtn');

checkoutBtn.addEventListener('click', () => {
    window.location.href = '6order.html'; 
});

let products = {
    data: [
        {
            productName: "Lucy",
            category: "Bengal",
            breed: "Bengal",
            age: "8 months old",
            gender: "Female",
            deworm: "Up-to-Date",
            vaccination: "Fully Vaccinated and Up-to-Date",
            price: 7500,
            image: "../images/bengal1-lucy.png",
        },
        {
            productName: "Olive",
            category: "Bengal",
            breed: "Bengal",
            age: "7 months old",
            gender: "Female",
            deworm: "Up-to-Date",
            vaccination: "Fully Vaccinated and Up-to-Date",
            price: 7900,
            image: "../images/bengal2-olive.png",
        },
        {
            productName: "Bentley",
            category: "Bengal",
            breed: "Bengal",
            age: "7 months old",
            gender: "Male",
            deworm: "Up-to-Date",
            vaccination: "Fully Vaccinated and Up-to-Date",
            price: 7300,
            image: "../images/bengal3-bentley.png",
        },
        {
            productName: "Coco",
            category: "Bengal",
            breed: "Bengal",
            age: "3 months old",
            gender: "Male",
            deworm: "Up-to-Date",
            vaccination: "Fully Vaccinated and Up-to-Date",
            price: 7200,
            image: "../images/bengal4-coco.png",
        },
        {
            productName: "Hazel",
            category: "Bengal",
            breed: "Bengal",
            age: "4 months old",
            gender: "Female",
            deworm: "Up-to-Date",
            vaccination: "Fully Vaccinated and Up-to-Date",
            price: 7500,
            image: "../images/bengal5-hazel.png",
        },
        {
            productName: "Nala",
            category: "Bengal",
            breed: "Bengal",
            age: "5 months old",
            gender: "Female",
            deworm: "Up-to-Date",
            vaccination: "Fully Vaccinated and Up-to-Date",
            price: 7000,
            image: "../images/bengal6-nala.png",
        },
        {
            productName: "Chimii",
            category: "Calico",
            breed: "Calico",
            age: "3 months old",
            gender: "Female",
            deworm: "Up-to-Date",
            vaccination: "Fully Vaccinated and Up-to-Date",
            price: 7700,
            image: "../images/calico1-chimii.png",
        },
        {
            productName: "Penny",
            category: "Calico",
            breed: "Calico",
            age: "3 months old",
            gender: "Female",
            deworm: "Up-to-Date",
            vaccination: "Fully Vaccinated and Up-to-Date",
            price: 7000,
            image: "../images/calico2-penny.png",
        },
        {
            productName: "Jonas",
            category: "Calico",
            breed: "Calico",
            age: "5 months old",
            gender: "Male",
            deworm: "Up-to-Date",
            vaccination: "Fully Vaccinated and Up-to-Date",
            price: 7500,
            image: "../images/calico3-jonas.png",
        },
        {
            productName: "Clint",
            category: "Maine Coon",
            breed: "Maine Coon",
            age: "5 months old",
            gender: "Male",
            deworm: "Up-to-Date",
            vaccination: "Fully Vaccinated and Up-to-Date",
            price: 8200,
            image: "../images/mainecoon1-clint.png",
        },
        {
            productName: "Oliver",
            category: "Maine Coon",
            breed: "Maine Coon",
            age: "4 months old",
            gender: "Female",
            deworm: "Up-to-Date",
            vaccination: "Fully Vaccinated and Up-to-Date",
            price: 8000,
            image: "../images/mainecoon2-oliver.png",
        },
        {
            productName: "Archie",
            category: "Maine Coon",
            breed: "Maine Coon",
            age: "3 months old",
            gender: "Male",
            deworm: "Up-to-Date",
            vaccination: "Fully Vaccinated and Up-to-Date",
            price: 9500,
            image: "../images/mainecoon3-archie.png",
        },
        {
            productName: "Ginger",
            category: "Maine Coon",
            breed: "Maine Coon",
            age: "3 months old",
            gender: "Female",
            deworm: "Up-to-Date",
            vaccination: "Fully Vaccinated and Up-to-Date",
            price: 7900,
            image: "../images/mainecoon4-ginger.png",
        },
        {
            productName: "Molly",
            category: "Maine Coon",
            breed: "Maine Coon",
            age: "3 months old",
            gender: "Female",
            deworm: "Up-to-Date",
            vaccination: "Fully Vaccinated and Up-to-Date",
            price: 7800,
            image: "../images/mainecoon5-molly.png",
        },
        {
            productName: "Bella",
            category: "Persian",
            breed: "Persian",
            age: "3 months old",
            gender: "Female",
            deworm: "Up-to-Date",
            vaccination: "Fully Vaccinated and Up-to-Date",
            price: 7000,
            image: "../images/persian1-bella.png",
        },
        {
            productName: "Finn",
            category: "Persian",
            breed: "Persian",
            age: "4 months old",
            gender: "Male",
            deworm: "Up-to-Date",
            vaccination: "Fully Vaccinated and Up-to-Date",
            price: 7200,
            image: "../images/persian2-finn.png",
        },
        {
            productName: "Dexter",
            category: "Persian",
            breed: "Persian",
            age: "4 months old",
            gender: "Male",
            deworm: "Up-to-Date",
            vaccination: "Fully Vaccinated and Up-to-Date",
            price: 7500,
            image: "../images/persian3-dexter.png",
        },
        {
            productName: "Milo",
            category: "Persian",
            breed: "Persian",
            age: "4 months old",
            gender: "Male",
            deworm: "Up-to-Date",
            vaccination: "Fully Vaccinated and Up-to-Date",
            price: 7400,
            image: "../images/persian4-milo.png",
        },
        {
            productName: "Rosie",
            category: "Ragdoll",
            breed: "Ragdoll",
            age: "3 months old",
            gender: "Female",
            deworm: "Up-to-Date",
            vaccination: "Fully Vaccinated and Up-to-Date",
            price: 7600,
            image: "../images/ragdoll1-rosie.png",
        },
        {
            productName: "Leo",
            category: "Ragdoll",
            breed: "Ragdoll",
            age: "4 months old",
            gender: "Male",
            deworm: "Up-to-Date",
            vaccination: "Fully Vaccinated and Up-to-Date",
            price: 7900,
            image: "../images/ragdoll2-leo.png",
        },
        {
            productName: "Sammy",
            category: "Ragdoll",
            breed: "Ragdoll",
            age: "3 months old",
            gender: "Female",
            deworm: "Up-to-Date",
            vaccination: "Fully Vaccinated and Up-to-Date",
            price: 7500,
            image: "../images/ragdoll3-sammy.png",
        },
        {
            productName: "Freya",
            category: "Ragdoll",
            breed: "Ragdoll",
            age: "3 months old",
            gender: "Female",
            deworm: "Up-to-Date",
            vaccination: "Fully Vaccinated and Up-to-Date",
            price: 7900,
            image: "../images/ragdoll4-freya.png",
        },
        {
            productName: "Max",
            category: "Siamese",
            breed: "Siamese",
            age: "4 months old",
            gender: "Male",
            deworm: "Up-to-Date",
            vaccination: "Fully Vaccinated and Up-to-Date",
            price: 7600,
            image: "../images/siamese1-max.png",
        },
        {
            productName: "Penelope",
            category: "Siamese",
            breed: "Siamese",
            age: "4 months old",
            gender: "Female",
            deworm: "Up-to-Date",
            vaccination: "Fully Vaccinated and Up-to-Date",
            price: 8000,
            image: "../images/siamese2-penelope.png",
        },
        {
            productName: "Billy",
            category: "Siamese",
            breed: "Siamese",
            age: "3 months old",
            gender: "Male",
            deworm: "Up-to-Date",
            vaccination: "Fully Vaccinated and Up-to-Date",
            price: 7300,
            image: "../images/siamese3-billy.png",
        },
        {
            productName: "Casper",
            category: "Siamese",
            breed: "Siamese",
            age: "3 months old",
            gender: "Male",
            deworm: "Up-to-Date",
            vaccination: "Fully Vaccinated and Up-to-Date",
            price: 7600,
            image: "../images/siamese4-casper.png",
        },
        {
            productName: "Harry",
            category: "Siamese",
            breed: "Siamese",
            age: "4 months old",
            gender: "Male",
            deworm: "Up-to-Date",
            vaccination: "Fully Vaccinated and Up-to-Date",
            price: 7800,
            image: "../images/siamese5-harry.png",
        },
    ]
};
let listCards = [];

function initApp() {
    products.data.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <img src="../images/${value.image}">
        <div class="title">${value.productName}</div>
        <div class="breed">Breed: ${value.breed}</div>
        <div class="age">Age: ${value.age}</div>
        <div class="gender">Gender: ${value.gender}</div>
        <div class="deworm">Deworm: ${value.deworm}</div>
        <div class="vaccination">Vaccination: ${value.vaccination}</div>
        <div class="price">Price: <span class="original-price">₱15,000</span> <span class="discounted-price">₱${value.price.toLocaleString()}</span></div>
        <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    });
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products.data[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="../images/${value.image}"/></div>
                <div>${value.productName}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity})">+</button>
                    </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = "Total: " + totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products.data[key].price;
    }
    reloadCard();
}