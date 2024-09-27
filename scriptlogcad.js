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

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impedir o envio do formulário
  
    // Obter os valores dos campos
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
  
    // Limpar mensagens de erro e bordas vermelhas
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('email').classList.remove('error');
    document.getElementById('password').classList.remove('error');
  
    let isValid = true; // Controle de validação
  
    // Validação do campo de email
    if (email === '') {
      document.getElementById('email').classList.add('error');
      document.getElementById('emailError').textContent = 'Por favor, insira seu email';
      isValid = false;
    }
  
    // Validação do campo de senha
    if (password === '') {
      document.getElementById('password').classList.add('error');
      document.getElementById('passwordError').textContent = 'Por favor, insira sua senha';
      isValid = false;
    }
  
    // Se o formulário estiver válido
    if (isValid) {
      alert('Formulário válido!');
      // Aqui você pode permitir o envio do formulário
      // this.submit(); // Descomente esta linha para enviar o formulário de verdade
    }
  });