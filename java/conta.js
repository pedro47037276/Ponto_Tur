import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut, sendPasswordResetEmail, deleteUser } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Configuração do Firebase
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
const auth = getAuth();
const db = getFirestore(app);  // Firestore initialization

// Obtém o elemento de email na página
const emailSpan = document.getElementById("email");

// Verifica o status de autenticação
document.addEventListener("DOMContentLoaded", () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // Usuário logado
            emailSpan.textContent = user.email;
        } else {
            // Usuário não logado
            emailSpan.textContent = "Não logado";
            alert("Você precisa estar logado para acessar esta página.");
            window.location.href = "indexcadlog.html";  // Redireciona para a página de login
        }
    });

    // Adiciona o evento de click no botão de logout
    const logoutButton = document.getElementById("logoutButton");
    logoutButton.addEventListener("click", sair);

    // Adiciona o evento de click no botão de excluir conta
    const excluirButton = document.getElementById("excluirButton");
    excluirButton.addEventListener("click", excluirConta);

    // Adiciona o evento de click no botão de redefinir senha
    const redefinirButton = document.getElementById("redefinirButton");
    redefinirButton.addEventListener("click", redefinirSenha);
});

// Função para realizar logout
export function sair() {
    console.log("Tentando sair...");  // Log para depuração
    signOut(auth)
        .then(() => {
            console.log("Logout bem-sucedido");
            alert("Você saiu com sucesso.");
            emailSpan.textContent = "Não logado";
            window.location.href = "indexcadlog.html";  // Redireciona após o logout
        })
        .catch((error) => {
            console.error("Erro ao sair:", error);
            alert("Não foi possível sair. Tente novamente.");
        });
}

// Função para redefinir a senha
export function redefinirSenha() {
    const email = document.getElementById("resetEmail").value;
    
    if (email) {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("Instruções de redefinição de senha foram enviadas para o seu e-mail.");
            })
            .catch((error) => {
                console.error("Erro ao redefinir senha:", error);
                alert("Erro ao enviar e-mail de redefinição. Tente novamente.");
            });
    } else {
        alert("Por favor, insira um e-mail válido.");
    }
}

// Função para excluir a conta
export function excluirConta() {
    const user = auth.currentUser;
    if (user) {
        const confirmation = confirm("Você tem certeza que deseja excluir sua conta? Esta ação não pode ser desfeita.");
        if (confirmation) {
            deleteUser(user)
                .then(() => {
                    alert("Sua conta foi excluída com sucesso.");
                    window.location.href = "indexcadlog.html";  // Redireciona após a exclusão da conta
                })
                .catch((error) => {
                    console.error("Erro ao excluir conta:", error);
                    alert("Erro ao excluir conta. Tente novamente.");
                });
        }
    } else {
        alert("Você não está logado.");
    }
}
