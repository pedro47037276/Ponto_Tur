
/*CONECTAR AO BANCO*/

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCI_287E4XUbQ_fyhO_tyJ72FKRkGZ8hLI",
    authDomain: "ponto-tur-5e4db.firebaseapp.com",
    projectId: "ponto-tur-5e4db",
    storageBucket: "ponto-tur-5e4db.appspot.com",
    messagingSenderId: "1093552150779",
    appId: "1:1093552150779:web:bbe89f5f8643414166385e"
};

// Inicializa o Firebase App



firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

//Acessa o firebase
function busca_info() {
    firebase.firestore()
        //Acessa a coleção especificada dentro do firebase
        .collection('ponto_tur')

        //Baixa as funções de dentro do firebase e chama a função que as coloca na tela
        .get().then(snapshot => {
            const card = snapshot.docs.map(doc => doc.data())
           // cleanProductsFromScreen()
            addProductsToScreen(card);
        })

}


//Cria os produtos na tela    
function addProductsToScreen(card) {
    //captura o conteudo do input
    //const filter = document.getElementById('search').value;

    const secao = document.getElementById('recomendacao');
    
    
    // Cria as linhas da lista de acordo com o conteúdo do banco
    card.forEach(card => {
        
        //Verifica se o campo de busca está vazio ou se o item é igual ao pesquisado
        //if ((filter == '') || !filter == "" && product.item == filter) {

        if(card.visita == true){

            const div = document.createElement('div');
            //Adiciona classe ao produto criado
            div.className ='cards1';

                const img = document.createElement('img');
                img.innerHTML = '';
                img.src = card.img;
                div.appendChild(img);
                
                
                const titulo = document.createElement('h1');
                titulo.innerHTML = card.nome;
                div.appendChild(titulo);

                const desc = document.createElement('p');
                desc.innerHTML = card.descricao;
                div.appendChild(desc);

                const link = document.createElement('a');
                link.href = '#';
                link.innerHTML = "IR";
                link.className = 'link_recomendados';
                div.appendChild(link);
                link.addEventListener('click', () => {
                 let longitude = "";
                 let latitude = "";
                 //window.location.href = 'pg2.html'

                 longitude = sessionStorage.setItem("longitude", card.localizacao.longitude);
                 latitude = sessionStorage.setItem("latitude", card.localizacao.latitude);
                 
                 window.location.href = 'pg2.html'
                 
                    
                    
                });
                
                
                
            secao.appendChild(div);

        } 

        
   
        /*}else {
        }*/
    });
}


busca_info()