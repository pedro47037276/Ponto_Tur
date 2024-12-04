import {voltar} from './script.js';
// CONEXÃO COM O BANCO APENAS PARA FAZER A PESQUISA \\
const search = document.getElementById('search');
search.addEventListener("click",
function pesquisa() {
    firebase.firestore()
        .collection('ponto_tur')
        .get().then(snapshot => {
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
    
    const botao = voltar()
    container3.appendChild(botao)

    resultado.forEach(card => {
        if(pesq.value == card.nome){

            esconde_sidebar_desktop();

            if(card.nome == "Casa das Onze Janelas"){
                buscar_servicos('casa_das_onze_janelas');

            } else if (card.nome == "Estação das Docas"){
                buscar_servicos('estacao_das_docas');

            } else if (card.nome == "Basílica Santuário de Nossa Senhora de Nazaré"){
                buscar_servicos('basilica_santuario_de_nossa_senhora_de_nazare');

            } else if (card.nome == "Espaço São José Libertino"){
                buscar_servicos('espaco_sao_jose_libertino');

            }

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
        };
    });
    

}

//limpar a tela
function limpar_sideBar() {
   let clear = document.getElementById('sidebar_info_local');
    clear.innerHTML = ""
};

function buscar_servicos(local) {
    db.collection('ponto_tur').doc(local).collection('servicos')
        .get()
        .then(snapshot => {
            const dados = snapshot.docs.map(doc => doc.data());
            mostrar_servicos(dados);
        })
        .catch(error => {
            console.error("Erro ao buscar informações:", error);
        });
};

function mostrar_servicos(dados) {
    const container3 = document.getElementById('sidebar_info_local');
    dados.forEach(servico => {
            const div = document.createElement('div');
                const nome_servico = document.createElement('h2');
                nome_servico.innerHTML = servico.nome
                div.appendChild(nome_servico);

            container3.appendChild(div);
            console.log(servico.nome);
    });
};


