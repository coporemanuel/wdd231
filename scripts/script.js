const CurrentYear = new Date().getFullYear();
document.getElementById('copyright').textContent = `© ${CurrentYear} Inspiring Future Hub, Bermejo-Bolivia`;

// MENU 
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('myButton');
    const navigation = document.querySelector('.menu');

    if (menuBtn && navigation) {
        menuBtn.addEventListener('click', function() {
            navigation.classList.toggle('show');
            menuBtn.textContent = navigation.classList.contains('show') ? '✖' : '☰';
        });
    }
});


// CONTACT
// Get the modal and the button that opens it
const modal = document.getElementById("contact");
const openModalButton = document.querySelector("[data-target='support']");
const closeModalButton = modal.querySelector(".close");

// Open the modal when the button is clicked
openModalButton.addEventListener("click", () => {
    modal.style.display = "block";
});

// Close the modal when the close button is clicked
closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close the modal when clicking outside of the modal content
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

