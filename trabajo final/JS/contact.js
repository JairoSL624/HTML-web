// contact.js
function initMap() {
    const empresa = { lat: -34.397, lng: 150.644 }; // Ubicación de la empresa
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: empresa
    });
    const marker = new google.maps.Marker({
        position: empresa,
        map: map
    });
}

document.addEventListener('DOMContentLoaded', initMap);
