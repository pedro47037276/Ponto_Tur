// Referência aos elementos de UI
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// Alternar entre as telas de registro e login
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCI_287E4XUbQ_fyhO_tyJ72FKRkGZ8hLI",
    authDomain: "ponto-tur-5e4db.firebaseapp.com",
    projectId: "ponto-tur-5e4db",
    storageBucket: "ponto-tur-5e4db.appspot.com",
    messagingSenderId: "1093552150779",
    appId: "1:1093552150779:web:bbe89f5f8643414166385e"
};

// Inicializar o Firebase
firebase.initializeApp(firebaseConfig);

// Função de login
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            window.location.href = "pg2.html";
            console.log('Login bem-sucedido:', userCredential.user);
        })
        .catch((error) => {
            console.error('Erro ao fazer login:', error.message);
        });
}

// Função de registro
function register1() {
    const name = document.querySelector('#registerForm input[name="text"]').value;
    const email = document.querySelector('#registerForm input[name="email"]').value;
    const password = document.querySelector('#registerForm input[name="password"]').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Registro bem-sucedido
            const user = userCredential.user;
            console.log('Usuário registrado:', user);

            // Atualizar perfil do usuário com o nome (opcional)
            user.updateProfile({
                displayName: name
            }).then(() => {
                console.log('Nome atualizado:', user.displayName);
                window.location.href = "indexcadlog.html"
                // Redirecionar ou outra ação
            }).catch((error) => {
                console.error('Erro ao atualizar nome:', error);
            });
        })
        .catch((error) => {
            console.error('Erro ao registrar:', error.message);
        });
}

//cria uma validação de de login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('error-message');
    
// limapar messagem de erro
    errorMessage.textContent = '';
    // Verifica se os campos não estão vazios
if (email === '' || password === '') {
    errorMessage.textContent = 'Usuário e senha são obrigatórios.';
    return;
  }

// Exemplo de validação adicional (como comprimento mínimo da senha)
if (password.length < 6) {
    errorMessage.textContent = 'A senha deve ter pelo menos 6 caracteres.';
    return;
  }
});
