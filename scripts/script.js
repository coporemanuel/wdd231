const CurrentYear = new Date().getFullYear();
document.getElementById('copyright').textContent = `© ${CurrentYear} Inspiring Future Hub, Bermejo-Bolivia`;

// MENU 
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('myButton');
    const navigation = document.querySelector('.menu');

    menuBtn.addEventListener('click', function() {
        navigation.classList.toggle('show');
        menuBtn.textContent = navigation.classList.contains('show') ? '✖' : '☰';
    });
});
