// DESCOMENTAR DEPOIS
/*var map = L.map('map').setView([0, 0], 19);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        var marker = L.marker([-1.448517, -48.491839]).addTo(map);*/

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
        //marker.bindPopup("<b>Olá</b><br>Você está aqui").openPopup();    // <--- DESCOMENTAR DEPOIS
        /* Texto ao clicar no císculo vermelho*/
        /*circle.bindPopup("I am a circle.");*/
        /*texto ao clicar triângulo */
        /*polygon.bindPopup("I am a polygon.");*/

        /*var popup = L.popup()                      //<--- DESCOMENTAR DEPOIS
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

/*function success(pos){
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



navigator.geolocation.getCurrentPosition(success);*/ 
// if ('geolocation' in navigator) {
//     navigator.geolocation.watchPosition(function (pos) {
//         //console.log(position);

//         var map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 20);

//         if (map === undefined) {
//             map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 20);
//         } else {
//             map.remove();
//             map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 20);
//         }

//         L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//             maxZoom: 19,
//             attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//         }).addTo(map);

//         // Marcador na localização atual do usuário
//         var marker = L.marker([pos.coords.latitude, pos.coords.longitude]).addTo(map);
//         marker.bindPopup("<p>Você está aqui</p>").openPopup();

//         // Adicionando outro marcador na coordenada especificada
//         var secondMarker = L.marker([-1.452551009839002, -48.48102006530643]).addTo(map);

//         // Adicionando uma imagem no popup do segundo marcador
//         var popupContent = `
//             <p>"Basílica neoclássica construída em 1909, com vitrais ornamentados e mosaicos brilhantes."</p>
//             <img src="https://firebasestorage.googleapis.com/v0/b/ponto-tur-5e4db.appspot.com/o/basilica_de_nazare%2Fbasilica.png?alt=media&token=29fd245d-f298-418c-bfe0-df4d4fea2beb" alt="Imagem do local" width="200" />
//         `;

//         secondMarker.bindPopup(popupContent).openPopup();

//          // Adicionando outro marcador na coordenada especificada
//          var treeMarker = L.marker([-1.4300126896827277, -48.456781028470964]).addTo(map);
        
//         // Adicionando uma imagem no popup do terceiro marcador
//         var popupContent = `
//             <p>"Jardim botânico urbano e preservação da natureza com abundante fauna e flora."</p>
//             <img src="https://firebasestorage.googleapis.com/v0/b/ponto-tur-5e4db.appspot.com/o/img_rodrigo_alves%2Fcaverna.png?alt=media&token=aea7f36a-7f06-4a19-b545-fbd2712eed27" alt="Imagem do local" width="200" />
//         `;

//         treeMarker.bindPopup(popupContent).openPopup();

//         // add outro marke pont tur

//          var forMarker = L.marker([-1.4633563177188824, -48.49563371830424]).addTo(map);
//         var popupContent = `
//             <p>Centro com lojas e barracas de artesanato de Belém, moda e joias em convento restaurado do século 18.  </p>
//             <img src="https://firebasestorage.googleapis.com/v0/b/ponto-tur-5e4db.appspot.com/o/Espa%C3%A7o%20S%C3%A3o%20Jos%C3%A9%20Liberto%2Ffoto1.png?alt=media&token=c18d7d75-0381-4266-9e08-9e1820bd5ba4" alt="Imagem do local" width="200" />
            
//         `;
//         forMarker.bindPopup(popupContent).openPopup();
//         // // add outro marke pont tur

//         // var forMarker = L.marker([]).addTo(map);
//         // var popupContent = `
//         //     <p></p>
//         //     <img src=""
            
//         // `;
//         // forMarker.bindPopup(popupContent).openPopup();
//         // // add outro marke pont tur

//         // var forMarker = L.marker([]).addTo(map);
//         // var popupContent = `
//         //     <p></p>
//         //     <img src=""
            
//         // `;
//         // forMarker.bindPopup(popupContent).openPopup();
//         // // add outro marke pont tur

//         // var forMarker = L.marker([]).addTo(map);
//         // var popupContent = `
//         //     <p></p>
//         //     <img src=""
            
//         // `;
//         // forMarker.bindPopup(popupContent).openPopup();
//         // // add outro marke pont tur

//         // var forMarker = L.marker([]).addTo(map);
//         // var popupContent = `
//         //     <p></p>
//         //     <img src=""
            
//         // `;
//         // forMarker.bindPopup(popupContent).openPopup();
//         // // add outro marke pont tur

//         // var forMarker = L.marker([]).addTo(map);
//         // var popupContent = `
//         //     <p></p>
//         //     <img src=""
            
//         // `;
//         // forMarker.bindPopup(popupContent).openPopup();







//     }, function () {
//         alert("Não foi possível obter sua localização");

//         var map = L.map('map').setView([0, 0], 19);
//         L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//             maxZoom: 19,
//             attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//         }).addTo(map);

