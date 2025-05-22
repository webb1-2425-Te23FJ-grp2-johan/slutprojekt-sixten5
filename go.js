const kategorier = document.querySelector(".kategorier");
const kategorierBtn = document.querySelector("#kategorier-btn");

kategorierBtn.addEventListener("click", (e) => {
  e.preventDefault();
  kategorier.classList.toggle("kategorier-show");
});
