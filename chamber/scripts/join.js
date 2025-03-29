document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('[data-target]');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-target');
            const modal = document.getElementById(modalId);

            if (modal) {
                modal.style.display = 'flex';
            }
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            if (modal) {
                modal.style.display = 'none'; 
            }
        });
    });

    modals.forEach(modal => {
        modal.addEventListener('click', event => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
});

// THANK YOU PAGE 

document.addEventListener("DOMContentLoaded", function() {
    const formData = JSON.parse(localStorage.getItem("formData"));
    if (formData) {
        // Populate the individual `<span>` elements
        document.getElementById("first-name").textContent = formData.firstName;
        document.getElementById("last-name").textContent = formData.lastName;
        document.getElementById("org-title").textContent = formData.orgTitle;
        document.getElementById("email").textContent = formData.email;
        document.getElementById("mobile").textContent = formData.mobile;
        document.getElementById("organization").textContent = formData.organization;
        document.getElementById("membership").textContent = formData.membership;
    } else {
        console.log("No data found in localStorage.");
    }
});