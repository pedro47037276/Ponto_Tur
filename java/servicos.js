export function buscar_servicos(x) {

    firebase.firestore()
        .collection('ponto_tur')
        .doc(x)
        .collection('servicos')
        .get()
        .then(snapshot => {
            if (!snapshot.empty) {
                const ptservicos = snapshot.docs.map(doc => doc.data());
                console.log(ptservicos);
                mostrar_servicos(ptservicos);
            } else {
                console.warn("Nenhum serviÃ§o encontrado.");
            }
        })
        .catch(error => {
            console.error("Erro ao buscar informaÃ§Ãµes:", error);
        });
}

export function mostrar_servicos(ptservicos) {
    if (!Array.isArray(ptservicos) || ptservicos.length === 0) {
        console.error("Nenhum serviÃ§o encontrado ou dados invÃ¡lidos:", ptservicos);
        return;
    }

    const sidebar_serv = document.createElement('section');
    sidebar_serv.className = 'servicos-container';

    const titulo_servicos = document.createElement('h1');
    titulo_servicos.id = "servicos";
    titulo_servicos.className = 'titulo_servicos';
    titulo_servicos.innerHTML = 'Serviços';
    sidebar_serv.appendChild(titulo_servicos);

    ptservicos.forEach(servico => {
        // if (!servico.nome || !servico.descricao) {
        //     console.warn("ServiÃ§o com dados incompletos:", servico);
        //     return;
        // }

        const div = document.createElement('div');
        div.className = 'servico-item';

            const div_infos = document.createElement('div');
            div_infos.className = 'div_infos';
            div.appendChild(div_infos);

                if(servico.tipo == 'Restaurante'){
                    const icon =document.createElement('img');
                    icon.src = 'icones/restaurante.png';
                    icon.className = 'icones';
                    div_infos.appendChild(icon);

                } else if (servico.tipo == 'Sorveteria'){
                    const icon =document.createElement('img');
                    icon.src = 'icones/sorveteria.png';
                    icon.className = 'icones';
                    div_infos.appendChild(icon);

                } else if (servico.tipo == 'Doce'){
                    const icon =document.createElement('img');
                    icon.src = 'icones/Doceteria.png';
                    icon.className = 'icones';
                    div_infos.appendChild(icon);
                } 
                else if (servico.tipo == 'Teatro'){
                    const icon =document.createElement('img');
                    icon.src = 'icones/teatro.png';
                    icon.className = 'icones';
                    div_infos.appendChild(icon);
                }
                // const icon = document.createElement('a');
                // icon.href = '#';
                // icon.innerHTML = '<i class="bi bi-shop-window"></i>';
                // icon.className = 'icon_serv';
                // div_infos.appendChild(icon);

                

                const div_nome_hr = document.createElement('div');
                div_nome_hr.className = 'nome_hora';
                
                    const h5 = document.createElement('h5');
                    h5.innerText = servico.nome;
                    h5.className = 'servico_nome';
                    div_nome_hr.appendChild(h5);

                    const categoria = document.createElement('p');
                    categoria.className = 'categoria_serv';
                    categoria.innerHTML = servico.tipo;
                    div_nome_hr.appendChild(categoria);

                    if (servico.funcionamento) {
                        const funcionamento = document.createElement('p');
                        funcionamento.innerText = `Funcionamento: ${servico.funcionamento}`;
                        funcionamento.className = 'horario'
                        div_nome_hr.appendChild(funcionamento);
                    }

                div_infos.appendChild(div_nome_hr);

               if (servico.descricao )
               {const div_desc = document.createElement('div');
                div_desc.className = 'descricao_servico';

                    const p = document.createElement('p');
                    p.innerText = servico.descricao;
                    p.className = 'desc_servico';
                    div_desc.appendChild(p);

                div.appendChild(div_desc);}

            sidebar_serv.appendChild(div);
    });

    document.getElementById('sidebar_info_local').appendChild(sidebar_serv);
};