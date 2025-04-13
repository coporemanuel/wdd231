const CurrentYear = new Date().getFullYear();
document.getElementById('copyright').textContent = `© ${CurrentYear} Inspiring Future Hub, Bermejo-Bolivia`;

// MENU 
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('myButton');
    const navigation = document.querySelector('.menu');

    // Verificar si el botón y el menú existen en la página actual
    if (menuBtn && navigation) {
        menuBtn.addEventListener('click', function() {
            navigation.classList.toggle('show');
            menuBtn.textContent = navigation.classList.contains('show') ? '✖' : '☰';
        });
    } else {
        console.log('No hay menú en esta página.');
    }
});


// CONTACT 
const modal = document.getElementById("contact");
const openModalButton = document.querySelector("[data-target='support']");
const closeModalButton = modal.querySelector(".close");

openModalButton.addEventListener("click", () => {
    modal.style.display = "block";
});

closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
