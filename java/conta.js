import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, onAuthStateChanged, sendPasswordResetEmail, deleteUser, signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore, doc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";


// Verifica o estado da autenticação
document.addEventListener('DOMContentLoaded', function() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const email = user.email;
            document.getElementById('email').innerText = email;
        } else {
            document.getElementById('email').innerText = 'Usuário não autenticado';
        }
    });
});

// Função para redefinir senha
window.redefinirSenha = () => {
    const email = document.getElementById('resetEmail').value;
    sendPasswordResetEmail(auth, email)
        .then(() => {
            alert('Email de redefinição enviado.');
        })
        .catch((error) => {
            console.error('Erro ao enviar email: ', error);
            alert('Erro: ' + error.message);
        });
};

// Função para desativar conta
window.desativarConta = async () => {
    const user = auth.currentUser;
    if (user) {
        const userRef = doc(firestore, 'usuarios', user.uid);
        await updateDoc(userRef, { ativo: false })
            .then(() => {
                alert('Conta desativada com sucesso.');
            })
            .catch((error) => {
                console.error('Erro ao desativar conta: ', error);
                alert('Erro: ' + error.message);
            });
    } else {
        alert('Nenhum usuário logado.');
    }
};

// Função para excluir conta
window.excluirConta = async () => {
    const user = auth.currentUser;

    if (user) {
        const userRef = doc(firestore, 'usuarios', user.uid);
        await deleteDoc(userRef);
        deleteUser(user).then(() => {
            alert('Conta excluída com sucesso.');
        }).catch((error) => {
            console.error('Erro ao excluir conta: ', error);
            alert('Erro: ' + error.message);
        });
    } else {
        alert('Nenhum usuário logado.');
    }
};

// Função para sair da conta
window.sair = () => {
    signOut(auth)
        .then(() => {
            alert('Você saiu da conta com sucesso.');
            window.location.href = 'index.html'; 
        })
        .catch((error) => {
            console.error('Erro ao sair da conta: ', error);
            alert('Erro: ' + error.message);
        });
};