//         var marker = L.marker([-1.448517, -48.491839]).addTo(map);
//         marker.bindPopup("<b>Olá</b><br>Você está aqui").openPopup();
//     });

// } else {
//     alert("Não foi possível obter sua localização");
// }
 // Configuração do Firebase
 const firebaseConfig = {
    apiKey: "AIzaSyCI_287E4XUbQ_fyhO_tyJ72FKRkGZ8hLI",
    authDomain: "ponto-tur-5e4db.firebaseapp.com",
    projectId: "ponto-tur-5e4db",
    storageBucket: "ponto-tur-5e4db.appspot.com",
    messagingSenderId: "1093552150779",
    appId: "1:1093552150779:web:bbe89f5f8643414166385e"
  };
  
  // Inicialize o Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  // Inicialize o mapa com Leaflet
  const map = L.map('map').setView([-1.4583848091069818, -48.49333947066729], 13); // Mude o 14 para o zoom inicial desejado

  // Adicionar camadas do OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  
  // Função para carregar marcadores do Firestore
  function loadMarkers() {
    const bounds = []; // Array para guardar os limites dos marcadores

    db.collection("ponto_tur").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const data = doc.data();

            // Verificação de segurança
            if (data.localizacao !== undefined && data.localizacao.latitude !== undefined && data.localizacao.longitude !== undefined && data.descricao !== undefined ) {
                // console.log(`Marcador adicionado: ${data.nome}, Lat: ${data.localizacao.latitude}, Lng: ${data.localizacao.longitude}`);
                const marker = L.marker([data.localizacao.latitude, data.localizacao.longitude]).addTo(map);

                // Popup com nome, imagem e descrição
                const popupContent = document.createElement('div');
                popupContent.className = 'card_marcador';
                
                
                    // document.createElement('div');

                        const nome = document.createElement('b');
                        nome.classList = 'nome_marcador';
                        nome.innerHTML = data.nome;
                        popupContent.appendChild(nome);

                        const img = document.createElement('img');
                        img.src = data.img;
                        img.alt = data.nome;
                        img.classList = "img_marcador";
                        popupContent.appendChild(img);

                        const descricao = document.createElement('p');
                        descricao.classList = 'desc_marcador';
                        descricao.innerHTML = data.descricao;
                        popupContent.appendChild(descricao);

                        const ir = document.createElement('a');
                        ir.innerHTML = "IR";
                        ir.className= 'ir_marcador';
                        popupContent.appendChild(ir);

                        // Adicionar o event listener para o botão IR
                        ir.addEventListener('click', () => {
                            traceRoute(data.localizacao.latitude, data.localizacao.longitude);
                        });
                    
                           
                // `
                // <b>${data.nome}</b><br>
                // <img src="${data.img}" alt="${data.nome}" style="width:100%; height:auto;"><br>
                // <p>${data.descricao}</p>
                // <a href="#" style=" width: 50%;
                // // height: 88%;
                // // margin-right: 20px;
                // // border-radius: 5px;
                // // padding: 2px 50px 2px 50px;
                // // background-color: #14CC1C;
                // // /* border-radius: 10px; */
                // // color: white;">IR</a>            
                // `
                ;


              
              // Adiciona o popup ao marcador
              marker.bindPopup(popupContent);

                if (data.visita) { // Filtrar apenas locais visitáveis
                    // Cria o marcador
                    const marker = L.marker([data.localizacao.latitude, data.localizacao.longitude]).addTo(map);
                    
                 
                    // Adiciona o popup ao marcador
                    marker.bindPopup(popupContent);
                    
                    // Adiciona as coordenadas ao array bounds
                    bounds.push([data.localizacao.latitude, data.localizacao.longitude]);
                }
            } else {
                console.error(`Dados incompletos para o documento ${doc.id}`);
            }
        });

                // Ajustar o mapa para mostrar todos os marcadores
                if (bounds.length > 0) {
                    map.fitBounds(bounds, { padding: [50, 50] }); // Ajuste o zoom para mostrar todos os marcadores
                } else {
                    console.log("Nenhum marcador foi carregado.");
                }
            }).catch((error) => {
                console.error("Erro ao pegar documentos: ", error);
            });
        }

  // Carregar os marcadores quando a página for carregada
  loadMarkers();



//     // CARREGAR CARDS VERSÃO MOBILE \\
// Função para carregar marcadores do Firebase
function busca_info() {
    firebase.firestore()
        .collection('ponto_tur')
        .get().then(snapshot => {
            const cardData = snapshot.docs.map(doc => doc.data());
            cards_desktop(cardData);  // Carregar para o desktop
            cards_mobile(cardData);   // Carregar para o mobile
            // info_do_local(cardData);
        }).catch(error => {
            console.error("Erro ao buscar informações:", error);
        });
}

