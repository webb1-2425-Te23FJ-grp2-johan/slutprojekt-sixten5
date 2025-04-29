function addToCart(productName, productImage, productPrice) {
    const sizeSelector = document.getElementById("size-selector");
    const selectedSize = sizeSelector.value;
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push({
          name: productName,
          image: productImage,
          price: productPrice,
          size: selectedSize
        });
        localStorage.setItem("cart", JSON.stringify(cart));
    
        alert(productName + " lades till i varukorgen!");
      }