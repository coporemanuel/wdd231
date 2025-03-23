document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('myButton');
    const navigation = document.querySelector('.menu');

    menuBtn.addEventListener('click', function() {
        navigation.classList.toggle('show');
        menuBtn.textContent = navigation.classList.contains('show') ? '✖' : '☰';
    });
});

const apiKey = "ad2caa71da86385c8defd3f46247d6c7";
const latitude = -22.72861754514294;
const longitude = -64.34201903312281;

fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        // WE
        const currentTemp = data.list[0].main.temp;
        const currentDesc = data.list[0].weather[0].description;
        document.getElementById('current-weather').innerText = `Current: ${currentTemp}°C, ${currentDesc}`;

        // THREE DAY
        const forecast = document.getElementById('forecast');
        forecast.innerHTML = ""; 
        for (let i = 1; i <= 3; i++) {
            const forecastIndex = i * 8; 
            if (forecastIndex < data.list.length) {
                const dayTemp = data.list[forecastIndex].main.temp;
                const dayDesc = data.list[forecastIndex].weather[0].description;
                const li = document.createElement('li');
                li.innerText = `Day ${i}: ${dayTemp}°C, ${dayDesc}`;
                forecast.appendChild(li);
            } else {
                console.warn(`Not enough data for Day ${i}`);
            }
        }
    })
    .catch(error => console.error('Error fetching weather data:', error));

    // SPOTLIGHT
fetch('data/members.json')
.then(response => {
    if (!response.ok) {
        throw new Error(`Error loading JSON file: ${response.status}`);
    }
    return response.json();
})
.then(members => {
    const spotlightCandidates = members.filter(member =>
        member.membershipLevel === "Gold" || member.membershipLevel === "Silver"
    );

    const selectedSpotlights = [];
    const maxSpotlights = 3;
    while (selectedSpotlights.length < maxSpotlights && spotlightCandidates.length > 0) {
        const randomIndex = Math.floor(Math.random() * spotlightCandidates.length);
        selectedSpotlights.push(spotlightCandidates.splice(randomIndex, 1)[0]);
    }

    const spotlightContainer = document.getElementById('spotlight-container');
    spotlightContainer.innerHTML = "";

    selectedSpotlights.forEach(member => {
        const card = document.createElement('div');
        card.className = 'spotlight-card';

        card.innerHTML = `
            <img src="${member.images}" alt="${member.name} Logo" style="max-width: 100%; height: auto; border-radius: 10px;">
            <h3>${member.name}</h3>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Phone Number:</strong> ${member.phoneNumber}</p>
            <p><strong>Website:</strong> <a href="${member.websiteUrl}" target="_blank">${member.websiteUrl}</a></p>
            <p><strong>Membership Level:</strong> ${member.membershipLevel}</p>
        `;

        spotlightContainer.appendChild(card);
    });
})
.catch(error => console.error('Error:', error));

