document.addEventListener('DOMContentLoaded', () => {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    if (favoritos.length > 0) {
        favoritos.forEach(favorito => {
            const div = document.createElement('div');
            div.className = 'favorito-card';

            const nome = document.createElement('h3');
            nome.textContent = favorito.nome;
            div.appendChild(nome);
            

            // const img = document.createElement('img');
            // img.src = favorito.imgSrc;
            // img.alt = favorito.nome;
            // div.appendChild(img);
            const lista = document.getElementById('lugar1');
            lista.textContent = 'Nome do ponto'; // Aqui você pode substituir por qualquer nome dinamicamente
            
            // const descricao = document.createElement('p');
            // descricao.textContent = favorito.descricao;
            // div.appendChild(descricao);

            document.getElementById('favoritos-container').appendChild(div);
        });
    } else {
        const message = document.createElement('p');
        message.textContent = 'Você ainda não tem favoritos.';
        document.getElementById('favoritos-container').appendChild(message);
    }
});
