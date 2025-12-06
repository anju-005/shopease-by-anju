// Cart counter
let cartCount = 0;

function addToCart() {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    alert("Item added to cart!");
}

// Buy Now button
function buyNow(url) {
    window.open(url, "_blank");
}

// Smooth scroll to section
function scrollToSection(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
}

// Contact form validation
function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill all fields");
        return false;
    }
    alert("Message sent successfully!");
    return false; // prevent actual form submission
}