// CONEXÃO COM O BANCO APENAS PARA FAZER A PESQUISA \\
function pesquisa() {
    firebase.firestore()
        .collection('ponto_tur')
        .get().then(snapshot => {
            const resultado = snapshot.docs.map(doc => doc.data());
            limpar_sideBar();
            cards_pesquisados(resultado);
            console.log("DEU CERTO");
        }).catch(error => {
            console.error("Erro ao buscar informações:", error);
        });
}

function esconde_sidebar_desktop(){
    document.getElementById('fundo').style.display = 'none';
    document.getElementById('sidebar_info_local').style.display = 'block';
    // info_do_local();

}

// Função de pesquisa
function cards_pesquisados(resultado){
    const container3 = document.getElementById('sidebar_info_local');
    const pesq = document.getElementById('pesquisar');

    resultado.forEach(card => {
        if(pesq.value == card.nome){

            esconde_sidebar_desktop();

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
    clear = document.getElementById('sidebar_info_local');
    clear.innerHTML = ""
};

pesquisa();