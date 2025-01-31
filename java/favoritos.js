
document.addEventListener('DOMContentLoaded', async () => {
    const favoritosList = document.getElementById("favoritos-list");

    try {
        const querySnapshot = await db.collection("ponto_tur").get();

        favoritosList.innerHTML = '<hr class="linhas">';

        if (querySnapshot.empty) {
            favoritosList.innerHTML += '<p>Você ainda não tem favoritos.</p>';
        } else {
            querySnapshot.forEach((doc) => {
                const favorito = doc.data(); // Obtém os dados do Firestore

                // Verifica se o local tem coordenadas
                if (favorito.localizacao && favorito.localizacao.latitude && favorito.localizacao.longitude) {
                    const li = document.createElement('li');
                    li.className = 'favorito-item';
                    li.innerHTML = `
                        ${favorito.nome}
                        <a href="#" class="rota-link" data-lat="${favorito.localizacao.latitude}" data-lng="${favorito.localizacao.longitude}">
                            <i class="bi bi-arrow-right"></i>
                        </a>
                    `;

                    favoritosList.appendChild(li);
                    favoritosList.innerHTML += '<hr class="linhas">';
                } else {
                    console.warn(`Documento '${favorito.nome}' não tem localização definida.`);
                }
            });

            // Adiciona evento para todas as setas de rota
            document.querySelectorAll('.rota-link').forEach(link => {
                link.addEventListener('click', (event) => {
                    event.preventDefault(); // Evita navegação padrão
                    
                    const latitude = event.currentTarget.getAttribute('data-lat');
                    const longitude = event.currentTarget.getAttribute('data-lng');

                    if (latitude && longitude) {
                        traceRoute(parseFloat(latitude), parseFloat(longitude));
                    } else {
                        console.error("Erro: Latitude ou Longitude não encontradas.");
                    }
                });
            });
        }
    } catch (error) {
        console.error("Erro ao carregar favoritos: ", error);
        favoritosList.innerHTML = '<p>Erro ao carregar favoritos.</p>';
    }
});
