export function buscar_servicos() {
    firebase.firestore()
        .collection('ponto_tur'). doc('estacao_das_docas'). collection('servicos')
        .get().then(snapshot => {
            const ptservicos = snapshot.docs.map(doc => doc.data());
            mostrar_servicos(ptservicos);
        }).catch(error => {
            console.error("Erro ao buscar informações:", error);
        });
}


 export function mostrar_servicos(ptservicos) {

    const sidebar_serv = document.createElement('section');
        
    ptservicos.forEach(servico => {
    const j = document.createElement('div');
    //         // const h3 = document.createElement('h3');
    //         // h3.innerHTML = 'Serviços'
    //         // h3.appendChild(div);
    // //     //     const hr = document.createElement('hr');
    // //     //     hr.appendChild(div);
    // //     //     const i = document.createElement('i');
    // //     //     i.classList('fa-solid fa-utensils');
    // //     //     i.appendChild(div);
    // //     //     const span = document.createElement('span');
    // //     //     span = 'fork_spoon'
    // //     //     span.classList('material-symbols-outlined');
    // //     //     span.appendChild('div');
    j.appendChild(sidebar_serv);
        
        // const detalhes = document.createElement('div');
        //     const h5 = document.createElement('h5');
        //     h5 = ptservicos.nome
        //     h5.appendChild('div');
        //     const p = document.createElement('p');
        //     p = ptservicos.descricao
        //     p.appendChild('div');
        //     const funcionamento = document.createElement('div');
        //     horario = ptservicos.funcionamento
        //     funcionamento.appendChild('div');
        //     const linhaHorizontal = document.createElement('div');
        //     linhaHorizontal.appendChild('div')
        // detalhes.appendChild(sidebar_info)
    });
    // sidebar_info.appendChild(container3);
};




// <div>
    // <h3>Serviços</h3>
    // <hr>
    // <i class="fa-solid fa-utensils"></i>
    // <span class="material-symbols-outlined">fork_spoon</span>
// </div>

// <div>
//     <h5>As Mulatas</h5>
//     <p>"As Mulatas é muito mais do que um restaurante. É um destino gastronômico <br> que oferece uma experiência única em Belém. Sevocê busca um lugar para <br> saborear a culinária paraenseautêntica, as Mulatas é a escolha perfeita."</p>
//     <p>Funcionamento: Das 11h às 00h. De domingo a domingo.</p>
//     <hr>
// </div>   