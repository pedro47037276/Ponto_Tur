import {voltar} from './script.js';
import {buscar_servicos, mostrar_servicos} from './servicos.js';
// CONEXÃO COM O BANCO APENAS PARA FAZER A PESQUISA \\
const search = document.getElementById('search');
search.addEventListener("click",

function pesquisa() {
    firebase.firestore()
        .collection('ponto_tur')
        .get().then(snapshot => {
            snapshot.forEach(doc=> {
                console.log(doc.id);

            });

            const resultado = snapshot.docs.map(doc => doc.data());
            limpar_sideBar();
            cards_pesquisados(resultado);
                
        }).catch(error => {
            console.error("Erro ao buscar informações:", error);
        });
});



function esconde_sidebar_desktop(){
    document.getElementById('fundo').style.display = 'none';
    document.getElementById('sidebar_info_local').style.display = 'block';
    // info_do_local();
}

// Função de pesquisa
function cards_pesquisados(resultado){
    const container3 = document.getElementById('sidebar_info_local');
    const pesq = document.getElementById('pesquisar');
    limpar_sideBar();
    const botao = voltar();
    container3.appendChild(botao);

    resultado.forEach(card => {
        if(pesq.value == card.nome){
            console.log(card);
            
            esconde_sidebar_desktop();

            
            const div = document.createElement('div');
            div.className = 'infos_local';

                // Imagem do card
                const divImage = document.createElement('div');
                divImage.className = 'secao_imgs';

                    const img = document.createElement('img');
                    img.src = card.img;
                    img.alt = card.nome;
                    img.className = 'imgs_do_local';
                    divImage.appendChild(img);

                div.appendChild(divImage);

                const nome_local = document.createElement('h1');
                nome_local.className = 'nome_local';
                nome_local.innerHTML = card.nome;
                div.appendChild(nome_local);

                const desc_local = document.createElement('p');
                desc_local.className = 'desc_local';
                desc_local.innerHTML = card.descricao;
                div.appendChild(desc_local);

                const linha = document.createElement('hr');
                linha.className = 'linha';
                div.appendChild(linha);

                
            
                // const serv = buscar_servicos()
                // div.appendChild(serv)
                // const nomeLocal = card.nome;
                // buscar_servicos(x);
                if(card.nome == "Casa das Onze Janelas"){
                    var x = 'casa_das_onze_janelas';
                    buscar_servicos(x);
    
                } else if (card.nome == "Estação das Docas"){
                    var x = 'estacao_das_docas';
                    buscar_servicos(x);
    
                } else if (card.nome == "Basílica Santuário de Nossa Senhora de Nazaré"){
                    var x = 'basilica_santuario_de_nossa_senhora_de_nazare';
                    buscar_servicos(x);
    
                } else if (card.nome == "Espaço São José Libertino"){
                    var x = 'espaco_sao_jose_libertino';
                    buscar_servicos(x);
    
                }   else if (card.nome == "Ilha do Combú"){
                    var x = 'ilha_do_cumbú';
                    buscar_servicos(x);
                }
                console.log(mostrar_servicos());

            container3.appendChild(div);

            
        };
    });

};

//limpar a tela
function limpar_sideBar() {
   let clear = document.getElementById('sidebar_info_local');
    clear.innerHTML = "";
};


