import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

document.addEventListener('DOMContentLoaded', function() {
    // Configurações do Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyCI_287E4XUbQ_fyhO_tyJ72FKRkGZ8hLI",
        authDomain: "ponto-tur-5e4db.firebaseapp.com",
        projectId: "ponto-tur-5e4db",
        storageBucket: "ponto-tur-5e4db.appspot.com",
        messagingSenderId: "1093552150779",
        appId: "1:1093552150779:web:bbe89f5f8643414166385e"
    };

    // Inicializa o Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    // Verifica o estado da autenticação
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // Usuário autenticado, exibe o e-mail
            const email = user.email;
            document.getElementById('email').innerText = email;
        } else {
            // Não há usuário autenticado
            document.getElementById('email').innerText = 'Usuário não autenticado';
        }
    });
});
