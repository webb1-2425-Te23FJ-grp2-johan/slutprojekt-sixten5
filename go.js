
const cookieBanner = document.querySelector(".cookie-banner");
const cookieBtn = document.querySelector(".cookie-btn");
cookieBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    cookieBanner.classList.remove("cookie-banner-active")
    localStorage.setItem("cookieBannerDisplayed", "true")
})

if(localStorage.getItem("cookieBannerDisplayed")){
    cookieBanner.classList.remove("cookie-banner-active");
}

const kontaktaOss = document.querySelector(".kontakta-oss")
const kontaktaOssBtn = document.querySelector("#kontakta-oss-btn")
kontaktaOssBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    kontaktaOss.classList.toggle("kontakta-oss-show")
})

const kategorier = document.querySelector(".kategorier");
const kategorierBtn = document.querySelector("#kategorier-btn");

kategorierBtn.addEventListener("click", (e) => {
  e.preventDefault();
  kategorier.classList.toggle("kategorier-show");
});



// const savedCart = localStorage.getItem('cart')
// if(savedCart){
//     cart=JSON.parse(savedCart);
//     cart.forEach(productName => {
//         const li = document.createElement('li');
//         li.textContent = productName;
//         document.getElementById('cart-list').append(li);
//     });
// }

// function addToCart(productName){
//     let cart = [];
//     cart.push(productName);
//     localStorage.setItem('cart', JSON.stringify(cart))

//     const li = document.createElement('li');
//     li.textContent = productName;
//     document.getElementById('cart-list').append(li);
// }

