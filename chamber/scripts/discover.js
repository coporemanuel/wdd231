async function loadData() {
    try {
        const response = await fetch("data/discover.json");
        const places = await response.json();

        const grid = document.querySelector("main");

        // Clear the grid in case there's existing content
        grid.innerHTML = "";

        // Loop through the JSON data to create sections for each place
        places.forEach((place) => {
            const section = document.createElement("section");
            section.innerHTML = `
                <img src="${place.imageUrl}" alt="${place.name}" class="place-image" />
                <h2>${place.name}</h2>
                <p>${place.description}</p>
                <p><strong>Address:</strong> ${place.address}</p>
                <button class="learn-more" onclick="window.location.href='${place.websiteUrl || "#"}'">Learn More</button>
            `;

            // Append each section to the main element
            grid.appendChild(section);
        });
    } catch (error) {
        console.error("Error loading the data:", error);
    }
}

// Execute the function to load the data when the page is loaded
document.addEventListener("DOMContentLoaded", loadData);
