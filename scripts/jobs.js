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

// JOBS 
async function loadData() {
    try {
        const response = await fetch("data/jobs.json");
        const companies = await response.json();

        const grid = document.querySelector(".jobs");

        grid.innerHTML = "";

        companies.forEach((companie) => {
            const section = document.createElement("div");
            section.classList.add("cards-jobs");
            section.innerHTML = `
                <img src="${companie.image}" alt="${companie.name}" class="place-image" />
                <h2>${companie.company}</h2>
                <h3>${companie.modality}</h3>
                <p>${companie.description}</p>
                <button class="learn-more" onclick="window.location.href='${companie.website || "#"}'">Learn More</button>
            `;

            grid.appendChild(section);
        });
    } catch (error) {
        console.error("Error loading the data:", error);
    }
}

document.addEventListener("DOMContentLoaded", loadData);