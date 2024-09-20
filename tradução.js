const traducoes = {
    "pt": {
        "inicio":"Inicio",
        "conta":"Conta",
        "favorito":"Favorito",
        "locais":"Descobrir Locais",
        "titulo1": "O melhor guia, para o melhor passeio!",
        "titulo2": "Crie sua conta e veja os vários locais para conhecer e se divertir em Belém.",
        "cadastrar":"Cadastrar",
        "entrar":"Entrar",
        "ir":"Onde Ir",
        "descubra":"Descubra novos locais para passar o tempo em família ou amigos ",
        "como_chegar":"Como Chegar?",
        "cp2":"Com facilidade e segurança você pode ir aonde desejar e conhecer novos lugares",
        "ch1":"O que fazer",
        "cp3":"Saiba todos os serviços oferecidos ao seu local de passeio",
        "descobrir1":"DESCOBRIR LOCAIS",
        "local_visit":"LOCAIS MAIS VISITADOS",
        "inicio2":"Início",
        "cont2":"Conta",
        "favorit2":"Favorito",
        "pesq2":"Pesquisar locais",
    

        // Adicione outras traduções aqui
    },
    "en": {
        "inicio":"Home",
        "conta":"Account",
        "favorito":"Favorite",
        "locais":"Discover Locations",
        "titulo1": "The best guide for the best trip!",
        "titulo2": "Create your account and see the various places to visit and have fun in Belém.",
        "cadastrar":"Register",
        "entrar":"Get In",
        "ir":"Where to go?",
        "descubra":"Discover new places to spend time in family or friends",
        "como_chegar":"How to get there?",
        "cp2":"With ease and security you can go wherever you want and meet new places",
        "ch1":"What to do?",
        "cp3":"Learn all the services offered to your tour location",
        "descobrir1":"DISCOVER LOCATIONS",
        "local_visit":"MOST VISITED PLACES",
        "inicio2":"Home",
        "cont2":"Account",
        "favorit2":"Favorite",
        "pesq2":"Search locations",
        // Adicione outras traduções aqui
    }
};

function traduzirPagina() {
    const idiomaSelecionado = document.getElementById('idioma').value;
    document.querySelectorAll("[id]").forEach(elemento => {
        const id = elemento.id;
        if (traducoes[idiomaSelecionado][id]) {
            elemento.textContent = traducoes[idiomaSelecionado][id];
        }
    });
}