const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});


const firebaseConfig = {
    apiKey: "AIzaSyCI_287E4XUbQ_fyhO_tyJ72FKRkGZ8hLI",
    authDomain: "ponto-tur-5e4db.firebaseapp.com",
    projectId: "ponto-tur-5e4db",
    storageBucket: "ponto-tur-5e4db.appspot.com",
    messagingSenderId: "1093552150779",
    appId: "1:1093552150779:web:bbe89f5f8643414166385e"
};

firebase.initializeApp(firebaseConfig);

function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            window.location.href = "pg2.html"
            console.log('Login bem-sucedido:', userCredential.user);
            
        })
        .catch((error) => {
            console.error('Erro ao fazer login:', error.message);
            
        });
}


