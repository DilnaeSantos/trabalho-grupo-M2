// dashboard.js

// Aqui é a função para pegar lugares aleatórios na Noruega no street view a cada F5 da página

function initialize() {
    var randomLocation = getRandomLocation();
    var panoramaOptions = {
        position: randomLocation,
        pov: { heading: 0, pitch: 0 },
        zoom: 1
    };

    var panorama = new google.maps.StreetViewPanorama(
        document.getElementById('street-view'),
        panoramaOptions
    );
}

// Os números são a latitude e longitude da Noruega

function getRandomLocation() {
    var minLat = 58.9783;
    var maxLat = 71.1855;
    var minLng = 4.9897;
    var maxLng = 31.6313;

    var latitude = Math.random() * (maxLat - minLat) + minLat;
    var longitude = Math.random() * (maxLng - minLng) + minLng;

    return { lat: latitude, lng: longitude };
}

