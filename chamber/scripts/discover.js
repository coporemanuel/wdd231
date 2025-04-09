async function loadData() {
    try {
        const response = await fetch("data/discover.json");
        const places = await response.json();

        const grid = document.querySelector("main");

        grid.innerHTML = "";

        places.forEach((place) => {
            const section = document.createElement("section");
            section.innerHTML = `
                <img src="${place.imageUrl}" alt="${place.name}" class="place-image" />
                <h2>${place.name}</h2>
                <p>${place.description}</p>
                <p><strong>Address:</strong> ${place.address}</p>
                <button class="learn-more" onclick="window.location.href='${place.websiteUrl || "#"}'">Learn More</button>
            `;

            grid.appendChild(section);
        });
    } catch (error) {
        console.error("Error loading the data:", error);
    }
}

document.addEventListener("DOMContentLoaded", loadData);


//WELCOME MESSAGE
const currentDate = new Date();
const lastVisitDate = localStorage.getItem('lastVisit');
const sidebar = document.getElementById('welcome');

if (!lastVisitDate) {
    // First visit
    sidebar.textContent = "Welcome! Let us know if you have any questions.";
} else {
    
    const lastDate = new Date(parseInt(lastVisitDate, 10));
    const timeDiff = currentDate - lastDate;
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    if (timeDiff < (1000 * 60 * 60 * 24)) {
        sidebar.textContent = "Back so soon! Awesome!";
    } else if (daysDiff === 1) {
        sidebar.textContent = `You last visited 1 day ago.`;
    } else {
        sidebar.textContent = `You last visited ${daysDiff} days ago.`;
    }
}

localStorage.setItem('lastVisit', currentDate.getTime());
