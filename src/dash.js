var imageUrls = [
    "https://turismoetc.com.br/wp-content/uploads/2018/05/Geiranger-1024x712-1024x712-1024x712.jpg",
    "https://catracalivre.com.br/wp-content/uploads/2018/09/o-que-voce-precisa-saber-para-visitar-a-noruega-1-910x607.jpg",
    "https://vocenaneve.com.br/wp-content/uploads/2022/09/aurora-boreal-na-noruega.jpg",
    // Adicione aqui as URLs das imagens que você deseja exibir
];

var currentIndex = 0;
var streetViewImage = document.getElementById('streetViewImage');

setInterval(function () {
    currentIndex = (currentIndex + 1) % imageUrls.length;
    streetViewImage.src = imageUrls[currentIndex];
}, 4000)