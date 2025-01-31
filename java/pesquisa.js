import {voltar} from './script.js';
import {buscar_servicos, mostrar_servicos,buscar_servicos_mobile} from './servicos.js';
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
    
                } else if (card.nome == "Espaço São José Liberto"){
                    var x = 'espaco_sao_jose_libertino';
                    buscar_servicos(x);
    
                }  else if (card.nome == "Ilha do Cumbú"){
                    var x = 'ilha_do_cumbú';
                    buscar_servicos(x);

                } else if (card.nome == "Mercado de São Braz"){
                    var x = 'Mercado de São Braz';
                    buscar_servicos(x);

                } else if (card.nome == "Bosque Rodrigues Alves"){
                    var x = 'bosque_rodrigo_alves';
                    buscar_servicos(x);

                } else if (card.nome == "Museu de Arte Sacra"){
                    var x = 'igreja_santo_alexandre';
                    buscar_servicos(x);

                } else if (card.nome == "Mangal das Garças"){
                    var x = 'mangal_das_garcas';
                    buscar_servicos(x);

                } else if (card.nome == "Ilha do Mosqueiro"){
                    var x = 'mosqueiro';
                    buscar_servicos(x);

                } else if (card.nome == "Museu Paraense Emílio Goeldi"){
                    var x = 'museu_emilio_ goeldi';
                    buscar_servicos(x);

                } else if (card.nome == "Orla de Icoaraci"){
                    var x = 'orla_de_icoraci';
                    buscar_servicos(x);

                } else if (card.nome == "Porto Futuro"){
                    var x = 'porto_futuro';
                    buscar_servicos(x);

                } else if (card.nome == "Praça Batista Campos"){
                    var x = 'praca_batista_campos';
                    buscar_servicos(x);

                } else if (card.nome == "Praça Brasil"){
                    var x = 'praca_brasil';
                    buscar_servicos(x);

                } else if (card.nome == "Ilha de Cotejuba"){
                    var x = 'praia_do_cotijuba';
                    buscar_servicos(x);

                } else if (card.nome == "Praça da República"){
                    var x = 'praça da republica';
                    buscar_servicos(x);

                } else if (card.nome == "Ver-o-Peso"){
                    var x = 'ver_o_peso_comercio';
                    buscar_servicos(x);

                } else if (card.nome == "Ver-o-Rio"){
                    var x = 'ver_o_rio';
                    buscar_servicos(x);
                }
             

            container3.appendChild(div);

            
        };
    });

};

//limpar a tela
function limpar_sideBar() {
   let clear = document.getElementById('sidebar_info_local');
    clear.innerHTML = "";
};



//   PESQUISA MOBILE   \\


const btn_pesquisa = document.getElementById('btn_pesquisar');
btn_pesquisa.addEventListener("click",

function pesquisa_mobile() {
    firebase.firestore()
        .collection('ponto_tur')
        .get().then(snapshot => {
            snapshot.forEach(doc=> {
                console.log(doc.id);

            });

            const dados_mobile = snapshot.docs.map(doc => doc.data());
            cards_pesquisados_mobile(dados_mobile);
                
        }).catch(error => {
            console.error("Erro ao buscar informações:", error);
        });
});

