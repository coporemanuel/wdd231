// const CurrentYear = new Date().getFullYear();
// document.getElementById('copyright').textContent = `© ${CurrentYear} Inspiring Future Hub, Bermejo-Bolivia`;

// MENU 
// document.addEventListener('DOMContentLoaded', function() {
//     const menuBtn = document.getElementById('myButton');
//     const navigation = document.querySelector('.menu');

//     menuBtn.addEventListener('click', function() {
//         navigation.classList.toggle('show');
//         menuBtn.textContent = navigation.classList.contains('show') ? '✖' : '☰';
//     });
// });

// EDUCATION 
async function loadData() {
    try {
        const response = await fetch("data/education.json");
        const organizations = await response.json();

        const grid = document.querySelector(".education");

        grid.innerHTML = "";

        organizations.forEach((organization) => {
            const section = document.createElement("div");
            section.classList.add("cards-education");
            section.innerHTML = `
                <img src="${organization.image}" alt="${organization.title}" class="place-image" />
                <h2>${organization.title}</h2>
                <h3>${organization.modality}</h3>
                <p>${organization.description}</p>
                <button class="learn-more" onclick="window.location.href='${organization.website || "#"}'">Learn More</button>
            `;

            grid.appendChild(section);
        });
    } catch (error) {
        console.error("Error loading the data:", error);
    }
}

document.addEventListener("DOMContentLoaded", loadData);