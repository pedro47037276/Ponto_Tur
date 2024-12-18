// conectar ao  banco de dados
  // Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCI_287E4XUbQ_fyhO_tyJ72FKRkGZ8hLI",
    authDomain: "ponto-tur-5e4db.firebaseapp.com",
    projectId: "ponto-tur-5e4db",
    storageBucket: "ponto-tur-5e4db.appspot.com",
    messagingSenderId: "1093552150779",
    appId: "1:1093552150779:web:bbe89f5f8643414166385e"
};

// Inicializa o Firebase App



firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
  
  
  
  import { traceRoute } from "./rotas.js";
  // Inicialize o mapa com Leaflet
  // Inicialize o mapa com Leaflet, desabilitando o zoom

 

export const map = L.map('map', {
    zoomControl: false,        // Desabilita os botões de zoom
    scrollWheelZoom: true,    // Desabilita o zoom com o scroll do mouse
    touchZoom: true          // Desabilita o zoom com toque (em dispositivos móveis)
}).setView([-1.4583848091069818, -48.49333947066729], 13); // Mude o 13 para o zoom inicial desejado


   // const longitude  = sessionStorage.getItem("longitude");
   // const latitude = sessionStorage.getItem("latitude");
   
    
      

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

  console.log(sessionStorage.getItem("longitude"));
  console.log(sessionStorage.getItem("latitude"));
 
if (sessionStorage.getItem("longitude") !== null && sessionStorage.getItem("latitude") !== null ){
   const marker = L.marker([sessionStorage.getItem("longitude"), sessionStorage.getItem("latitude")]).addTo(map);
    traceRoute(sessionStorage.getItem("latitude"), sessionStorage.getItem("longitude"));
    
    
    sessionStorage.clear();
    
}


//     // CARREGAR CARDS VERSÃO MOBILE \\
// Função para carregar marcadores do Firebase
function busca_info() {
    firebase.firestore()
        .collection('ponto_tur')
        .get().then(snapshot => {
            const cardData = snapshot.docs.map(doc => doc.data());
            cards_desktop(cardData);  // Carregar para o desktop
            cards_mobile(cardData);   // Carregar para o mobile
            // cards_pesquisados(cardData);
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

function esconde_locall1(){
    document.getElementById('locall1').style.display = 'none';
    document.getElementById('info_local_mobile').style.display = 'block';
    // document.getElementById('sidebar_info_local').style.display = 'block';
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
                        const filtro = titulo.textContent;
                        traceRoute(card.localizacao.latitude, card.localizacao.longitude);
                        esconde_locall1();
                        info_do_local_mobile(cardData,filtro);
                    });

                divContent.appendChild(divLinks);

            div.appendChild(divContent);
        
        container2.appendChild(div);
       

      
    });
}



// CONEXÃO COM O BANCO APENAS PARA FAZER A PESQUISA \\
// function pesquisa() {
//     firebase.firestore()
//         .collection('ponto_tur')
//         .get().then(snapshot => {
//             const resultado = snapshot.docs.map(doc => doc.data());
//             limpar_sideBar();
//             cards_pesquisados(resultado);
//         }).catch(error => {
//             console.error("Erro ao buscar informações:", error);
//         });
// }

// // Função de pesquisa
// function cards_pesquisados(resultado){
//     const container3 = document.getElementById('sidebar_info_local');
//     const pesq = document.getElementById('pesquisar');

//     resultado.forEach(card => {
//         if(pesq.value == card.nome){

//             esconde_sidebar_desktop();

//             const div = document.createElement('div');
//             div.className = 'infos_local';

//                 const nome_local = document.createElement('h1');
//                 nome_local.className = 'nome_local';
//                 nome_local.innerHTML = card.nome;
//                 div.appendChild(nome_local)

//                 // Imagem do card
//                 const divImage = document.createElement('div');
//                 divImage.className = 'secao_imgs';

//                     const img = document.createElement('img');
//                     img.src = card.img;
//                     img.alt = card.nome;
//                     img.className = 'imgs_do_local'
//                     divImage.appendChild(img);

//                 div.appendChild(divImage);

//                 const desc_local = document.createElement('p');
//                 desc_local.className = 'desc_local';
//                 desc_local.innerHTML = card.descricao;
//                 div.appendChild(desc_local);

                
                
               
//             container3.appendChild(div);
//         };
//     });
    

// }

// //limpar a tela
// function limpar_sideBar() {
//     clear = document.getElementById('sidebar_info_local');
//     clear.innerHTML = ""
// };

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

export function voltar(){
    const botao = document.createElement('button')
    botao.className = 'toggle-button2';
    botao.addEventListener('click', () => {
        window.location.href = 'pg2.html'
    }) 
    
        const i = document.createElement('i')
        i.className='bi bi-arrow-left-circle-fill'
        botao.appendChild(i)

    return (botao);
    }



function info_do_local(cardData, filter) {
    const container3 = document.getElementById('sidebar_info_local')
      
    const botao = voltar()
    container3.appendChild(botao)
    
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

function info_do_local_mobile(cardData, filtro) {
    const container4 = document.getElementById('info_local_mobile')
      
    const botao = voltar()
  
    
    cardData.forEach(card => {
    
        if(card.nome == filtro){

            

            const div = document.createElement('div');
            div.className = 'infos_local_mobile';

                const linha_sobe_desce = document.createElement('hr');
                linha_sobe_desce.className = 'linha_sobe_desce';
                div.appendChild(linha_sobe_desce);

                const btn_voltar_e_nome = document.createElement('div');
                btn_voltar_e_nome.className = 'btn_e_nome';

                    const nome_local = document.createElement('h1');
                    nome_local.className = 'nome_local_mobile';
                    nome_local.innerHTML = card.nome;
                    btn_voltar_e_nome.appendChild(botao);
                    btn_voltar_e_nome.appendChild(nome_local);
                    
                div.appendChild(btn_voltar_e_nome);

                // Imagem do card
                const divImage = document.createElement('div');
                divImage.className = 'secao_imgs_mobile';

                    const img = document.createElement('img');
                    img.src = card.img;
                    img.alt = card.nome;
                    img.className = 'imgs_do_local_mobile'
                    divImage.appendChild(img);

                div.appendChild(divImage);

                const desc_local = document.createElement('p');
                desc_local.className = 'desc_local_mobile';
                desc_local.innerHTML = card.descricao;
                div.appendChild(desc_local);              
                             
            container4.appendChild(div);          
        }
    });
}

// Chamada inicial para buscar e renderizar os cards
busca_info();









