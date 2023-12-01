var productsArr = [
    {
    id: 1,
    name: "Iphone 14",
    url: "https://pngimg.com/d/iphone_14_PNG6.png",
    description: "128 GB Grey",
    price: "799" 
} ,
{
    id: 2,
    name: "Iphone 15 Plus",
    url: "https://www.aptronixindia.com/media/catalog/product/cache/31f0162e6f7d821d2237f39577122a8a/i/p/iphone_15_pink_pdp_image_position-1__wwen-removebg-preview_1.png",
    description: "128 GB Pink",
    price: "899" 
},
{
    id: 3,
    name: "Iphone 11",
    url: "https://freepngimg.com/thumb/apple_iphone/133296-11-apple-iphone-free-transparent-image-hq.png",
    description: "64 GB Violet",
    price: "499" 
},
{
    id: 4,
    name: "Iphone 14 pro",
    url: "https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-14-pro-deep-purple.png?v=39",
    description: "256 GB Purple",
    price: "1500" 
},
{
    id: 5,
    name: "Iphone 13 Pro",
    url: "https://www.cellularsales.com/wp-content/uploads/2023/02/apple-iphone-13-pro-max-gold.png",
    description: "512 GB Gold",
    price: "1800" 
},
{
    id: 6,
    name: "Iphone 12 Pro Max",
    url: "https://assets.getmobil.com/uploads/9537/getmobil-apple-iphone12promax-pacificblue-02webp.png",
    description: "128 GB Pasific Blue",
    price: "1200" 
}
]
var basket= [];
var products = document.querySelector(".products");
var cards = document.querySelector(".cards");
productsArr.forEach(item => {
    cards.innerHTML += `<div class="product-card">
    <img src=${item.url} >
    <p>${item.name}</p>
    <p>${item.description}</p>
    <h2>${item.price } $</h2>
    <button onclick = "addToCart(${item.id})">Add to cart</button>
</div>`
});
var cartIcon = document.querySelector(".shopping-cart i");
var modal = document.querySelector(".modal");
var closeModal = document.querySelector(".modal-heading i");
cartIcon.addEventListener("click", function(){
    modal.style.display = "block";
    basketData();
})
closeModal.addEventListener("click",  function(){
    modal.style.display = "none";

})
var subCount = document.querySelector("sub");
function addToCart(x){
    var findProduct = productsArr.find((item) =>  item.id == x );
    if(basket.includes(findProduct)){
        findProduct.count++;
    }
    else{
        findProduct.count = 1;
        basket.push(findProduct);
    }
    subCount.innerText = Number(subCount.innerText) +1;
}
var containerBasket = document.querySelector(".container");
function basketData() {
    containerBasket.innerHTML = " ";
    basket.forEach(data => {
        containerBasket.innerHTML += `
        <div class="modal-main">
                <i class="fa-solid fa-x"></i>
                <i class="fa-solid fa-heart"></i>
                <img src=${data.url} >
                <div class="text">
                    <p>${data.name}</p>
                    <p>${data.description}</p>
                </div>
                <div class="count">
                    <button>+</button>
                    <p>${data.count}</p>
                    <button>-</button>
                </div>
                <p><span>$</span>${data.price * data.count}</p>
            </div>
        `;
    });
}

