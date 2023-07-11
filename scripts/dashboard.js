// dashboard.js

// Função para inicializar o Street View com uma localização aleatória na Noruega
function initializeStreetView() {
    var minLat = 58.9783;
    var maxLat = 71.1855;
    var minLng = 4.9897;
    var maxLng = 31.6313;
  
    var latitude = Math.random() * (maxLat - minLat) + minLat;
    var longitude = Math.random() * (maxLng - minLng) + minLng;
  
    var streetViewIframe = document.getElementById("streetViewIframe");
    streetViewIframe.src = `https://www.google.com/maps/embed?pb=!4v1688770161547!6m8!1m7!1sCAoSLEFGMVFpcE4yU1N3SkdISW4tQkxlVHg3UC1LaDA3VWVQV0RNeGxTUXU0eHVt!2m2!1d${latitude}!2d${longitude}!3f122.69194043024811!4f13.089681376199678!5f0.7820865974627469`;
  }
  
  // Chamar a função para inicializar o Street View quando a página for carregada
  window.onload = initializeStreetView;
  
  