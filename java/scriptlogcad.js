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

// Função de login com Firebase
const login = async (email, senha) => {
    try {
        const userCredential = await firebase.auth().signInWithEmailAndPassword(email, senha);
        const user = userCredential.user;
        console.log('Usuário autenticado:', user.email);
        window.location.href = "index.html"; // Redireciona após login
    } catch (error) {
        console.error('Erro ao fazer login:', error.message);
        alert('Erro ao fazer login: ' + error.message);
    }
};

// Função de registro com Firebase
function register1() {
    const nameInput = document.querySelector('#registerForm input[name="text"]');
    const emailInput = document.querySelector('#registerForm input[name="email"]');
    const passwordInput = document.querySelector('#registerForm input[id="senha"]');

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
                window.location.href = "indexcadlog.html"; // Página após o registro
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
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
}

function removerError(index) {
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

function nameValidate() {
    if (campos[0].value.trim().length < 3) {
        setError(0);
    } else {
        removerError(0);
    }
}

function emailValidate() {
    if (!emailRegex.test(campos[1].value.trim())) {
        setError(1);
    } else {
        removerError(1);
    }
}

function mainPasswordValidate() {
    if (campos[2].value.trim().length < 8) {
        setError(2);
    } else {
        removerError(2);
        comparePassword();
    }
}

function comparePassword() {
    if (campos[2].value.trim() === campos[3].value.trim() && campos[3].value.trim().length >= 8) {
        removerError(3);
    } else {
        setError(3);
    }
}

function validateForm() {
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

    // Confirmação de senha
    if (campos[2].value.trim() !== campos[3].value.trim() || campos[3].value.trim().length < 8) {
        setError(3);
        isValid = false;
    } else {
        removerError(3);
    }

    return isValid;
}

// Evento de validação e registro
document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm()) {
        register1();
    }
});

// Evento de validação e login
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim();
    const senha = document.getElementById('senha2').value.trim();
    
    if (email && senha) {
        login(email, senha);
    } else {
        alert('Por favor, insira e-mail e senha');
    }
});
