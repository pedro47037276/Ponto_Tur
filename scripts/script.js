// DESCOMENTAR DEPOIS
/*var map = L.map('map').setView([0, 0], 19);
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
        //marker.bindPopup("<b>Olá</b><br>Você está aqui").openPopup();     <--- DESCOMENTAR DEPOIS
        /* Texto ao clicar no císculo vermelho*/
        /*circle.bindPopup("I am a circle.");*/
        /*texto ao clicar triângulo */
        /*polygon.bindPopup("I am a polygon.");*/

        /*var popup = L.popup()                      <--- DESCOMENTAR DEPOIS
        .setLatLng([-1.448517, -48.491839])
        .setContent("Localização atual")
        .openOn(map);*/


        //var popup = L.popup();

        /*function onMapClick(e) {
            popup
                .setLatLng(e.latlng)
                .setContent("You clicked the map at " + e.latlng.toString())
                .openOn(map);
        }

map.on('click', onMapClick);*/



// CONDIÇÃO DE LOCALIZAÇÃO

/*if (navigator.geolocation) {
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
}*/




// CÓDIGO NOVO 

function success(pos){
    //console.log(pos.coords.latitude, pos.coords.longitude);

    // centralizar mapa
    var map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 20);
    
    if (map === undefined){
        map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 20);
    } else{
        map.remove();
        map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 20);
    }


    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // CRIAR ROTA
    L.Routing.control({
        waypoints: [
        L.latLng(pos.coords.latitude, pos.coords.longitude),
        L.latLng(-1.4560646164723035, -48.501267232480984)
        ]
    }).addTo(map);

    // criar e apontar icone do local
    var marker = L.marker([pos.coords.latitude, pos.coords.longitude]).addTo(map);
    marker.bindPopup("<p>Você está aqui</p>").openPopup();

   
}



navigator.geolocation.getCurrentPosition(success);