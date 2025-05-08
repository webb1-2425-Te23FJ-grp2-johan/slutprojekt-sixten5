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
