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

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = {
        firstName: document.getElementById("first-name").value,
        lastName: document.getElementById("last-name").value,
        orgTitle: document.getElementById("org-title").value,
        email: document.getElementById("email").value,
        mobile: document.getElementById("mobile").value,
        organization: document.getElementById("organization").value,
        membership: document.getElementById("membership").value,
        description: document.getElementById("description").value,
        timestamp: new Date().toLocaleString()
    };
    
    localStorage.setItem("formData", JSON.stringify(formData));
    window.location.href = "thankyou.html";
});


document.addEventListener("DOMContentLoaded", function() {
    const formData = JSON.parse(localStorage.getItem("formData"));
    if (formData) {
        document.querySelector("ul").innerHTML = `
            <li>First Name: ${formData.firstName}</li>
            <li>Last Name: ${formData.lastName}</li>
            <li>Email: ${formData.email}</li>
            <li>Mobile Number: ${formData.mobile}</li>
            <li>Organization Name: ${formData.organization}</li>
            <li>Date & Time: ${formData.timestamp}</li>
        `;
    }
});