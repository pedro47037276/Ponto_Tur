import firebaseApp from "./conexao_firebase.js"; // Importa o Firebase App inicializado
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const auth = getAuth(firebaseApp); // Usa o app importado para inicializar o Authentication
const emailSpan = document.getElementById("email");

// Verifica se o usuário está logado
document.addEventListener("DOMContentLoaded", () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // Usuário logado
            emailSpan.textContent = user.email;
        } else {
            // Usuário não está logado
            emailSpan.textContent = "Não logado";
            alert("Você precisa estar logado para acessar esta página.");
            window.location.href = "indexcadlog.html"; // Redireciona para a página de login
        }
    });
});

// Função para realizar logout
function sair() {
    signOut(auth)
        .then(() => {
            alert("Você saiu com sucesso.");
            emailSpan.textContent = "Não logado";
            window.location.href = "indexcadlog.html";
        })
        .catch((error) => {
            console.error("Erro ao sair:", error);
            alert("Não foi possível sair. Tente novamente.");
        });
}

export { sair };
