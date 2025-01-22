export function buscar_servicos() {
    firebase.firestore()
        .collection('ponto_tur')
        .doc('estacao_das_docas')
        .collection('servicos')
        .get()
        .then(snapshot => {
            if (!snapshot.empty) {
                const ptservicos = snapshot.docs.map(doc => doc.data());
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

    ptservicos.forEach(servico => {
        if (!servico.nome || !servico.descricao) {
            console.warn("ServiÃ§o com dados incompletos:", servico);
            return;
        }

        const div = document.createElement('div');
        div.className = 'servico-item';

        const icon = document.createElement('a');
        icon.href = '#';
        icon.innerHTML = '<i class="bi bi-shop-window"></i>';
        icon.className = 'icon_serv';
        div.appendChild(icon);

        const div_infos = document.createElement('div');
        div_infos.className = 'div_infos';
        div.appendChild(div_infos);

        const h5 = document.createElement('h5');
        h5.innerText = servico.nome;
        h5.className = 'servico_nome';
        div_infos.appendChild(h5);

        // const p = document.createElement('p');
        // p.innerText = servico.descricao;
        // div.appendChild(p);

        if (servico.funcionamento) {
            const funcionamento = document.createElement('p');
            funcionamento.innerText = `Funcionamento: ${servico.funcionamento}`;
            funcionamento.className = 'horario'
            div_infos.appendChild(funcionamento);
        }

        sidebar_serv.appendChild(div);
    });

    document.getElementById('sidebar_info_local').appendChild(sidebar_serv);
};