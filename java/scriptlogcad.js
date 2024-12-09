// Referência aos elementos de UI
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^\S+@\S+\.\S+$/;

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
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('senha2').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            window.location.href = "pg2.html";
            console.log('Login bem-sucedido:', userCredential.user);
        })
        .catch((error) => {
            displayError('Erro ao fazer login: ' + error.message);
        });
}

// Função de registro
function register1() {
    const nameInput = document.querySelector('#registerForm input[name="text"]');
    const emailInput = document.querySelector('#registerForm input[name="email"]');
    const passwordInput = document.querySelector('#registerForm input[id="senha"]');

    if (!nameInput || !emailInput || !passwordInput) {
        console.error('Um ou mais campos do formulário não foram encontrados.');
        return;
    }

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('Usuário registrado:', user);

            user.updateProfile({
                displayName: name
            }).then(() => {
                console.log('Nome atualizado:', user.displayName);
                window.location.href = "indexcadlog.html";
            }).catch((error) => {
                console.error('Erro ao atualizar nome:', error);
            });
        })
        .catch((error) => {
            console.error('Erro ao registrar:', error.message);
        });
}

// Validação de campos
function setError(index) {
    // Adiciona borda vermelha e exibe a mensagem de erro
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
}

function removerError(index) {
    // Remove borda e esconde a mensagem de erro
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

function nameValidate() {
    // Validação do nome (mínimo de 3 caracteres)
    if (campos[0].value.trim().length < 3) {
        setError(0);
    } else {
        removerError(0);
    }
}

function emailValidate() {
    // Validação do email (regex)
    if (!emailRegex.test(campos[1].value.trim())) {
        setError(1);
    } else {
        removerError(1);
    }
}

function mainPasswordValidate() {
    // Validação da senha principal (mínimo de 8 caracteres)
    if (campos[2].value.trim().length < 8) {
        setError(2);
    } else {
        removerError(2);
        comparePassword(); // Verifica se as senhas são iguais
    }
}

function comparePassword() {
    // Validação da confirmação de senha
    if (campos[2].value.trim() === campos[3].value.trim() && campos[3].value.trim().length >= 8) {
        removerError(3);
    } else {
        setError(3);
    }
}

function validateForm() {
    // Validação geral do formulário
    let isValid = true;

    // Nome
    if (campos[0].value.trim().length < 3) {
        setError(0);
        isValid = false;
    } else {
        removerError(0);
    }

    // Email
    if (!emailRegex.test(campos[1].value.trim())) {
        setError(1);
        isValid = false;
    } else {
        removerError(1);
    }

    // Senha
    if (campos[2].value.trim().length < 8) {
        setError(2);
        isValid = false;
    } else {
        removerError(2);
    }

    // Confirmação da senha
    if (campos[2].value.trim() !== campos[3].value.trim() || campos[3].value.trim().length < 8) {
        setError(3);
        isValid = false;
    } else {
        removerError(3);
    }

    return isValid;
}

// Eventos de validação
document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm()) {
        register1();
    }
});
