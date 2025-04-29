function changeImage(thumbnail){
    const mainImg = document.getElementById("mainDisplay");
    mainImg.src = thumbnail.src;

    document.querySelectorAll(".thumbnail").forEach((img) => {
        img.classList.remove("active");

    thumbnail.classList.add("active")
    });
}