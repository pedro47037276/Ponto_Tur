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
                limpar_sideBar();
                buscar_servicos('casa_das_onze_janelas');

            } else if (card.nome == "Estação das Docas"){
                limpar_sideBar();
                buscar_servicos('estacao_das_docas');

            } else if (card.nome == "Basílica Santuário de Nossa Senhora de Nazaré"){
                limpar_sideBar();
                buscar_servicos('basilica_santuario_de_nossa_senhora_de_nazare');

            } else if (card.nome == "Espaço São José Libertino"){
                limpar_sideBar();
                buscar_servicos('espaco_sao_jose_libertino');

            }

            const div = document.createElement('div');
            div.className = 'infos_local';

                // Imagem do card
                const divImage = document.createElement('div');
                divImage.className = 'secao_imgs';

                    const img = document.createElement('img');
                    img.src = card.img;
                    img.alt = card.nome;
                    img.className = 'imgs_do_local'
                    divImage.appendChild(img);

                div.appendChild(divImage);

                const nome_local = document.createElement('h1');
                nome_local.className = 'nome_local';
                nome_local.innerHTML = card.nome;
                div.appendChild(nome_local)

                const desc_local = document.createElement('p');
                desc_local.className = 'desc_local';
                desc_local.innerHTML = card.descricao;
                div.appendChild(desc_local);

                const linha = document.createElement('hr');
                linha.className = 'linha';
                div.appendChild(linha);

                const titulo_servicos = document.createElement('h2');
                titulo_servicos.className = 'servicos_h2';
                titulo_servicos.innerHTML = 'Serviços';
                div.appendChild(titulo_servicos);

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
    firebase.firestore().collection('ponto_tur').doc(local).collection('servicos')
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
    const sidebar_info = document.getElementById('sidebar_info_local');

    const secao_servico = document.createElement('section');
    secao_servico.className = 'secao_servico';

    dados.forEach(servico => {
            const div_servico = document.createElement('div');
            div_servico.className = 'fundo_servico';

                const parte_icone = document.createElement('div');
                parte_icone.className = 'parte_icone';

                    if(servico.tipo == "Restaurante"){
                        const icone = document.createElement('a');
                        icone.href = '#';
                        icone.className = 'icone';
                        icone.innerHTML = '<i class="bi bi-duffle"></i>';
                        parte_icone.appendChild(icone);
                    }

                div_servico.appendChild(parte_icone);

                const parte_info = document.createElement('div');
                parte_info.className = 'parte_info';

                    const nome_servico = document.createElement('h2');
                    nome_servico.className = 'nome_servico';
                    nome_servico.innerHTML = servico.nome;
                    parte_info.appendChild(nome_servico);

                    const desc_servico = document.createElement('p');
                    desc_servico.className = 'desc_servico';
                    desc_servico.innerHTML = servico.descricao;
                    parte_info.appendChild(desc_servico);

                    const icone_hora = document.createElement('i');
                    icone_hora.className = 'icone_hora';
                    icone_hora.innerHTML = '<i class="bi bi-clock-fill"></i>';
                    parte_info.appendChild(icone_hora);

                    const horario_servico = document.createElement('p');
                    horario_servico.className = 'horario_servico';
                    horario_servico.innerHTML = servico.funcionamento;
                    parte_info.appendChild(horario_servico);
                
                div_servico.appendChild(parte_info);
                
                secao_servico.appendChild(div_servico);

            sidebar_info.appendChild(secao_servico);
    });
};