function esconde_sidebar_desktop(){
    document.getElementById('fundo').style.display = 'none';
    document.getElementById('sidebar_info_local').style.display = 'block';
    // info_do_local();

}



// Função para adicionar cards no mobile
function cards_mobile(cardData) {

    const container2 = document.getElementById('locall1');
    // if (!container) {
    //     console.error(`Contêiner com ID "${containerId}" não encontrado.`);
    //     return;
    // }


    cardData.forEach(card => {

        const div = document.createElement('div');
        div.className = 'cards1';

            // Imagem do card
            const divImage = document.createElement('div');
            divImage.className = 'imagem';

                const img = document.createElement('img');
                img.src = card.img;
                img.alt = card.nome;
                divImage.appendChild(img);

            div.appendChild(divImage);

            // Conteúdo do card
            const divContent = document.createElement('div');
            divContent.className = 'conteudo';

                const titulo = document.createElement('h1');
                titulo.textContent = card.nome;
                divContent.appendChild(titulo);

                const desc = document.createElement('p');
                desc.textContent = card.descricao;
                divContent.appendChild(desc);

                // Links do card
                const divLinks = document.createElement('div');
                divLinks.className = 'links';

                    const fav = document.createElement('a');
                    fav.href = '#';
                    fav.className = 'favoritar';
                    fav.innerHTML = '<i class="bi bi-bookmarks-fill"></i>';
                    divLinks.appendChild(fav);
                        
                
                    const ir = document.createElement('a');
                    ir.href = '#';
                    ir.textContent = 'IR';
                    ir.className = 'ir';
                    divLinks.appendChild(ir)

                    // Event listener para o botão "IR" - chamada da função traceRoute
                    ir.addEventListener('click', () => {
                        traceRoute(card.localizacao.latitude, card.localizacao.longitude);
                        esconde_sidebar();
                    });

                divContent.appendChild(divLinks);

            div.appendChild(divContent);
        
        container2.appendChild(div);
       

      
    });
}

// Função para adicionar cards no desktop
function cards_desktop(cardData) {

    const container2 = document.getElementById('fundo');
    // if (!container) {
    //     console.error(`Contêiner com ID "${containerId}" não encontrado.`);
    //     return;
    // }


    cardData.forEach(card => {
        
        const div = document.createElement('div');
        div.className = 'cards1';

            // Imagem do card
            const divImage = document.createElement('div');
            divImage.className = 'imagem';

                const img = document.createElement('img');
                img.src = card.img;
                img.alt = card.nome;
                divImage.appendChild(img);

            div.appendChild(divImage);

            // Conteúdo do card
            const divContent = document.createElement('div');
            divContent.className = 'conteudo';

                const titulo = document.createElement('h1');
                titulo.textContent = card.nome;
                divContent.appendChild(titulo);

                const desc = document.createElement('p');
                desc.textContent = card.descricao;
                divContent.appendChild(desc);

                // Links do card
                const divLinks = document.createElement('div');
                divLinks.className = 'links';

                    const fav = document.createElement('a');
                    fav.href = '#';
                    fav.className = 'favoritar';
                    fav.innerHTML = '<i class="bi bi-bookmarks-fill"></i>';
                    divLinks.appendChild(fav);
                        
                
                    const ir = document.createElement('a');
                    ir.href = '#';
                    ir.textContent = 'IR';
                    ir.className = 'ir';
                    divLinks.appendChild(ir)

                    // Event listener para o botão "IR" - chamada da função traceRoute
                    ir.addEventListener('click', () => {
                        const filter = titulo.textContent;
                        // console.log(filter)
                        traceRoute(card.localizacao.latitude, card.localizacao.longitude);
                        esconde_sidebar_desktop();
                        info_do_local(cardData, filter);                        
                    });

                divContent.appendChild(divLinks);
            div.appendChild(divContent);
        container2.appendChild(div);      
    });
}


function info_do_local(cardData, filter) {
    const container3 = document.getElementById('sidebar_info_local');
    console.log(cardData)
    console.log(filter)
    cardData.forEach(card => {
    
        if(card.nome == filter){

            const div = document.createElement('div');
            div.className = 'infos_local';

                const nome_local = document.createElement('h1');
                nome_local.className = 'nome_local';
                nome_local.innerHTML = card.nome;
                div.appendChild(nome_local)

                // Imagem do card
                const divImage = document.createElement('div');
                divImage.className = 'secao_imgs';

                    const img = document.createElement('img');
                    img.src = card.img;
                    img.alt = card.nome;
                    img.className = 'imgs_do_local'
                    divImage.appendChild(img);

                div.appendChild(divImage);

                const desc_local = document.createElement('p');
                desc_local.className = 'desc_local';
                desc_local.innerHTML = card.descricao;
                div.appendChild(desc_local);

                
                
               
            container3.appendChild(div);

            
        }
    });
}

// Chamada inicial para buscar e renderizar os cards
busca_info();








