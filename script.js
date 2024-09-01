
var map = L.map('map').setView([0, 0], 19);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        var marker = L.marker([-1.448517, -48.491839]).addTo(map);

        /*Círculo vermelho */
        /*var circle = L.circle([-1.448517, -48.491839],
        {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 500
        }).addTo(map);*/

        /* Cria o Triangulo*/
        /*var polygon = L.polygon([
            [-1.448517, -48.491839],
            [-1.448517, -48.491839],
            [-1.448517, -48.491839]
        ]).addTo(map);*/

        /* Texto ao clicar no icone localizador*/
        marker.bindPopup("<b>Olá</b><br>Você está aqui").openPopup();
        /* Texto ao clicar no císculo vermelho*/
        /*circle.bindPopup("I am a circle.");*/
        /*texto ao clicar triângulo */
        /*polygon.bindPopup("I am a polygon.");*/

        /*var popup = L.popup()
        .setLatLng([-1.448517, -48.491839])
        .setContent("Localização atual")
        .openOn(map);*/


        var popup = L.popup();

        /*function onMapClick(e) {
            popup
                .setLatLng(e.latlng)
                .setContent("You clicked the map at " + e.latlng.toString())
                .openOn(map);
        }

map.on('click', onMapClick);*/




if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;

        // Centraliza o mapa na localização do usuário
        map.setView([lat, lon], 19);

        // Adiciona um marcador na localização atual
        L.marker([lat, lon]).addTo(map)
            .bindPopup('Você está aqui!')
            .openPopup();
    }, function() {
        alert('Não foi possível obter a sua localização.');
    });
} else {
    alert('Geolocalização não é suportada pelo seu navegador.');
}