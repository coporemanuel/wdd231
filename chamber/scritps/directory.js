// DATES AND MODIFIED
const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;

document.getElementById('copyright').textContent = `© ${currentYear} Copore Solutions, Bermejo-Bolivia`;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;

// CONTAINER OF COMPANIES
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList (){
    display.classList.add("list");
    display.classList.remove("grid");
}

// WITH THE JSON 
async function loadData() {
    try {
        const response = await fetch("data/members.json");
        const companies = await response.json();
    
        const grid = document.querySelector("article.grid");

        grid.innerHTML = "";

        companies.forEach((company) => {

            const section = document.createElement("section");
            section.innerHTML = `
                <img src="${company.images}" alt="${company.name}" />
                <h3>${company.name}</h3>
                <p>${company.address}</p>
                <p>${company.phoneNumber}</p>
                <a href="${company.websiteUrl}" target="_blank">Web Site</a>
            `;

            grid.appendChild(section);
        });
    } catch (error){
        console.error ("Error loading the data:",  error)
    }
}

loadData();

document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('myButton');
    const navigation = document.querySelector('.menu');

    menuBtn.addEventListener('click', function() {
        navigation.classList.toggle('show');
        menuBtn.textContent = navigation.classList.contains('show') ? '✖' : '☰';
    });
});