function cards_pesquisados_mobile(dados_mobile){
    const container4 = document.getElementById('info_local_mobile');
    const campo_pesquisa = document.getElementById('campo_pesq');
    limpar_sideBar_mobile();
    const botao = voltar();
    container4.appendChild(botao);

    dados_mobile.forEach(card => {
        if(campo_pesquisa.value == card.nome){
            esconde_locall1();

            
            const div = document.createElement('div');
            div.className = 'infos_local_mobile';

                const linha_sobe_desce = document.createElement('hr');
                linha_sobe_desce.className = 'linha_sobe_desce';
                div.appendChild(linha_sobe_desce);

                // Imagem do card
                const divImage = document.createElement('div');
                divImage.className = 'secao_imgs_mobile';

                    const img = document.createElement('img');
                    img.src = card.img;
                    img.alt = card.nome;
                    // img.className = 'imgs_do_localMobile';
                    divImage.appendChild(img);

                div.appendChild(divImage);

                const btn_voltar_e_nome = document.createElement('div');
                btn_voltar_e_nome.className = 'btn_e_nome';

                    const nome_local = document.createElement('h1');
                    nome_local.className = 'nome_local_mobile';
                    nome_local.innerHTML = card.nome;
                    btn_voltar_e_nome.appendChild(nome_local);
                    
                div.appendChild(btn_voltar_e_nome);

                const desc_local = document.createElement('p');
                desc_local.className = 'desc_local_mobile';
                desc_local.innerHTML = card.descricao;
                div.appendChild(desc_local);

                const linha = document.createElement('hr');
                linha.className = 'linha';
                div.appendChild(linha);

                if(card.nome == "Casa das Onze Janelas"){
                    var y = 'casa_das_onze_janelas';
                    buscar_servicos_mobile(y);
    
                } else if (card.nome == "Estação das Docas"){
                    var y = 'estacao_das_docas';
                    buscar_servicos_mobile(y);
    
                } else if (card.nome == "Basílica Santuário de Nossa Senhora de Nazaré"){
                    var y = 'basilica_santuario_de_nossa_senhora_de_nazare';
                    buscar_servicos_mobile(y);
    
                } else if (card.nome == "Espaço São José Liberto"){
                    var y = 'espaco_sao_jose_libertino';
                    buscar_servicos(y);
    
                }  else if (card.nome == "Ilha do Cumbú"){
                    var y = 'ilha_do_cumbú';
                    buscar_servicos_mobile(y);

                } else if (card.nome == "Mercado de São Braz"){
                    var y = 'Mercado de São Braz';
                    buscar_servicos_mobile(y);

                } else if (card.nome == "Bosque Rodrigues Alves"){
                    var y = 'bosque_rodrigo_alves';
                    buscar_servicos_mobile(y);

                } else if (card.nome == "Museu de Arte Sacra"){
                    var y = 'igreja_santo_alexandre';
                    buscar_servicos_mobile(y);

                } else if (card.nome == "Mangal das Garças"){
                    var y = 'mangal_das_garcas';
                    buscar_servicos_mobile(y);

                } else if (card.nome == "Ilha do Mosqueiro"){
                    var y = 'mosqueiro';
                    buscar_servicos_mobile(y);

                } else if (card.nome == "Museu Paraense Emílio Goeldi"){
                    var y = 'museu_emilio_ goeldi';
                    buscar_servicos_mobile(y);

                } else if (card.nome == "Orla de Icoaraci"){
                    var y = 'orla_de_icoraci';
                    buscar_servicos_mobile(y);

                } else if (card.nome == "Porto Futuro"){
                    var y = 'porto_futuro';
                    buscar_servicos_mobile(y);

                } else if (card.nome == "Praça Batista Campos"){
                    var y = 'praca_batista_campos';
                    buscar_servicos_mobile(y);

                } else if (card.nome == "Praça Brasil"){
                    var y = 'praca_brasil';
                    buscar_servicos_mobile(y);

                } else if (card.nome == "Ilha de Cotejuba"){
                    var y = 'praia_do_cotijuba';
                    buscar_servicos_mobile(y);

                } else if (card.nome == "Praça da República"){
                    var y = 'praça da republica';
                    buscar_servicos_mobile(y);

                } else if (card.nome == "Ver-o-Peso"){
                    var y = 'ver_o_peso_comercio';
                    buscar_servicos_mobile(y);

                } else if (card.nome == "Ver-o-Rio"){
                    var y = 'ver_o_rio';
                    buscar_servicos_mobile(y);
                }

                
            container4.appendChild(div);
        }
    })
};

function esconde_locall1(){
    document.getElementById('locall1').style.display = 'none';
    document.getElementById('info_local_mobile').style.display = 'block';
}

function limpar_sideBar_mobile() {
    let clear = document.getElementById('info_local_mobile');
     clear.innerHTML = "";
 };
