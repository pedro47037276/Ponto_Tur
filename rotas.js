function traceRoute(destinationLat, destinationLng, data) {
    // Verificar se a geolocalização está disponível no navegador
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const userLat = position.coords.latitude;
            const userLng = position.coords.longitude;

            // Centraliza o mapa na localização atual do usuário
            map.setView([userLat, userLng], 14);

            // Remove rotas anteriores, se houver
            if (window.currentRoute) {
                map.removeControl(window.currentRoute);
            }

            // Definir o ícone verde
            const greenIcon = L.icon({
                iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',  // URL correta do ícone verde
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
                iconSize: [25, 41],  // Tamanho do ícone
                iconAnchor: [12, 41],  // Ponto onde o ícone será ancorado (base do marcador)
                popupAnchor: [1, -34],  // Localização do popup em relação ao ícone
                shadowSize: [41, 41]  // Tamanho da sombra
            });

            // Adicionar marcador verde na localização atual do usuário com popup
            L.marker([userLat, userLng], { icon: greenIcon }).addTo(map)
                .bindPopup("<b>Você está aqui!</b>").openPopup();

            // Traçar a rota do usuário até o ponto turístico
            window.currentRoute = L.Routing.control({
                waypoints: [
                    L.latLng(userLat, userLng),  // Localização atual do usuário
                    L.latLng(destinationLat, destinationLng)  // Local do ponto turístico
                ],
                routeWhileDragging: true,  // Permite arrastar o trajeto
                language: 'pt-BR',  // Idioma da rota
                lineOptions: {
                    styles: [{ color: '#14CC1C', weight: 7 }]  // Define o traçado vermelho com espessura de 5
                },
                createMarker: function(i, wp, nWps) {
                    if (i === 0) {
                        // Usar o ícone verde para o marcador de origem
                        return L.marker(wp.latLng, { icon: greenIcon }).bindPopup('Você está aqui!');
                    } else if (i === nWps - 2) {
                        // Popup no destino com informações
                        const popupContent = `
                            <b>${data.nome}</b><br>
                            <img src="${data.img}" alt="${data.nome}" style="width:100%; height:auto; border-radius:5px; margin-top:10px;"><br>
                            <p style="margin-top:10px;">${data.descricao}</p>
                            <button onclick="traceRoute(${data.latitude}, ${data.longitude})" style="padding:10px 20px; background-color:#28a745; color:#fff; border:none; border-radius:5px; cursor:pointer; margin-top:10px;">IR</button>
                        `;
                        return L.marker(wp.latLng).bindPopup(popupContent);
                    }
                }
            }).addTo(map);

        }, function(error) {
            alert('Erro ao obter localização: ' + error.message);
        });
    } else {
        alert('Geolocalização não é suportada pelo seu navegador.');
    }
}
