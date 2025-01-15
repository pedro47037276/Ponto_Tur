function busca_info() {
    firebase.firestore()
        .collection('servicos')
        .get().then(snapshot => {
            const cardData = snapshot.docs.map(doc => doc.data());
            
        }).catch(error => {
            console.error("Erro ao buscar informações:", error);
        });
}