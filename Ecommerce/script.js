// Get the button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show the button when scrolling down
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Scroll to top function
scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scroll
    });
});